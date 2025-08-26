'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, CheckCircle2, Clock, Users, Star, BookOpen, Target, Zap } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/Logo'

interface LessonPageProps {
  params: { id: string }
}

export default function LessonPage({ params }: LessonPageProps) {
  const [isCompleted, setIsCompleted] = useState(false)

  // Mock lesson data - in real app this would come from API/database
  const lesson = {
    id: parseInt(params.id),
    title: 'Introduction to Jiu Jitsu Fundamentals',
    category: 'Fundamentals',
    duration: '12:34',
    difficulty: 'Beginner',
    description: 'Learn the fundamental principles of Brazilian Jiu Jitsu and basic positions. This comprehensive lesson covers core concepts, basic techniques, and foundational movements.',
    students: 1234,
    rating: 4.8,
    objectives: [
      'Understand the basic principles of Brazilian Jiu Jitsu',
      'Learn fundamental positions and posture',
      'Master basic movement patterns and concepts',
      'Develop situational awareness on the mat'
    ],
    transcript: `Welcome to Introduction to Jiu Jitsu Fundamentals. In this lesson, we'll explore the core principles of Brazilian Jiu Jitsu and how to build a strong foundation...`,
    nextLessonId: 2
  }

  const handleMarkComplete = () => {
    setIsCompleted(true)
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="relative overflow-hidden border-b-2 border-accent-neon">
        <div className="absolute inset-0 bg-gradient-to-r from-retro-dark/80 to-retro-purple/80 backdrop-blur-sm"></div>
        <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/">
            <motion.div 
              className="cursor-pointer hover:scale-105 transition-transform"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo size="lg" />
            </motion.div>
          </Link>
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
            <Link href="/members">
              <button className="retro-button text-black px-6 py-2 font-retro font-bold tracking-wider hover:scale-105 transition-all duration-300 retro-shadow">
                {'>> LOGIN <<'}
              </button>
            </Link>
          </motion.div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/lessons">
            <button className="retro-border bg-transparent text-white px-4 py-2 font-retro tracking-wider hover:bg-white/10 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              {'<< BACK TO LESSONS'}
            </button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="retro-border bg-retro-dark/50 p-4 backdrop-blur-sm"
            >
              <div className="relative aspect-video rounded overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/iW9SK77kNoA"
                  title={lesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Video Controls */}
              <div className="flex items-center justify-between bg-retro-darker/80 p-3 rounded">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-accent-neon rounded-full animate-neon-pulse"></div>
                  <span className="font-retro text-white/80 text-sm tracking-wider">
                    {'>> STREAMING HD <<'}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white/60 font-retro text-xs tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.duration}</span>
                  </div>
                  <button
                    onClick={handleMarkComplete}
                    className={`
                      px-4 py-2 font-retro font-bold tracking-wider text-xs transition-all duration-300
                      ${isCompleted 
                        ? 'bg-accent-lime/20 text-accent-lime border border-accent-lime' 
                        : 'retro-button text-black hover:scale-105'
                      }
                    `}
                    disabled={isCompleted}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 inline mr-1" />
                        COMPLETED
                      </>
                    ) : (
                      'MARK COMPLETE'
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Lesson Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="retro-border bg-retro-dark/30 p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-retro text-accent-neon text-sm tracking-wider">
                  {'>> ' + lesson.category.toUpperCase() + ' <<'}
                </span>
                <span className="font-retro text-accent-lime text-sm tracking-wider">
                  {'>> ' + lesson.difficulty.toUpperCase() + ' <<'}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent-orange fill-current" />
                  <span className="text-white/80 font-retro text-sm">{lesson.rating}</span>
                </div>
              </div>

              <h1 className="font-display font-bold text-3xl md:text-4xl gradient-text tracking-wider mb-4">
                {lesson.title}
              </h1>

              <p className="text-white/80 font-retro tracking-wide mb-6 leading-relaxed">
                {lesson.description}
              </p>

              <div className="flex items-center gap-6 text-white/60 font-retro text-sm">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {lesson.students} students
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {lesson.duration}
                </div>
              </div>
            </motion.div>

            {/* Learning Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="retro-border bg-retro-dark/30 p-6"
            >
              <h2 className="font-display font-bold text-2xl gradient-text tracking-wider mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-accent-neon" />
                ◊ LEARNING OBJECTIVES ◊
              </h2>
              <div className="space-y-3">
                {lesson.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-neon rounded-full mt-2 flex-shrink-0 animate-neon-pulse"></div>
                    <span className="text-white/80 font-retro tracking-wide">{objective}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="retro-border bg-retro-dark/30 p-6"
            >
              <h3 className="font-display font-bold text-xl gradient-text tracking-wider mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-lime" />
                PROGRESS
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-retro text-white/80 text-sm tracking-wider">COMPLETION</span>
                  <span className="font-retro text-accent-neon text-sm tracking-wider">
                    {isCompleted ? '100%' : '0%'}
                  </span>
                </div>
                <div className="w-full bg-retro-darker rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r from-accent-neon to-accent-lime h-3 rounded-full transition-all duration-1000 ${
                      isCompleted ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>
            </motion.div>

            {/* Next Lesson */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="retro-border bg-retro-dark/30 p-6"
            >
              <h3 className="font-display font-bold text-xl gradient-text tracking-wider mb-4">
                NEXT LESSON
              </h3>
              <Link href={`/lessons/${lesson.nextLessonId}`}>
                <div className="retro-border bg-retro-darker/50 p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3 mb-2">
                    <Play className="w-4 h-4 text-accent-neon group-hover:text-accent-lime transition-colors" />
                    <span className="font-retro text-white/80 text-sm tracking-wider">LESSON 2</span>
                  </div>
                  <h4 className="font-retro font-bold text-white tracking-wide">
                    Basic Guard Positions and Concepts
                  </h4>
                </div>
              </Link>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="retro-border bg-retro-dark/30 p-6"
            >
              <h3 className="font-display font-bold text-xl gradient-text tracking-wider mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-secondary-500" />
                RESOURCES
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left retro-border bg-retro-darker/50 p-3 hover:bg-white/5 transition-colors">
                  <span className="font-retro text-white/80 text-sm tracking-wider">
                    {'>> LESSON NOTES <<'}
                  </span>
                </button>
                <button className="w-full text-left retro-border bg-retro-darker/50 p-3 hover:bg-white/5 transition-colors">
                  <span className="font-retro text-white/80 text-sm tracking-wider">
                    {'>> PRACTICE EXERCISES <<'}
                  </span>
                </button>
                <button className="w-full text-left retro-border bg-retro-darker/50 p-3 hover:bg-white/5 transition-colors">
                  <span className="font-retro text-white/80 text-sm tracking-wider">
                    {'>> DISCUSSION FORUM <<'}
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
