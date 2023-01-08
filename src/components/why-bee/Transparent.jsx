import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/why-bee-for-transparent.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/Button'

export function Transparent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='transparent'
      aria-label='We run 24/7 so you can sleep in peace'
      className='relative overflow-hidden pt-28 pb-28 sm:pb-24 sm:pt-24 '
    >
      <Container className='flex flex-wrap gap-16 lg:flex-nowrap'>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex hidden w-full justify-end lg:block lg:w-3/5'
        >
          <div className='relative flex justify-end self-end'>
            <Image quality={100} className='' src={feature} alt='' />
          </div>
        </motion.div>

        <div className='flex w-full justify-center lg:w-2/5' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 text-sm text-gray-500'>
              Why BEE | For Transparency
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              Managing your properties energy and carbon strategy
            </h2>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              Make the days of insufficient granularity of energy data,
              integrity of data, no electrical domain analytics in place, or
              manual billing data extraction or tenant billing through billing a
              thing of the past. Have a clear understanding of your energy
              consumption about where and what is being used to be able to make
              informed choices for energy management strategy
            </p>
            <div className='justify-left mt-10  gap-x-6'>
              <Button href='/contact-us' className='text-lg' color='primary'>
                Get Started
              </Button>
            </div>{' '}
          </div>
        </div>
      </Container>
    </section>
  )
}
