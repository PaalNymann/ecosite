'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Lock, CheckCircle2, Clock, Users, Star, ArrowRight, Grid3X3 } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function LessonsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Lessons', color: 'text-white', count: 24 },
    { id: 'fundamentals', name: 'Fundamentals', color: 'text-accent-neon', count: 8 },
    { id: 'guard-techniques', name: 'Guard Techniques', color: 'text-secondary-500', count: 6 },
    { id: 'submissions', name: 'Submissions', color: 'text-accent-lime', count: 4 },
    { id: 'takedowns', name: 'Takedowns', color: 'text-accent-orange', count: 3 },
    { id: 'sparring', name: 'Sparring Sessions', color: 'text-cyan-text', count: 2 },
    { id: 'competition', name: 'Competition Prep', color: 'text-pink-400', count: 1 }
  ]

  const lessons = [
    {
      id: 1,
      title: 'Introduction to Jiu Jitsu Fundamentals',
      category: 'fundamentals',
      duration: '12:34',
      difficulty: 'Beginner',
      completed: true,
      locked: false,
      description: 'Learn the fundamental principles of Brazilian Jiu Jitsu and basic positions.',
      students: 1234,
      rating: 4.8,
      videoId: 'iW9SK77kNoA'
    },
    {
      id: 2,
      title: 'Basic Guard Positions and Concepts',
      category: 'guard-techniques',
      duration: '18:45',
      difficulty: 'Beginner',
      completed: false,
      locked: false,
      description: 'Master the fundamental guard positions and understand their strategic applications.',
      students: 987,
      rating: 4.9,
      videoId: 'iW9SK77kNoA'
    },
    {
      id: 3,
      title: 'Armbar from Closed Guard',
      category: 'submissions',
      duration: '15:20',
      difficulty: 'Intermediate',
      completed: false,
      locked: false,
      description: 'Step-by-step breakdown of the classic armbar submission from closed guard.',
      students: 756,
      rating: 4.7,
      videoId: 'iW9SK77kNoA'
    },
    {
      id: 4,
      title: 'Double Leg Takedown Mechanics',
      category: 'takedowns',
      duration: '22:10',
      difficulty: 'Intermediate',
      completed: false,
      locked: false,
      description: 'Perfect your double leg takedown with proper timing and technique.',
      students: 543,
      rating: 4.6,
      videoId: 'iW9SK77kNoA'
    },
    {
      id: 5,
      title: 'Competition Strategy and Mindset',
      category: 'competition',
      duration: '35:15',
      difficulty: 'Advanced',
      completed: false,
      locked: false,
      description: 'Mental preparation and strategic thinking for jiu jitsu competitions.',
      students: 234,
      rating: 5.0,
      videoId: 'iW9SK77kNoA'
    },
    {
      id: 6,
      title: 'Live Sparring Fundamentals',
      category: 'sparring',
      duration: '45:00',
      difficulty: 'Intermediate',
      completed: false,
      locked: true,
      description: 'Learn how to apply techniques in live rolling situations.',
      students: 156,
      rating: 4.8,
      videoId: 'iW9SK77kNoA'
    }
  ]

  const filteredLessons = selectedCategory === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.category === selectedCategory)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-accent-lime'
      case 'Intermediate': return 'text-accent-orange'
      case 'Advanced': return 'text-secondary-500'
      case 'Expert': return 'text-accent-neon'
      default: return 'text-white'
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="border-b border-brand-accent/20 bg-surface/80 backdrop-blur-md">
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
                Technique Library
              </motion.div>
            </div>
            <motion.div 
              className="flex items-center space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/lessons" className="cyan-text hover:text-accent-lime transition-colors font-retro tracking-wider">
                [LESSONS]
              </Link>
              <Link href="/members" className="cyan-text hover:text-accent-lime transition-colors font-retro tracking-wider">
                [MEMBERS]
              </Link>
              <Link href="/" className="retro-button text-white px-6 py-3 font-medium tracking-wide hover:scale-105 transition-all duration-300 modern-shadow">
                Back to Dojo
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-retro text-brand-accent text-sm mb-4 tracking-wider">
            TRAINING MODULES
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl gradient-text tracking-wider mb-6">
            Choose Your Path
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-retro tracking-wide max-w-3xl mx-auto">
            {'>> MASTER THE GENTLE ART OF JIU JITSU <<'}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-6 py-3 font-retro font-bold tracking-wider transition-all duration-300 flex items-center gap-2
                  ${selectedCategory === category.id 
                    ? 'retro-button text-black retro-shadow' 
                    : 'retro-border bg-transparent text-white hover:bg-white/10'
                  }
                `}
              >
                <span className={category.color}>◊</span>
                {category.name}
                <span className="text-xs opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Lessons Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredLessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                glass-card p-6 hover:bg-brand-accent/10 transition-all duration-300 cursor-pointer group hover:scale-105
                ${lesson.locked ? 'opacity-60' : ''}
              `}
            >
              <Link href={lesson.locked ? '#' : `/lessons/${lesson.id}`}>
                <div className="relative">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-retro-purple/30 to-retro-dark/30 relative overflow-hidden rounded-lg">
                    {lesson.locked ? (
                      <>
                        <div className="absolute inset-0 retro-grid opacity-20"></div>
                        <div className="flex items-center justify-center h-full">
                          <Lock className="w-12 h-12 text-white/40" />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* YouTube Thumbnail */}
                        <img 
                          src={`https://img.youtube.com/vi/${lesson.videoId}/maxresdefault.jpg`}
                          alt={lesson.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                          <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white fill-white" />
                          </div>
                        </div>
                        {/* Duration Badge */}
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-bold">
                          {lesson.duration}
                        </div>
                      </>
                    )}
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      {lesson.completed ? (
                        <div className="flex items-center gap-1 bg-accent-lime/20 text-accent-lime px-2 py-1 rounded font-retro text-xs tracking-wider">
                          <CheckCircle2 className="w-3 h-3" />
                          COMPLETE
                        </div>
                      ) : lesson.locked ? (
                        <div className="flex items-center gap-1 bg-red-500/20 text-red-400 px-2 py-1 rounded font-retro text-xs tracking-wider">
                          <Lock className="w-3 h-3" />
                          LOCKED
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 bg-accent-orange/20 text-accent-orange px-2 py-1 rounded font-retro text-xs tracking-wider">
                          <Clock className="w-3 h-3" />
                          IN PROGRESS
                        </div>
                      )}
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-retro-dark/80 text-white px-2 py-1 rounded font-retro text-xs tracking-wider">
                      {lesson.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-retro text-xs tracking-wider ${getDifficultyColor(lesson.difficulty)}`}>
                        {'>> ' + lesson.difficulty.toUpperCase() + ' <<'}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent-orange fill-current" />
                        <span className="text-white/80 font-retro text-sm">{lesson.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-3 tracking-wider">
                      {lesson.title}
                    </h3>

                    <p className="text-white/70 font-retro text-sm tracking-wide mb-4 line-clamp-2">
                      {lesson.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-white/60 font-retro text-xs">
                        <Users className="w-4 h-4" />
                        {lesson.students} students
                      </div>
                      
                      {!lesson.locked && (
                        <div className="flex items-center gap-1 text-accent-neon font-retro text-xs tracking-wider">
                          START
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-16 border-2 border-accent-lime bg-retro-dark/30 rotate-45 neon-glow"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <Grid3X3 className="w-12 h-12 text-accent-neon animate-retro-glow" />
        </div>
      </div>
    </div>
  )
}
