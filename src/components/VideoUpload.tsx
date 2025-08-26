'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, X, Play, FileVideo, AlertCircle, CheckCircle2 } from 'lucide-react'

interface VideoUploadProps {
  onClose: () => void
  onUploadComplete: (video: any) => void
}

interface VideoFile {
  file: File
  preview: string
  progress: number
  status: 'uploading' | 'processing' | 'complete' | 'error'
  id: string
}

export default function VideoUpload({ onClose, onUploadComplete }: VideoUploadProps) {
  const [videos, setVideos] = useState<VideoFile[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [videoDetails, setVideoDetails] = useState({
    title: '',
    description: '',
    category: 'CLA Basics',
    level: 'Beginner',
    tags: ''
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const categories = [
    'CLA Basics',
    'Advanced Patterns',
    'Game Theory',
    'Ecological Systems',
    'Practice Sessions',
    'Case Studies'
  ]

  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert']

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      handleFiles(files)
    }
  }

  const handleFiles = (files: File[]) => {
    const videoFiles = files.filter(file => file.type.startsWith('video/'))
    
    videoFiles.forEach(file => {
      const videoFile: VideoFile = {
        file,
        preview: URL.createObjectURL(file),
        progress: 0,
        status: 'uploading',
        id: Math.random().toString(36).substr(2, 9)
      }
      
      setVideos(prev => [...prev, videoFile])
      simulateUpload(videoFile.id)
    })
  }

  const simulateUpload = (videoId: string) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 15
      
      setVideos(prev => prev.map(video => 
        video.id === videoId 
          ? { ...video, progress: Math.min(progress, 100) }
          : video
      ))
      
      if (progress >= 100) {
        clearInterval(interval)
        setVideos(prev => prev.map(video => 
          video.id === videoId 
            ? { ...video, status: 'processing', progress: 100 }
            : video
        ))
        
        // Simulate processing
        setTimeout(() => {
          setVideos(prev => prev.map(video => 
            video.id === videoId 
              ? { ...video, status: 'complete' }
              : video
          ))
        }, 2000)
      }
    }, 200)
  }

  const removeVideo = (videoId: string) => {
    setVideos(prev => {
      const video = prev.find(v => v.id === videoId)
      if (video) {
        URL.revokeObjectURL(video.preview)
      }
      return prev.filter(v => v.id !== videoId)
    })
  }

  const handleSubmit = () => {
    const completedVideos = videos.filter(v => v.status === 'complete')
    if (completedVideos.length > 0 && videoDetails.title) {
      const videoData = {
        ...videoDetails,
        files: completedVideos,
        uploadedAt: new Date().toISOString(),
        id: Math.random().toString(36).substr(2, 9)
      }
      onUploadComplete(videoData)
      onClose()
    }
  }

  const canSubmit = videos.some(v => v.status === 'complete') && videoDetails.title

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-retro-dark retro-border max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-accent-neon/30">
          <h2 className="font-display font-bold text-2xl gradient-text tracking-wider">
            ◊ UPLOAD VIDEO ◊
          </h2>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Video Details Form */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 font-retro text-sm tracking-wide mb-2">
                  {'>> VIDEO TITLE <<'}
                </label>
                <input
                  type="text"
                  value={videoDetails.title}
                  onChange={(e) => setVideoDetails(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-retro-darker retro-border px-4 py-3 text-white font-retro tracking-wide focus:outline-none focus:border-accent-neon"
                  placeholder="Enter video title..."
                />
              </div>

              <div>
                <label className="block text-white/80 font-retro text-sm tracking-wide mb-2">
                  {'>> CATEGORY <<'}
                </label>
                <select
                  value={videoDetails.category}
                  onChange={(e) => setVideoDetails(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full bg-retro-darker retro-border px-4 py-3 text-white font-retro tracking-wide focus:outline-none focus:border-accent-neon"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white/80 font-retro text-sm tracking-wide mb-2">
                  {'>> DIFFICULTY LEVEL <<'}
                </label>
                <select
                  value={videoDetails.level}
                  onChange={(e) => setVideoDetails(prev => ({ ...prev, level: e.target.value }))}
                  className="w-full bg-retro-darker retro-border px-4 py-3 text-white font-retro tracking-wide focus:outline-none focus:border-accent-neon"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white/80 font-retro text-sm tracking-wide mb-2">
                  {'>> TAGS (comma separated) <<'}
                </label>
                <input
                  type="text"
                  value={videoDetails.tags}
                  onChange={(e) => setVideoDetails(prev => ({ ...prev, tags: e.target.value }))}
                  className="w-full bg-retro-darker retro-border px-4 py-3 text-white font-retro tracking-wide focus:outline-none focus:border-accent-neon"
                  placeholder="ecology, patterns, advanced..."
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 font-retro text-sm tracking-wide mb-2">
                {'>> DESCRIPTION <<'}
              </label>
              <textarea
                value={videoDetails.description}
                onChange={(e) => setVideoDetails(prev => ({ ...prev, description: e.target.value }))}
                rows={8}
                className="w-full bg-retro-darker retro-border px-4 py-3 text-white font-retro tracking-wide focus:outline-none focus:border-accent-neon resize-none"
                placeholder="Describe what students will learn in this video..."
              />
            </div>
          </div>

          {/* File Upload Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              retro-border border-dashed transition-all duration-300 p-8 text-center cursor-pointer
              ${isDragging ? 'border-accent-neon bg-accent-neon/10' : 'border-white/30 hover:border-accent-neon/50'}
            `}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-12 h-12 text-white/60 mx-auto mb-4" />
            <h3 className="font-retro font-bold text-lg text-white/80 mb-2 tracking-wider">
              {'>> DROP VIDEO FILES HERE <<'}
            </h3>
            <p className="text-white/60 font-retro text-sm tracking-wide">
              Or click to browse • Supports MP4, MOV, AVI • Max 500MB per file
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>

          {/* Uploaded Videos */}
          <AnimatePresence>
            {videos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <h3 className="font-retro font-bold text-lg text-white/80 tracking-wider">
                  {'>> UPLOADED FILES <<'}
                </h3>
                {videos.map((video) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="retro-border bg-retro-darker/50 p-4 flex items-center gap-4"
                  >
                    <div className="w-16 h-12 bg-gradient-to-r from-accent-neon/20 to-secondary-500/20 rounded flex items-center justify-center flex-shrink-0">
                      <FileVideo className="w-6 h-6 text-white/60" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-retro font-bold tracking-wide truncate">
                        {video.file.name}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-white/60 font-retro mt-1">
                        <span>{(video.file.size / 1024 / 1024).toFixed(1)} MB</span>
                        <span>•</span>
                        <span className={
                          video.status === 'complete' ? 'text-accent-lime' :
                          video.status === 'error' ? 'text-red-400' :
                          'text-accent-orange'
                        }>
                          {video.status === 'uploading' ? `Uploading ${Math.round(video.progress)}%` :
                           video.status === 'processing' ? 'Processing...' :
                           video.status === 'complete' ? 'Ready' : 'Error'}
                        </span>
                      </div>
                      
                      {video.status === 'uploading' && (
                        <div className="w-full bg-retro-darker rounded-full h-2 mt-2">
                          <div 
                            className="bg-gradient-to-r from-accent-neon to-secondary-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${video.progress}%` }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {video.status === 'complete' && (
                        <CheckCircle2 className="w-5 h-5 text-accent-lime" />
                      )}
                      {video.status === 'error' && (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      )}
                      <button
                        onClick={() => removeVideo(video.id)}
                        className="text-white/60 hover:text-red-400 transition-colors p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-white/20">
            <button
              onClick={onClose}
              className="retro-border bg-transparent text-white px-6 py-3 font-retro font-bold tracking-wider hover:bg-white/10 transition-colors"
            >
              {'>> CANCEL <<'}
            </button>
            
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`
                px-8 py-3 font-retro font-bold tracking-wider transition-all duration-300
                ${canSubmit 
                  ? 'retro-button text-black retro-shadow hover:scale-105' 
                  : 'retro-border bg-transparent text-white/40 cursor-not-allowed'
                }
              `}
            >
              {'>> PUBLISH VIDEO <<'}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
