'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Star, Zap, Grid3X3, Target, Users, CheckCircle2, Gamepad2, Crown, Rocket, Trophy } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "500+ TECHNIQUES",
      description: "Master jiu jitsu through progressive skill development",
      color: "neon-text"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "BLACK BELT MASTERS",
      description: "Learn from world-class jiu jitsu instructors",
      color: "cyan-text"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "RAPID PROGRESS",
      description: "Accelerate your jiu jitsu journey with proven methods",
      color: "text-accent-lime"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "BELT PROGRESSION",
      description: "Track your journey from white to black belt",
      color: "text-accent-orange"
    }
  ]

  const pricingPlans = [
    {
      name: "PLAYER",
      price: "$19",
      period: "/month",
      features: [
        "Access to 100+ basic lessons",
        "Community forum access",
        "Mobile app included",
        "Progress tracking"
      ],
      color: "cyan-text",
      popular: false
    },
    {
      name: "PRO GAMER",
      price: "$39",
      period: "/month",
      features: [
        "All 500+ lessons unlocked",
        "Expert Q&A sessions",
        "Downloadable content",
        "Priority support",
        "Advanced analytics"
      ],
      color: "neon-text",
      popular: true
    },
    {
      name: "MASTER",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Pro Gamer",
        "1-on-1 coaching calls",
        "Custom learning paths",
        "Early access to new content",
        "Lifetime access guarantee"
      ],
      color: "text-accent-lime",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="relative overflow-hidden border-b-2 border-accent-neon">
        <div className="absolute inset-0 bg-gradient-to-r from-retro-dark/40 to-retro-purple/40 backdrop-blur-sm"></div>
        <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
          <motion.div 
            className="cursor-pointer hover:scale-105 transition-transform"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="lg" />
          </motion.div>
          <motion.div 
            className="flex items-center space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/lessons" className="cyan-text hover:text-accent-lime transition-colors font-bold tracking-wider">
              LESSONS
            </Link>
            <Link href="/members" className="cyan-text hover:text-accent-lime transition-colors font-bold tracking-wider">
              MEMBERS
            </Link>
            <Link href="/members">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-2 font-bold tracking-wider hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-purple-500/25">
                LOGIN
              </button>
            </Link>
          </motion.div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-8 max-w-7xl mx-auto">
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="mb-6 mt-4 flex justify-center relative">
              <Logo size="hero" className="mx-auto" />
              
              {/* Animated Grapplers - slides in to exact position from "Jiu Jitsu (5)" logo */}
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 2.0, type: "spring", stiffness: 80 }}
                className="absolute transform"
                style={{ 
                  right: '32%', // Position to the right of the "t" in "Quest" (not on top)
                  top: '52%', // Moved down 2% to align with bottom of logo text
                  transform: 'translateY(-50%)'
                }}
              >
                <motion.img
                  src="/Grapplers.png"
                  alt="BJJ Grapplers"
                  className="h-16 w-auto md:h-22 lg:h-28"
                  animate={{ 
                    rotate: [-3, 3, -3], 
                    scale: [1, 1.02, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            </div>
            <h1 className="font-black text-4xl md:text-6xl lg:text-7xl mb-4 gradient-text tracking-wide">
              The Smarter Way to Learn BJJ
            </h1>
            <div className="p-4 max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-sm mb-6 rounded-lg border border-gray-700">
              <p className="text-lg text-white font-semibold leading-relaxed tracking-wide">
                Master jiu-jitsu with constraint-led games. A proven method used by elite coaches to build real skills faster and deeper.
              </p>
            </div>
          </motion.div>

          {/* Button Above Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-6"
          >
            <Link href="/members">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-8 py-4 font-black tracking-wider hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-purple-500/25">
                Player 1 start games
              </button>
            </Link>
          </motion.div>

          {/* Video Section - Above the fold */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="bg-gray-900/60 backdrop-blur-sm p-4 max-w-4xl mx-auto rounded-lg border border-gray-700">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/iW9SK77kNoA"
                  title="Jiu Jitsu Technique Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded"
                ></iframe>
              </div>
            </div>
          </motion.div>


        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gray-900/60 backdrop-blur-sm p-6 text-center rounded-lg border border-gray-700">
            <div className="text-accent-neon text-3xl mb-4">🥋</div>
            <h3 className="font-display font-bold text-xl gradient-text mb-2">
              FUNDAMENTALS
            </h3>
            <p className="text-white/70 font-retro text-sm">
              Master the essential BJJ positions and movements
            </p>
          </div>
          
          <div className="bg-gray-900/60 backdrop-blur-sm p-6 text-center rounded-lg border border-gray-700">
            <div className="text-accent-neon text-3xl mb-4">🏆</div>
            <h3 className="font-display font-bold text-xl gradient-text mb-2">
              COMPETITION PREP
            </h3>
            <p className="text-white/70 font-retro text-sm">
              Advanced techniques for tournament success
            </p>
          </div>
          
          <div className="retro-border bg-retro-dark/50 backdrop-blur-sm p-6 text-center">
            <div className="text-accent-neon text-3xl mb-4">🎯</div>
            <h3 className="font-display font-bold text-xl gradient-text mb-2">
              SUBMISSIONS
            </h3>
            <p className="text-white/70 font-retro text-sm">
              Learn effective finishing techniques and setups
            </p>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-retro-dark to-retro-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-retro-darker/50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="font-retro text-accent-orange text-sm mb-4 tracking-widest">
              {'>>> SUBSCRIPTION TIERS AVAILABLE <<<'}
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 gradient-text tracking-wider">
              ◊ CHOOSE YOUR LEVEL ◊
            </h2>
            <div className="p-4 max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-700">
              <p className="text-lg text-white font-retro tracking-wide">
                {'>> SELECT YOUR GAMING PACKAGE AND START YOUR JOURNEY <<'}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-accent-neon to-secondary-500 px-6 py-2 rounded-full">
                      <span className="text-black font-retro font-bold text-sm tracking-wider">
                        {'>> MOST POPULAR <<'}
                      </span>
                    </div>
                  </div>
                )}
                <div className={`
                  bg-gray-900/60 backdrop-blur-sm p-8 h-full rounded-lg border border-gray-700
                  hover:bg-retro-dark/70 transition-all duration-300
                  ${plan.popular ? 'retro-shadow scale-105' : ''}
                `}>
                  <div className="text-center mb-8">
                    <h3 className={`font-retro font-bold text-2xl mb-4 tracking-wider ${plan.color}`}>
                      {plan.name}
                    </h3>
                    <div className="mb-6">
                      <span className={`text-5xl font-display font-bold ${plan.color}`}>
                        {plan.price}
                      </span>
                      <span className="text-white/60 font-retro text-lg">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${plan.color.replace('text-', 'bg-')} mt-2 neon-glow`}></div>
                        <span className="text-white/80 font-retro text-sm tracking-wide">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/members">
                    <button className={`
                      w-full py-4 font-retro font-bold tracking-wider transition-all duration-300
                      ${plan.popular 
                        ? 'retro-button text-black hover:scale-105 retro-shadow' 
                        : 'bg-transparent text-white hover:bg-white/10 rounded-lg border border-gray-600'
                      }
                    `}>
                      {'>> SELECT PLAN <<'}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-retro-purple to-retro-cyan border-t-2 border-accent-neon relative overflow-hidden">
        <div className="absolute inset-0 bg-retro-dark/30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-retro text-accent-lime text-sm mb-4 tracking-widest">
              {'>>> NEURAL LINK ESTABLISHMENT PROTOCOL <<<'}
            </div>
            <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 gradient-text tracking-wider">
              ◊ JACK INTO THE MATRIX ◊
            </h2>
            <div className="p-6 mb-10 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-700">
              <p className="text-xl text-white font-retro tracking-wide leading-relaxed">
                {'>> CONNECT TO GLOBAL LEARNING GRID: 10,000+ NEURAL NODES ACTIVE <<'}
                <br />
                <span className="text-accent-lime">ECOLOGICAL GAME PROTOCOLS: FULLY OPERATIONAL</span>
              </p>
            </div>
            <button className="bg-transparent text-secondary-500 px-12 py-5 text-xl font-bold tracking-wider hover:bg-secondary-500/10 transition-all duration-300 flex items-center gap-3 rounded-lg border border-secondary-500">
              {'>> INITIATE CONNECTION <<'}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-retro-darker border-t-2 border-accent-neon text-white py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-retro-purple/20 to-retro-cyan/20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="font-display font-bold text-3xl gradient-text mb-4 tracking-wider">
            Science-Backed. Game-Driven.
          </div>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
            Our Constraint-Led Approach uses games to teach real jiu-jitsu skills, faster. Train with the best coaches, anytime, anywhere.
          </p>
          <div className="mt-6 text-accent-lime font-retro text-xs tracking-widest">
            {'>>> JIU JITSU QUEST | ONLINE TRAINING PLATFORM <<<'}
          </div>
        </div>
      </footer>
    </div>
  )
}
