'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, Video, FileText, Users, BarChart3, Settings, Plus, Edit, Trash2, Menu, X } from 'lucide-react'
import VideoUpload from '@/components/VideoUpload'
import Logo from '@/components/Logo'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('videos')
  const [showVideoUpload, setShowVideoUpload] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [videos, setVideos] = useState([
    { id: 1, title: 'Advanced Guard Techniques', duration: '12:45', status: 'Published', views: 1234 },
    { id: 2, title: 'Fundamental Positions', duration: '8:32', status: 'Draft', views: 0 },
    { id: 3, title: 'Submission Setups', duration: '15:20', status: 'Published', views: 892 },
  ])

  const stats = [
    { label: 'Total Videos', value: '247', icon: <Video className="w-6 h-6" />, color: 'neon-text' },
    { label: 'Active Users', value: '1,432', icon: <Users className="w-6 h-6" />, color: 'cyan-text' },
    { label: 'Subscriptions', value: '892', icon: <BarChart3 className="w-6 h-6" />, color: 'text-accent-lime' },
    { label: 'Revenue', value: '$24,680', icon: <Settings className="w-6 h-6" />, color: 'text-accent-orange' }
  ]

  const handleVideoUpload = (videoData: any) => {
    const newVideo = {
      id: Date.now(),
      title: videoData.title,
      duration: '0:00', // Would be calculated from actual video
      status: 'Processing',
      views: 0,
      category: videoData.category,
      level: videoData.level,
      description: videoData.description,
      tags: videoData.tags.split(',').map((tag: string) => tag.trim()),
      uploadedAt: videoData.uploadedAt
    }
    setVideos(prev => [newVideo, ...prev])
  }

  const tabs = [
    { id: 'videos', label: 'VIDEOS', icon: <Video className="w-5 h-5" /> },
    { id: 'posts', label: 'POSTS', icon: <FileText className="w-5 h-5" /> },
    { id: 'users', label: 'USERS', icon: <Users className="w-5 h-5" /> },
    { id: 'analytics', label: 'ANALYTICS', icon: <BarChart3 className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="border-b-2 border-accent-neon bg-retro-dark/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Logo size="md" />
              <motion.div 
                className="font-display font-bold text-2xl gradient-text tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                ◊ ADMIN CONSOLE ◊
              </motion.div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <div className="font-retro text-accent-lime text-sm tracking-widest">
                {'>>> SYSTEM STATUS: ONLINE <<<'}
              </div>
              <button className="retro-button text-black px-4 py-2 font-retro font-bold tracking-wider">
                {'>> LOGOUT <<'}
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-accent-neon transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-accent-neon/30 z-50 md:hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <Logo size="sm" />
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white hover:text-accent-neon transition-colors p-2"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <nav className="space-y-6">
                    <div className="font-retro text-accent-lime text-sm tracking-widest mb-4">
                      {'>>> SYSTEM STATUS: ONLINE <<<'}
                    </div>
                    <button 
                      className="w-full retro-button text-black px-4 py-2 font-retro font-bold tracking-wider text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {'>> LOGOUT <<'}
                    </button>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="retro-border bg-retro-dark/50 backdrop-blur-sm p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} neon-glow`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-display font-bold ${stat.color}`}>
                  {stat.value}
                </div>
              </div>
              <div className="text-white/80 font-retro text-sm tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-6 py-3 font-retro font-bold tracking-wider transition-all duration-300
                ${activeTab === tab.id 
                  ? 'retro-button text-black retro-shadow' 
                  : 'retro-border bg-transparent text-white hover:bg-white/10'
                }
              `}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="retro-border bg-retro-dark/50 backdrop-blur-sm p-8"
        >
          {activeTab === 'videos' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-bold text-2xl gradient-text tracking-wider">
                  ◊ VIDEO MANAGEMENT ◊
                </h2>
                <button 
                  onClick={() => setShowVideoUpload(true)}
                  className="retro-button text-black px-6 py-3 font-retro font-bold tracking-wider flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Plus className="w-5 h-5" />
                  {'>> ADD VIDEO <<'}
                </button>
              </div>

              <div className="space-y-4">
                {videos.map((video: any) => (
                  <div key={video.id} className="retro-border bg-retro-darker/50 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-12 bg-gradient-to-r from-accent-neon/20 to-secondary-500/20 rounded flex items-center justify-center">
                        <Video className="w-6 h-6 text-white/60" />
                      </div>
                      <div>
                        <h3 className="text-white font-retro font-bold tracking-wide mb-1">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-white/60 font-retro">
                          <span>{video.duration}</span>
                          <span>•</span>
                          <span className={video.status === 'Published' ? 'text-accent-lime' : 'text-accent-orange'}>
                            {video.status}
                          </span>
                          <span>•</span>
                          <span>{video.views} views</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="retro-border bg-transparent text-secondary-500 p-2 hover:bg-secondary-500/10">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="retro-border bg-transparent text-red-400 p-2 hover:bg-red-400/10">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'posts' && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="font-retro font-bold text-xl text-white/80 mb-2 tracking-wider">
                {'>> POST MANAGEMENT SYSTEM <<'}
              </h3>
              <p className="text-white/60 font-retro tracking-wide">
                Create and manage blog posts and articles
              </p>
              <button className="retro-button text-black px-6 py-3 font-retro font-bold tracking-wider mt-6">
                {'>> CREATE POST <<'}
              </button>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="font-retro font-bold text-xl text-white/80 mb-2 tracking-wider">
                {'>> USER MANAGEMENT PORTAL <<'}
              </h3>
              <p className="text-white/60 font-retro tracking-wide">
                Manage subscribers and user permissions
              </p>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="text-center py-12">
              <BarChart3 className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="font-retro font-bold text-xl text-white/80 mb-2 tracking-wider">
                {'>> ANALYTICS DASHBOARD <<'}
              </h3>
              <p className="text-white/60 font-retro tracking-wide">
                Track performance and user engagement metrics
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Video Upload Modal */}
      <AnimatePresence>
        {showVideoUpload && (
          <VideoUpload
            onClose={() => setShowVideoUpload(false)}
            onUploadComplete={handleVideoUpload}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
