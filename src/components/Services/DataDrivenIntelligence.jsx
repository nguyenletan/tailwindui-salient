import Image from 'next/image'
import { Container } from '@/components/Container'
import feature1 from '@/images/data-driven-intelligence01.webp'
import feature2 from '@/images/data-driven-intelligence02.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function DataDrivenIntelligence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='data-driven-intelligence'
      aria-label='We run 24/7 so you can sleep in peace'
      className='relative overflow-hidden pt-28 pb-28 sm:pb-24 sm:pt-24'
    >
      <Container className='flex flex-wrap gap-12 lg:flex-nowrap'>
        <div className='flex w-full justify-center lg:w-2/5' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 text-sm text-gray-500'>
              Services | Data-driven Intelligence
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              Powered by data-driven intelligence
            </h2>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              We help you to understand what’s possible, desirable and practical
              and coupled with predictive analytics, BEE applies machine
              learning on the building IoT network for continuous optimisation
              of building operations and refine demand-based controls to
              maximise efficiency.
            </p>

            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              <Image quality={100} className='' src={feature2} alt='' />
            </p>
          </div>
        </div>

        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex hidden w-full justify-end lg:block lg:w-3/5'
        >
          <div className='relative flex justify-end self-end'>
            <Image quality={100} className='' src={feature1} alt='' />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
