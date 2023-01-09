import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/why-bee-for-informed-choice.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/Button'

export function InformacedChoice() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='informed-choice'
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
          className='flex w-full justify-end lg:block lg:w-2/3'
        >
          <Image quality={100} className='' src={feature} alt='' />
        </motion.div>

        <div className='flex w-full justify-center lg:w-1/3' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 text-sm text-gray-500'>
              Why BEE | For Informed Choice
            </span>
            <h2 className='text-deep-darksm:text-3xl font-display text-3xl font-extrabold !leading-tight tracking-tight md:text-4xl'>
              For Informed Choice
            </h2>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              Ensure clarity and focus on current and future needs for your
              building portfolio based on your business needs.
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
