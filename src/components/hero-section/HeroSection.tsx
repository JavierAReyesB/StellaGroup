'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { Card } from '@/components/ui/card'

const founders = [
  {
    id: 1,
    name: 'Javier Reyes',
    role: 'CEO & Co-Fundador',
    bio: 'Apasionado por la tecnología, líder de proyectos innovadores y visionario en la creación de soluciones digitales que impactan.',
    image: '/javi_bn.jpeg',
    imageAlt: '/pfOmar2.jpg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'Omar Somoza',
    role: 'CTO & Co-Fundadora',
    bio: 'Ingeniero de software con sólida experiencia en arquitectura y desarrollo tecnológico. Enfocado en escalar productos de alto rendimiento.',
    image: '/pfOmar2.jpg',
    imageAlt: '/javi_bn.jpeg',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
]

export default function HeroSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className='relative flex flex-col items-center justify-center h-[100vh] text-primary p-8 overflow-hidden'>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      >
        <source
          src='/1c4e9fbc-db42-42b2-b52e-2291e740b48c.mp4'
          type='video/mp4'
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className='relative z-10 max-w-6xl mx-auto text-center backdrop-blur-sm bg-white/10 p-6 rounded-xl'>
        <h1 className='text-5xl font-extrabold text-primary mb-8'>
          Fundadores
        </h1>
        <p className='text-gray-100 mb-12 text-lg'>
          Conoce a las personas que lideran la visión y la tecnología de nuestra
          empresa.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-4'>
          {founders.map((founder) => {
            const isOtherHovered =
              hoveredId !== null && hoveredId !== founder.id
            const isHovered = hoveredId === founder.id
            const imageSrc = isOtherHovered ? founder.imageAlt : founder.image

            return (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{
                  scale: isHovered ? 1.1 : isOtherHovered ? 0.95 : 1,
                  opacity: isOtherHovered ? 0.6 : 1,
                  filter: isOtherHovered ? 'brightness(0.75)' : 'brightness(1)',
                  zIndex: isHovered ? 10 : 1
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredId(founder.id)}
                onMouseLeave={() => setHoveredId(null)}
                className='will-change-transform transition-all duration-300'
              >
                <Card className='overflow-hidden bg-white/50 backdrop-blur-sm border-0 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 min-h-[38rem] flex flex-col'>
                  <div className='relative'>
                    <div className='h-[22rem] overflow-hidden rounded-t-xl'>
                      <motion.div
                        className='w-full h-full'
                        animate={{
                          scale: hoveredId === founder.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <img
                          src={imageSrc}
                          alt={founder.name}
                          className='w-full h-full object-cover'
                        />
                      </motion.div>
                    </div>

                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end'>
                      <div className='p-4 w-full flex justify-center gap-4'>
                        <a
                          href={founder.social.twitter}
                          className='bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors'
                          aria-label={`Twitter de ${founder.name}`}
                        >
                          <Twitter className='h-5 w-5 text-white' />
                        </a>
                        <a
                          href={founder.social.linkedin}
                          className='bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors'
                          aria-label={`LinkedIn de ${founder.name}`}
                        >
                          <Linkedin className='h-5 w-5 text-white' />
                        </a>
                        <a
                          href={founder.social.github}
                          className='bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors'
                          aria-label={`GitHub de ${founder.name}`}
                        >
                          <Github className='h-5 w-5 text-white' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='p-6 text-left'>
                    <h3 className='text-xl font-bold mb-1 text-gray-900'>
                      {founder.name}
                    </h3>
                    <p className='text-gray-600 font-medium mb-4'>
                      {founder.role}
                    </p>
                    <div className='w-12 h-0.5 bg-gradient-to-r from-gray-900 to-gray-500 mb-4 rounded-full' />
                    <p className='text-gray-700'>{founder.bio}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className='absolute top-1/4 left-10 w-20 h-20 border-2 border-primary/20 rounded-full hidden md:block z-0'></div>
      <div className='absolute bottom-1/4 right-10 w-32 h-32 border-2 border-primary/20 rounded-full hidden md:block z-0'></div>
      <div className='absolute top-1/3 right-1/4 w-16 h-16 border-2 border-primary/10 rounded-full hidden lg:block z-0'></div>
    </section>
  )
}
