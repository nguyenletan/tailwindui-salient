import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/features-reliability.webp'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function AssetReliability() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='features'
      aria-label='We run 24/7 so you can sleep in peace'
      className='relative overflow-hidden pt-28 pb-28 sm:pb-24 sm:pt-24'
    >
      <Container className='flex flex-wrap gap-12 lg:flex-nowrap'>
        <div className='flex w-full justify-center lg:w-1/3' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 font-display text-sm font-bold uppercase text-primary'>
              Features | ASSET RELIABILITY
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              Asset Reliability - Manage your asset risks in a smarter way
            </h2>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              With continuous monitoring, receive notifications of potential
              issues with solutions analysed for you to make your decision.
              Common data platform allows users to understand the potential
              impact to business.
            </p>
          </div>
        </div>

        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex hidden w-full justify-end lg:block lg:w-2/3'
        >
          <div className='relative flex justify-end gap-4 self-end'>
            <Image
              quality={100}
              className='bg-white object-contain'
              src={feature}
              alt=''
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
