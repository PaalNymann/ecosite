'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Play, Star, Zap, Grid3X3, Target, Users, CheckCircle2, Gamepad2, Crown, Rocket, Trophy } from 'lucide-react'

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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking outside
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="relative overflow-hidden border-b-2 border-accent-neon">
        <div className="absolute inset-0 bg-gradient-to-r from-retro-dark/40 to-retro-purple/40 backdrop-blur-sm"></div>
        <nav className="relative z-10 flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto">
          <motion.div 
            className="cursor-pointer hover:scale-105 transition-transform"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="lg" />
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
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

          {/* Mobile Hamburger Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={closeMobileMenu} />
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 transform transition-transform duration-300 z-50 md:hidden ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <span className="text-white font-bold">MENU</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6 p-6">
            <Link 
              href="/lessons" 
              className="text-cyan-400 hover:text-lime-400 transition-colors font-bold tracking-wider text-left py-3 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              LESSONS
            </Link>
            <Link 
              href="/members" 
              className="text-cyan-400 hover:text-lime-400 transition-colors font-bold tracking-wider text-left py-3 border-b border-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              MEMBERS
            </Link>
            <Link href="/members" onClick={() => setMobileMenuOpen(false)}>
              <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 font-bold tracking-wider hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-purple-500/25 mt-4">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>


      {/* Hero Section */}
      <section className="relative px-4 md:px-6 py-6 md:py-8 max-w-7xl mx-auto">
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="mb-6 mt-4 flex justify-center">
              {/* Animated GIF logo flies in from right and loops */}
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.0, type: "spring", stiffness: 60 }}
              >
                <Image
                  src="/Jiu Jitsu.gif"
                  alt="Jiu Jitsu Quest"
                  width={900}
                  height={288}
                  className="h-24 w-auto sm:h-32 md:h-48 lg:h-[15rem] xl:h-[18rem]"
                  priority
                  unoptimized
                />
              </motion.div>
            </div>
            <h1 className="font-black text-2xl sm:text-3xl md:text-6xl lg:text-7xl mb-4 gradient-text tracking-wide px-2">
              The Smarter Way to Learn BJJ
            </h1>
            <div className="p-3 md:p-4 max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-sm mb-6 rounded-lg border border-gray-700 mx-2">
              <p className="text-sm md:text-lg text-white font-semibold leading-relaxed tracking-wide">
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
              <button className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 md:px-8 py-3 md:py-4 font-black tracking-wider hover:scale-105 transition-all duration-300 rounded-lg shadow-lg hover:shadow-purple-500/25 text-sm md:text-base">
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
            <div className="bg-gray-900/60 backdrop-blur-sm p-2 md:p-4 max-w-4xl mx-auto rounded-lg border border-gray-700 mx-2">
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
      <section className="px-4 md:px-6 py-2 md:py-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-8"
        >
          <div className="bg-gray-900/60 backdrop-blur-sm p-4 md:p-6 text-center rounded-lg border border-gray-700">
            <h3 className="font-display font-bold text-lg md:text-xl gradient-text mb-2">
              FUNDAMENTALS
            </h3>
            <p className="text-white/70 font-retro text-xs md:text-sm">
              Master the essential BJJ positions and movements
            </p>
          </div>
          
          <div className="bg-gray-900/60 backdrop-blur-sm p-4 md:p-6 text-center rounded-lg border border-gray-700">
            <h3 className="font-display font-bold text-lg md:text-xl gradient-text mb-2">
              COMPETITION PREP
            </h3>
            <p className="text-white/70 font-retro text-xs md:text-sm">
              Advanced techniques for tournament success
            </p>
          </div>
          
          <div className="bg-gray-900/60 backdrop-blur-sm p-4 md:p-6 text-center rounded-lg border border-gray-700">
            <h3 className="font-display font-bold text-lg md:text-xl gradient-text mb-2">
              SUBMISSIONS
            </h3>
            <p className="text-white/70 font-retro text-xs md:text-sm">
              Learn effective finishing techniques and setups
            </p>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 md:px-6 py-12 md:py-20 bg-gradient-to-r from-retro-dark to-retro-purple relative overflow-hidden">
        <div className="absolute inset-0 bg-retro-darker/50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <div className="font-retro text-accent-orange text-xs md:text-sm mb-4 tracking-widest px-2">
              {'>>> SUBSCRIPTION TIERS AVAILABLE <<<'}
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 gradient-text tracking-wider px-2">
              ◊ CHOOSE YOUR LEVEL ◊
            </h2>
            <div className="p-3 md:p-4 max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-700 mx-2">
              <p className="text-sm md:text-lg text-white font-retro tracking-wide">
                {'>> SELECT YOUR GAMING PACKAGE AND START YOUR JOURNEY <<'}
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 mt-20 sm:mt-18 md:mt-24">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-16 sm:-top-14 md:-top-16 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-accent-neon to-secondary-500 px-3 md:px-6 py-1 md:py-2 rounded-full">
                      <span className="text-black font-retro font-bold text-xs md:text-sm tracking-wider">
                        {'>> MOST POPULAR <<'}
                      </span>
                    </div>
                  </div>
                )}
                <div className={`
                  bg-gray-900/60 backdrop-blur-sm p-4 md:p-8 h-full rounded-lg border border-gray-700
                  hover:bg-retro-dark/70 transition-all duration-300
                  ${plan.popular ? 'retro-shadow scale-105' : ''}
                `}>
                  <div className="text-center mb-6 md:mb-8">
                    <h3 className={`font-retro font-bold text-lg md:text-2xl mb-3 md:mb-4 tracking-wider ${plan.color}`}>
                      {plan.name}
                    </h3>
                    <div className="mb-4 md:mb-6">
                      <span className={`text-3xl md:text-5xl font-display font-bold ${plan.color}`}>
                        {plan.price}
                      </span>
                      <span className="text-white/60 font-retro text-sm md:text-lg">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 md:gap-3">
                        <div className={`w-2 h-2 ${plan.color.replace('text-', 'bg-')} mt-1 md:mt-2 neon-glow`}></div>
                        <span className="text-white/80 font-retro text-xs md:text-sm tracking-wide">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/members">
                    <button className={`
                      w-full py-3 md:py-4 font-retro font-bold tracking-wider transition-all duration-300 text-xs md:text-sm
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
      <section className="px-4 md:px-6 py-12 md:py-20 bg-gradient-to-r from-retro-purple to-retro-cyan border-t-2 border-accent-neon relative overflow-hidden">
        <div className="absolute inset-0 bg-retro-dark/30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-retro text-accent-lime text-xs md:text-sm mb-4 tracking-widest px-2">
              {'>>> NEURAL LINK ESTABLISHMENT PROTOCOL <<<'}
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 md:mb-8 gradient-text tracking-wider px-2">
              ◊ JACK INTO THE MATRIX ◊
            </h2>
            <div className="p-4 md:p-6 mb-6 md:mb-10 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-700 mx-2">
              <p className="text-sm md:text-xl text-white font-retro tracking-wide leading-relaxed">
                {'>> CONNECT TO GLOBAL LEARNING GRID: 10,000+ NEURAL NODES ACTIVE <<'}
                <br />
                <span className="text-accent-lime">ECOLOGICAL GAME PROTOCOLS: FULLY OPERATIONAL</span>
              </p>
            </div>
            <button className="bg-transparent text-secondary-500 px-6 md:px-12 py-3 md:py-5 text-sm md:text-xl font-bold tracking-wider hover:bg-secondary-500/10 transition-all duration-300 flex items-center gap-2 md:gap-3 rounded-lg border border-secondary-500 mx-auto">
              {'>> INITIATE CONNECTION <<'}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-retro-darker border-t-2 border-accent-neon text-white py-8 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-retro-purple/20 to-retro-cyan/20"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="font-display font-bold text-xl md:text-3xl gradient-text mb-3 md:mb-4 tracking-wider">
            Science-Backed. Game-Driven.
          </div>
          <p className="text-white/80 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto px-2">
            Our Constraint-Led Approach uses games to teach real jiu-jitsu skills, faster. Train with the best coaches, anytime, anywhere.
          </p>
          <div className="mt-4 md:mt-6 text-accent-lime font-retro text-xs tracking-widest">
            {'>>> JIU JITSU QUEST | ONLINE TRAINING PLATFORM <<<'}
          </div>
        </div>
      </footer>
    </div>
  )
}
