'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Linkedin,
  Github,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  ExternalLink
} from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // simulamos petición
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1000)
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const currentYear = new Date().getFullYear()

  return (
    <footer className='relative w-full border-t border-gray-700 bg-[#1d1f23] text-gray-300'>
      {/* Botón “volver arriba” */}
      <div className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2'>
        <motion.button
          onClick={scrollToTop}
          className='flex h-12 w-24 items-center justify-center rounded-t-full border border-gray-700 bg-[#1d1f23] shadow-sm transition-all hover:bg-gray-700'
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0.8 }}
        >
          <ChevronUp size={20} className='text-primary' />
        </motion.button>
      </div>

      <div className='container mx-auto px-4 py-16'>
        {/* Newsletter */}
        <div className='mx-auto mb-16 max-w-4xl'>
          <motion.div
            className='rounded-xl border border-gray-700 bg-[#1d1f23] p-8 shadow-sm'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='text-center'>
              <h3 className='mb-2 text-2xl font-light tracking-tight'>
                Recibe las{' '}
                <span className='font-semibold text-primary'>
                  últimas novedades
                </span>{' '}
                en tecnología
              </h3>
              <p className='mb-6 text-gray-400'>
                Suscríbete a nuestro newsletter y mantente al día con las
                últimas tendencias y avances tecnológicos.
              </p>

              <form
                onSubmit={handleSubmit}
                className='mx-auto flex max-w-md flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0'
              >
                <Input
                  type='email'
                  placeholder='Tu correo electrónico'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='h-11 flex-1 rounded-md border border-gray-700 bg-gray-800 px-4 text-gray-100'
                  disabled={isSubmitting}
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type='submit'
                    className='h-11 w-full rounded-md px-6 sm:w-auto'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando…' : 'Suscribirse'}
                  </Button>
                </motion.div>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    className='mt-4 text-sm text-green-500'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    ¡Gracias por suscribirte! Pronto recibirás nuestras
                    novedades.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Cuerpo principal */}
        <div className='grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4'>
          {/* Marca */}
          <div className='space-y-6'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='flex items-center'
            >
              <img
                src='/next.svg'
                alt='TechCompany Logo'
                width='40'
                height='40'
                className='mr-3'
              />
              <span className='text-xl font-light tracking-tight'>
                Tech<span className='font-semibold'>Company</span>
              </span>
            </motion.div>
            <p className='text-sm leading-relaxed text-gray-400'>
              Innovamos con tecnología para un mundo mejor. Creamos soluciones
              digitales que transforman empresas y mejoran la vida de las
              personas.
            </p>
            <div className='flex space-x-3'>
              {[
                {
                  Icon: Linkedin,
                  href: 'https://linkedin.com',
                  label: 'LinkedIn'
                },
                { Icon: Github, href: 'https://github.com', label: 'GitHub' },
                {
                  Icon: Twitter,
                  href: 'https://twitter.com',
                  label: 'Twitter'
                },
                { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{
                    y: -3,
                    backgroundColor: 'rgba(var(--primary-rgb),0.1)'
                  }}
                  className='flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-primary/40 hover:text-primary'
                >
                  <Icon size={16} />
                  <span className='sr-only'>{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navegación rápida */}
          <div className='space-y-6'>
            <div>
              <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
                Navegación
              </h3>
              <ul className='grid grid-cols-2 gap-2'>
                {['Inicio', 'Productos', 'Servicios', 'Blog', 'Contacto'].map(
                  (item) => (
                    <motion.li key={item} whileHover={{ x: 3 }}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className='text-sm text-gray-300 transition-colors hover:text-primary'
                      >
                        {item}
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
                Productos
              </h3>
              <ul className='space-y-2'>
                {[
                  {
                    name: 'BlackGestionTime',
                    href: '/productos/blackgestiontime'
                  },
                  { name: 'Páginas web a medida', href: '/productos/web' },
                  { name: 'AI Teacher', href: '/productos/ai-teacher' }
                ].map((p) => (
                  <motion.li key={p.name} whileHover={{ x: 3 }}>
                    <Link
                      href={p.href}
                      className='group flex items-center text-sm text-gray-300 transition-colors hover:text-primary'
                    >
                      {p.name}
                      <ExternalLink
                        size={12}
                        className='ml-1 opacity-0 transition-opacity group-hover:opacity-100'
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recursos y soporte */}
          <div className='space-y-6'>
            <div>
              <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
                Recursos
              </h3>
              <ul className='space-y-2'>
                {[
                  { name: 'FAQ / Preguntas frecuentes', href: '/faq' },
                  { name: 'Documentación técnica', href: '/docs' },
                  { name: 'Centro de soporte', href: '/soporte' }
                ].map((r) => (
                  <motion.li key={r.name} whileHover={{ x: 3 }}>
                    <Link
                      href={r.href}
                      className='text-sm text-gray-300 transition-colors hover:text-primary'
                    >
                      {r.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
                Legal
              </h3>
              <ul className='space-y-2'>
                {[
                  { name: 'Términos y condiciones', href: '/legal/terminos' },
                  { name: 'Política de privacidad', href: '/legal/privacidad' },
                  { name: 'Cookies', href: '/legal/cookies' }
                ].map((l) => (
                  <motion.li key={l.name} whileHover={{ x: 3 }}>
                    <Link
                      href={l.href}
                      className='text-sm text-gray-300 transition-colors hover:text-primary'
                    >
                      {l.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contacto */}
          <div className='space-y-6'>
            <div>
              <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400'>
                Contacto
              </h3>
              <ul className='space-y-4'>
                <li className='flex items-center text-sm text-gray-300'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary'>
                    <Mail size={14} />
                  </div>
                  <a
                    href='mailto:info@techcompany.com'
                    className='ml-3 hover:text-primary hover:underline'
                  >
                    info@techcompany.com
                  </a>
                </li>
                <li className='flex items-center text-sm text-gray-300'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary'>
                    <Phone size={14} />
                  </div>
                  <a
                    href='tel:+34600000000'
                    className='ml-3 hover:text-primary hover:underline'
                  >
                    +34 600 000 000
                  </a>
                </li>
                <li className='flex items-start text-sm text-gray-300'>
                  <div className='mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary'>
                    <MapPin size={14} />
                  </div>
                  <span className='ml-3 leading-tight'>
                    Calle Tecnología 123
                    <br />
                    28001 Madrid, España
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className='my-8 bg-gray-700' />

        {/* Pie inferior */}
        <div className='flex flex-col items-center justify-between space-y-4 text-center text-xs text-gray-400 md:flex-row md:space-y-0 md:text-left'>
          <div>© {currentYear} TechCompany. Todos los derechos reservados.</div>
          <div className='flex items-center space-x-1'>
            <span>Powered by</span>
            {[
              { name: 'Next.js', href: 'https://nextjs.org' },
              { name: 'Tailwind CSS', href: 'https://tailwindcss.com' },
              { name: 'Vercel', href: 'https://vercel.com' }
            ].map(({ name, href }) => (
              <span key={name} className='flex items-center'>
                <motion.a
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-medium text-gray-300 transition-colors hover:text-primary'
                  whileHover={{ y: -1 }}
                >
                  {name}
                </motion.a>
                {name !== 'Vercel' && <span className='mx-1'>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
