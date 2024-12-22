import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
              HyperCluster
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#research" className="text-sm text-gray-300 hover:text-white transition-colors">
              Research
            </Link>
            <Link href="#team" className="text-sm text-gray-300 hover:text-white transition-colors">
              Team
            </Link>
            <Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

