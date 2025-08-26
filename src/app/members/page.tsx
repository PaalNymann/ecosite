'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Eye, EyeOff, Zap, Trophy, BookOpen, Clock, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function MembersPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock authentication - in real app would handle actual auth
    console.log('Form submitted:', formData)
    // For demo, just show success message or redirect
  }

  const membershipTiers = [
    {
      name: 'PLAYER',
      price: '$19',
      period: '/month',
      color: 'text-accent-lime',
      features: [
        'Access to CLA Basics',
        '10 Practice Sessions',
        'Community Forum',
        'Mobile App Access'
      ],
      popular: false
    },
    {
      name: 'PRO GAMER',
      price: '$39',
      period: '/month',
      color: 'text-accent-neon',
      features: [
        'All Player Features',
        'Advanced Patterns',
        'Game Theory Modules',
        '1-on-1 Coaching Session',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'MASTER',
      price: '$99',
      period: '/month',
      color: 'text-secondary-500',
      features: [
        'All Pro Features',
        'Exclusive Master Classes',
        'Direct Instructor Access',
        'Custom Learning Paths',
        'Certification Program'
      ],
      popular: false
    }
  ]

  const stats = [
    { label: 'Active Learners', value: '2,847', icon: <User className="w-6 h-6" /> },
    { label: 'Lessons Completed', value: '45,692', icon: <BookOpen className="w-6 h-6" /> },
    { label: 'Hours Learned', value: '12,384', icon: <Clock className="w-6 h-6" /> },
    { label: 'Success Rate', value: '94%', icon: <Trophy className="w-6 h-6" /> }
  ]

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
                Member Portal
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
            ACCESS TERMINAL
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl gradient-text tracking-wider mb-6">
            Join the Dojo
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-retro tracking-wide max-w-3xl mx-auto">
            {'>> BEGIN YOUR JIU JITSU JOURNEY <<'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Login/Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="retro-border bg-retro-dark/50 p-8 backdrop-blur-sm"
          >
            {/* Form Toggle */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`
                  flex-1 py-3 font-retro font-bold tracking-wider transition-all duration-300
                  ${isLogin 
                    ? 'retro-button text-black retro-shadow' 
                    : 'retro-border bg-transparent text-white hover:bg-white/10'
                  }
                `}
              >
                {'>> LOGIN <<'}
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`
                  flex-1 py-3 font-retro font-bold tracking-wider transition-all duration-300
                  ${!isLogin 
                    ? 'retro-button text-black retro-shadow' 
                    : 'retro-border bg-transparent text-white hover:bg-white/10'
                  }
                `}
              >
                {'>> SIGN UP <<'}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-white/80 font-retro text-sm tracking-wide mb-2">
                    {'>> PLAYER NAME <<'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-retro-darker retro-border pl-12 pr-4 py-3 text-white font-retro tracking-wide focus:outline-none focus:border-accent-neon"
                      placeholder="Enter your name..."
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-white/80 font-retro text-sm tracking-wide mb-2">
                  {'>> EMAIL ADDRESS <<'}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-retro-darker retro-border pl-12 pr-4 py-3 text-white font-retro tracking-wide focus:outline-none focus:border-accent-neon"
                    placeholder="player@ecosite.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 font-retro text-sm tracking-wide mb-2">
                  {'>> PASSWORD <<'}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-retro-darker retro-border pl-12 pr-12 py-3 text-white font-retro tracking-wide focus:outline-none focus:border-accent-neon"
                    placeholder="Enter password..."
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-white/80 font-retro text-sm tracking-wide mb-2">
                    {'>> CONFIRM PASSWORD <<'}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full bg-retro-darker retro-border pl-12 pr-4 py-3 text-white font-retro tracking-wide focus:outline-none focus:border-accent-neon"
                      placeholder="Confirm password..."
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full retro-button text-black py-4 font-retro font-bold tracking-wider hover:scale-105 transition-all duration-300 retro-shadow flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                {isLogin ? '>> ACCESS GRANTED <<' : '>> JOIN NETWORK <<'}
              </button>
            </form>

            {isLogin && (
              <div className="text-center mt-6">
                <button className="text-accent-neon hover:text-accent-lime transition-colors font-retro text-sm tracking-wider">
                  {'>> FORGOT PASSWORD? <<'}
                </button>
              </div>
            )}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="w-full text-brand-accent hover:text-brand-accent-light transition-colors font-retro tracking-wide"
            >
              {isLogin ? 'Create New Account' : 'Back to Login'}
            </button>
          </motion.div>

          {/* Membership Info */}
          <div className="space-y-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="retro-border bg-retro-dark/30 p-6"
            >
              <h2 className="font-display font-bold text-2xl gradient-text tracking-wider mb-6 text-center">
                ◊ NETWORK STATS ◊
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-accent-neon neon-glow mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-display font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/60 font-retro text-xs tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Membership Tiers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="retro-border bg-retro-dark/30 p-6"
            >
              <h2 className="font-display font-bold text-2xl gradient-text tracking-wider mb-6 text-center">
                ◊ MEMBERSHIP LEVELS ◊
              </h2>
              <div className="space-y-4">
                {membershipTiers.map((tier, index) => (
                  <div key={index} className={`
                    retro-border bg-retro-darker/50 p-4 transition-all duration-300 hover:scale-105
                    ${tier.popular ? 'border-accent-neon shadow-lg shadow-accent-neon/20' : ''}
                  `}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`font-display font-bold ${tier.color}`}>
                          {tier.name}
                        </span>
                        {tier.popular && (
                          <span className="bg-accent-neon text-black px-2 py-1 rounded font-retro text-xs tracking-wider">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-display font-bold text-white">
                          {tier.price}
                        </span>
                        <span className="text-white/60 font-retro text-sm">
                          {tier.period}
                        </span>
                      </div>
                    </div>
                    <div className="text-white/60 font-retro text-xs tracking-wider">
                      {tier.features.slice(0, 2).join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href="/">
                <button className="w-full mt-6 retro-border bg-transparent text-secondary-500 py-3 font-retro font-bold tracking-wider hover:bg-secondary-500/10 transition-all duration-300 flex items-center justify-center gap-2">
                  VIEW ALL PLANS
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
