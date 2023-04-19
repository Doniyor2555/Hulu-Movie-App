import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Nav from '../../components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      <Header />

      {/* Nav */}
      <Nav/>
    </div>
  )
}
