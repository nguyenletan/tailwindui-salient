import { Container } from '@/components/Container'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/Button'

export function NotJustAnotherFeature() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='not-just-another-feature'
      aria-label='We run 24/7 so you can sleep in peace'
      className='relative overflow-hidden pt-28 pb-28 sm:pb-24 sm:pt-24'
    >
      <Container className='flex flex-wrap lg:flex-nowrap'>

        <div className='flex w-full justify-center lg:w-2/5' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 text-sm text-gray-500'>
              Features | Not Just Another Solution
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              Not just another energy monitoring solution
            </h2>
            <p className='my-6 text-lg tracking-tight text-deep-dark'>
              A platform to foster a common language between building services
              engineers, FM services, C-Suite, building owners and finance. BEE
              enables a simple, clear and concise overview of the your building
              and asset health for all user levels.
            </p>
            <p>
              BEE enables a continuous improvement process that suits your
              business needs.
            </p>
            <div className='justify-left mt-10 gap-x-6'>
              <Button href='/contact-us' className='text-lg' color='primary'>
                Get Started
              </Button>
            </div>
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
            <video
              muted
              autoPlay
              loop
              type='video/mp4'
              src="https://github.com/BEEUK/cdn/blob/master/BEE/Continuous%20Monitoring%20and%20Improvement.mp4?raw=true" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
