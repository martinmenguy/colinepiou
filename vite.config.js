import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/nom-du-repo/' if deploying to a GitHub repo subdirectory
})
