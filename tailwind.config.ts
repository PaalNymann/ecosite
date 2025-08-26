import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern clean colors with subtle 80s gaming influence
        'dark': '#0f0f23',
        'darker': '#0a0a1a',
        'surface': '#1a1a2e',
        'surface-light': '#16213e',
        'brand-primary': '#6366f1',
        'brand-accent': '#8b5cf6',
        'success': '#10b981',
        'warning': '#f59e0b',
        primary: {
          50: '#1a0d26',
          100: '#2d1b3d',
          200: '#4a2c5a',
          300: '#6b3d7a',
          400: '#8b4f9b',
          500: '#a855f7', // Neon purple
          600: '#c084fc',
          700: '#d8b4fe',
          800: '#e9d5ff',
          900: '#f3e8ff',
        },
        secondary: {
          50: '#0d1a26',
          100: '#1b2d3d',
          200: '#2c4a5a',
          300: '#3d6b7a',
          400: '#4f8b9b',
          500: '#00ffff', // Electric cyan
          600: '#33ffff',
          700: '#66ffff',
          800: '#99ffff',
          900: '#ccffff',
        },
        accent: {
          neon: '#ff00ff',     // Hot pink
          electric: '#00ffff', // Cyan
          lime: '#ccff00',     // Electric lime
          orange: '#ff6600',   // Retro orange
          grid: '#ff0080',     // Grid pink
        },
        retro: {
          dark: '#0a0a0f',     // Deep space dark
          darker: '#050508',   // Void black
          purple: '#6a0dad',   // Deep purple
          pink: '#ff1493',     // Deep pink
          cyan: '#00ced1',     // Dark turquoise
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'monospace'],
        retro: ['Courier New', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'float': 'float 6s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
        'grid-move': 'gridMove 20s linear infinite',
        'retro-glow': 'retroGlow 3s ease-in-out infinite alternate',
        'scan-line': 'scanLine 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        neonPulse: {
          '0%': { textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff' },
          '100%': { textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        retroGlow: {
          '0%': { boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff' },
          '100%': { boxShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff' },
        },
        scanLine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
