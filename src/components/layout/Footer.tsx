import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/order', label: 'Order' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-canopy border-t border-living-green/20">
      <div className="container-width py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-golden-wattle to-sunset-ochre flex items-center justify-center">
                <span className="text-forest-canopy font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-sans font-light tracking-wide text-natural-cream">
                MOONO<span className="text-golden-wattle font-semibold">CHEW</span>
              </span>
            </div>
            <p className="text-natural-cream/70 leading-relaxed max-w-md">
              The world&apos;s only cattle-resistant, barbed stainless spring steel tree guard.
              Made in Australia, built to last forever.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-golden-wattle font-sans font-medium uppercase tracking-wider text-sm mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-natural-cream/70 hover:text-golden-wattle transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-golden-wattle font-sans font-medium uppercase tracking-wider text-sm mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-natural-cream/70">
              <p>Northern Rivers, NSW</p>
              <p>Australia</p>
              <a
                href="mailto:info@moonochew.com"
                className="hover:text-golden-wattle transition-colors"
              >
                info@moonochew.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-natural-cream/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-natural-cream/50 text-sm">
            &copy; {new Date().getFullYear()} Moonochew. All rights reserved. Australian Innovation Patent.
          </p>
          <p className="text-natural-cream/50 text-sm">
            Designed for Australian conditions. Built to last generations.
          </p>
        </div>
      </div>
    </footer>
  )
}
