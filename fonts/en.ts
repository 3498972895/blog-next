import { Ubuntu, Ubuntu_Condensed, Ubuntu_Mono } from 'next/font/google'

export const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ubuntu',
})
export const ubuntuCondensed = Ubuntu_Condensed({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ubuntuCondensed',
})
export const ubuntuMono = Ubuntu_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ubuntuMono',
})
