import { Container } from '@/components/Container'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function VideoContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='easy-to-use'
      aria-label='The most user friendly energy management software for managing your building portfolio'
      className='relative overflow-hidden bg-stone-100 pt-28 pb-28 sm:pb-24 sm:pt-24'
    >
      <Container className='flex flex-wrap gap-2 gap-12 align-top lg:flex-nowrap'>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex w-full pb-5 lg:w-3/5 lg:pb-0'
        >
          <div className='relative'>
            {/*<video*/}
            {/*  controls={true}*/}
            {/*  loop*/}
            {/*  type='video/mp4'*/}
            {/*  src='https://raw.githubusercontent.com/BEEUK/cdn/master/BEE/EAM%20Video%20(ENG).mp4'*/}
            {/*/>*/}

            <iframe width='560' height='315'
                    src="https://www.youtube.com/embed/VjJFruFOxIE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
          </div>
        </motion.div>
        <div className='flex w-full lg:w-2/5' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 text-sm text-gray-500'>
              About BEE | Easy to use
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              An easy and friendly to user interface
            </h2>
            <p className='mt-6  text-lg tracking-tight text-deep-dark'>
              We've designed a clear and logical interface that is intuitive for
              you to manage your commercial and corporate real estate's energy
              consumption and CO<sub>2</sub> emissions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
