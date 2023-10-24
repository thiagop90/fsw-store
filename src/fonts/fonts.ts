import localFont from 'next/font/local'

export const generalSans = localFont({
  src: [
    {
      path: '../fonts/GeneralSans/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans/GeneralSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans/GeneralSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-general-sans',
})
