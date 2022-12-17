import { Container } from '@/components/Container'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function VideoContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='features'
      aria-label='The most user friendly energy management software for managing your building portfolio'
      className='relative overflow-hidden pt-28 pb-28 sm:pb-24 sm:pt-24 bg-stone-100'
    >
      <Container className='flex flex-wrap gap-2 align-top lg:flex-nowrap'>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex w-full pb-5 lg:w-3/5 lg:pb-0'
        >
          <div className='relative flex'>
           <video
             muted
             autoPlay
             loop
             type='video/mp4'
             src="https://github.com/BEEUK/cdn/blob/master/BEE/BEE%20Process%20Animation.mp4?raw=true" />
          </div>
        </motion.div>
        <div className='flex w-full lg:w-2/5' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              EASY TO USE INTERFACE
            </h2>
            <p className='mt-6  text-lg tracking-tight text-deep-dark'>
              A modern cloud-based software platform for managing commercial and
              corporate real estate’s energy consumption and CO2 emissions.
              Manage your entire portfolio with a comprehensive suite of
              integrated modules specifically designed for the property industry
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
