import type { PropsWithChildren } from 'react'
import { Header } from './header'
import { Footer } from './footer'

interface LayoutProps extends PropsWithChildren {
  isAuthenticated?: boolean
}

export const Layout = ({ children, isAuthenticated }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header isAuthenticated={isAuthenticated} />
      <div className="flex flex-col h-full grow">{children}</div>
      <Footer />
    </div>
  )
}
