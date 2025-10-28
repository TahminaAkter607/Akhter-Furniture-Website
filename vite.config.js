import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode:'class',
  theme:{
    extend:{
      colors:{
       'primary':'#E58411',
       'Secondary': '#1E1E1E',
       'Secondary-BG': '#F7F7F7',
      },
      fontFamily: {
        'primary': ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [react(),  tailwindcss(),],
})
