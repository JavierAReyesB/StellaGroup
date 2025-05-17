export default function ServicesSection() {
  return (
    <section className='py-20 px-8 bg-white/10 text-center backdrop-blur-sm rounded-lg mx-4 md:mx-15'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold mb-10 text-gray-900'>
          Nuestros Servicios
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Servicio 1 */}
          <div className='p-8 bg-white/40 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <div className='mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 border border-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-gray-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-semibold mb-3 text-gray-800'>
              Desarrollo Web
            </h3>
            <p className='text-gray-600'>
              Creamos sitios web modernos y responsivos utilizando las últimas
              tecnologías.
            </p>
          </div>

          {/* Servicio 2 */}
          <div className='p-8 bg-white/40 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <div className='mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 border border-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-gray-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-semibold mb-3 text-gray-800'>
              Aplicaciones Móviles
            </h3>
            <p className='text-gray-600'>
              Diseñamos y desarrollamos apps para iOS y Android con alto
              rendimiento.
            </p>
          </div>

          {/* Servicio 3 */}
          <div className='p-8 bg-white/40 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <div className='mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 border border-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-gray-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-semibold mb-3 text-gray-800'>
              Consultoría Tecnológica
            </h3>
            <p className='text-gray-600'>
              Ofrecemos asesoría para optimizar procesos y digitalizar empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
