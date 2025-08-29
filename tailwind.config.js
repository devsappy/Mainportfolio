/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ffff',
        secondary: '#ff00ff',
        accent: '#00ff88',
        dark: {
          DEFAULT: '#0a0a0f',
          secondary: '#0f0f1a',
          card: '#141420',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0a0b8',
        },
      },
      animation: {
        'float-slow': 'float-slow 20s ease-in-out infinite',
        'float-slower': 'float-slower 25s ease-in-out infinite',
        'float-reverse': 'float-reverse 22s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'pulse-width': 'pulse-width 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'translateY(-20px) translateX(10px)',
            opacity: '1'
          },
        },
        'float-slower': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.6'
          },
          '33%': { 
            transform: 'translateY(-15px) translateX(-8px)',
            opacity: '0.9'
          },
          '66%': { 
            transform: 'translateY(-5px) translateX(12px)',
            opacity: '0.8'
          },
        },
        'float-reverse': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'translateY(15px) translateX(-12px)',
            opacity: '1'
          },
        },
        glow: {
          'from': { filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.5))' },
          'to': { filter: 'drop-shadow(0 0 20px rgba(255, 0, 255, 0.8))' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-width': {
          '0%, 100%': { width: '100px', opacity: '0.5' },
          '50%': { width: '150px', opacity: '1' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-2px, -2px)' },
          '80%': { transform: 'translate(2px, 2px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}