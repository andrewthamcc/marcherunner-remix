import type { PropsWithChildren } from 'react'
import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen">
      <Header />
      <div className="flex h-full grow">{children}</div>
      <Footer />
    </div>
  )
}
