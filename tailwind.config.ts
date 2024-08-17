import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ubuntu)', 'var(--font-xiaoWei)'],
        serif: ['var(--font-ubuntuCondensed)', 'var(--font-maShanZheng)'],
        mono: ['var(--font-ubuntuMono)'],
      },
    },
  },
  plugins: [],
}
export default config
