'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, ShoppingCart, User, Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
  }

  // ✅ Enlaces corregidos
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'BlackGestionTime', href: '/blackgestiontime' },
    { name: 'Páginas Web a Medida', href: '/paginas-web-a-medida' },
    { name: 'Proyecto AI Teacher', href: '/aiteacher' }
  ]

  const cartItemCount = 3

  return (
    <header className='w-full  border-gray-200 bg-gradient-to-b from-white/90 via-white/60 to-white/10 backdrop-blur-sm'>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='container mx-auto px-4'
      >
        <div className='flex h-24 items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center border border-gray-300 rounded-md p-2'
          >
            <span className='text-xl font-bold text-black'>Stella Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium border border-gray-300 text-black transition ${
                  pathname === item.href ? 'bg-gray-100' : 'hover:bg-gray-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side items */}
          <div className='flex items-center space-x-2'>
            {/* Search */}
            <div className='relative border border-gray-300 rounded-md'>
              {isSearchOpen ? (
                <div className='absolute right-0 top-0 w-60 flex items-center'>
                  <Input
                    className='rounded-l-md bg-gray-100 text-black'
                    placeholder='Buscar...'
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Button
                    variant='ghost'
                    size='icon'
                    className='rounded-l-none'
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className='h-4 w-4 stroke-black' />
                  </Button>
                </div>
              ) : (
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className='h-5 w-5 stroke-black' />
                </Button>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant='ghost'
              size='icon'
              onClick={toggleTheme}
              className='border border-gray-300 rounded-md'
            >
              {theme === 'light' ? (
                <Moon className='h-5 w-5 stroke-black' />
              ) : (
                <Sun className='h-5 w-5 stroke-black' />
              )}
            </Button>

            {/* Shopping Cart */}
            <Button
              variant='ghost'
              size='icon'
              className='relative border border-gray-300 rounded-md'
              asChild
            >
              <Link href='/carrito'>
                <ShoppingCart className='h-5 w-5 stroke-black' />
                {cartItemCount > 0 && (
                  <Badge className='absolute -top-2 -right-2 px-1.5 py-0.5 text-xs'>
                    {cartItemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='border border-gray-300 rounded-md'
                >
                  <User className='h-5 w-5 stroke-black' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem asChild>
                  <Link href='/login' className='text-black'>
                    Iniciar sesión
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='/registro' className='text-black'>
                    Registrarse
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button className='hidden sm:flex border border-gray-300 text-black'>
              Comprar ahora
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='lg:hidden border border-gray-300 rounded-md'
                >
                  <Menu className='h-5 w-5 stroke-black' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right'>
                <nav className='flex flex-col space-y-4 mt-8'>
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium border border-gray-300 text-black transition ${
                          pathname === item.href
                            ? 'bg-gray-100'
                            : 'hover:bg-gray-200'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button className='w-full border border-gray-300 text-black'>
                      Comprar ahora
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  )
}
