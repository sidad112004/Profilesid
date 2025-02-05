/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // ... previous animations
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'text-gradient': 'text-gradient 1.5s linear forwards',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'ripple': 'ripple 1.5s ease-out infinite',
        'streamer': 'streamer 2s linear infinite',
        'tilt': 'tilt 10s linear infinite',
        'skew-scroll': 'skew-scroll 20s linear infinite',
        'text-shimmer': 'text-shimmer 2s linear infinite',
        'scale-in': 'scaleIn 0.5s ease-out',
        'jump': 'jump 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-left': 'fadeInLeft 0.5s ease-out'
      },
      keyframes: {
        // ... previous keyframes
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'oklch(var(--p))' }
        },
        'text-gradient': {
          '0%': { backgroundPosition: '0% 100%' },
          '100%': { backgroundPosition: '100% 100%' }
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.2)' },
          '30%': { transform: 'scale(0.95)' },
          '45%': { transform: 'scale(1.1)' },
          '60%': { transform: 'scale(0.98)' },
          '75%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(3)', opacity: 0 }
        },
        streamer: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 0' }
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' }
        },
        'skew-scroll': {
          '0%': { transform: 'translateX(0) skewX(0deg)' },
          '100%': { transform: 'translateX(-10%) skewX(-5deg)' }
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 }
        },
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        }
      }
    
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

