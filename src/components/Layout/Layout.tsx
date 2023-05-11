import Footer from './Footer'
import Navbar from './Navbar/Navbar'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="vg-main-wrapper">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
