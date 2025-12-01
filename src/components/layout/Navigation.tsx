'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/order', label: 'Order' },
  { href: '/contact', label: 'Contact' },
]

interface NavigationProps {
  logo?: string
  logoAlt?: string
  siteName?: string
}

export default function Navigation({ logo, logoAlt = 'Moonochew Logo', siteName = 'Moonochew' }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-natural-cream/95 backdrop-blur-lg border-b border-living-green/10 shadow-natural py-2'
          : 'bg-natural-cream/80 backdrop-blur-sm py-2'
      }`}
    >
      <div className="container-width flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {logo ? (
            <Image
              src={logo}
              alt={logoAlt}
              width={300}
              height={80}
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? 'h-10' : 'h-20 md:h-24'
              }`}
              priority
            />
          ) : (
            <>
              <div className={`rounded-full bg-gradient-to-br from-living-green to-forest-canopy flex items-center justify-center shadow-green group-hover:shadow-green-lg transition-all duration-500 ${
                scrolled ? 'w-10 h-10' : 'w-14 h-14'
              }`}>
                <span className={`text-natural-cream font-bold transition-all duration-500 ${
                  scrolled ? 'text-lg' : 'text-2xl'
                }`}>M</span>
              </div>
              <span className={`font-sans font-light tracking-wide text-deep-forest transition-all duration-500 ${
                scrolled ? 'text-2xl' : 'text-3xl'
              }`}>
                MOONO<span className="text-living-green font-semibold">CHEW</span>
              </span>
            </>
          )}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wider uppercase transition-all duration-300 ${
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  ? 'text-living-green font-medium'
                  : 'text-stone-grey hover:text-living-green'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-living-green transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-living-green transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-living-green transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-natural-cream/98 backdrop-blur-lg border-b border-living-green/10 transition-all duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container-width py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 text-lg font-medium transition-colors ${
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  ? 'text-living-green'
                  : 'text-charcoal hover:text-living-green'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
