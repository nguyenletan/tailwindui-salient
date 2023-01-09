import Image from 'next/image'
import { Container } from '@/components/Container'
import feature1 from '@/images/features-improve01.webp'
import feature2 from '@/images/features-improve02.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/Button'

export function Improve() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='improve'
      aria-label='We run 24/7 so you can sleep in peace'
      className='relative overflow-hidden pt-28 pb-28 sm:pb-24 sm:pt-24'
    >
      <Container className='flex flex-wrap gap-12 lg:flex-nowrap'>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex hidden w-full justify-end lg:block lg:w-2/3'
        >
          <div className='relative flex justify-end self-end gap-4'>
            <Image
              quality={100}
              className='object-contain bg-white'
              src={feature1}
              alt=''
            />

            <Image
              quality={100}
              className='object-contain'
              src={feature2}
              alt=''
            />
          </div>
        </motion.div>
        <div className='flex w-full justify-center lg:w-1/3' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 font-display text-sm font-bold uppercase text-primary'>
              Features | Improve
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              Improve - Potential improvements suited for your business
            </h2>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              Identify potential energy performance improvement that can be achieved for their building along with key figures and financial metrics.
            </p>
            <div className='justify-left mt-10  gap-x-6'>
              <Button href='/contact-us' className='text-lg' color='primary'>
                Get Started
              </Button>
            </div>
          </div>
        </div>


      </Container>
    </section>
  )
}
