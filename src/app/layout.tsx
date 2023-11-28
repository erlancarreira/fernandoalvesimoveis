import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import ThemeRegistry from '@/theme/ThemeRegister'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Main from '@/components/Main'


export const metadata: Metadata = {
  title: 'Fernando Alves Imóveis',
  description: 'Fernando Alves Corretor de imóveis, anuncie o seu imóvel aqui!',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
  
    <html lang="en">
      <body>
        <Header />
        <ThemeRegistry options={{ key: 'mui-theme' }}>
          <Main>{children}</Main>
        </ThemeRegistry>
        <Footer />
        
      </body>
    </html>
  )
}
