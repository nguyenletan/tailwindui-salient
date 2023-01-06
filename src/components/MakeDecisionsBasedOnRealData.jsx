import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/first-feature.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function MakeDecisionsBasedOnRealData() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='features'
      aria-label='Make informed decisions based on real data'
      className='relative overflow-hidden pt-28 pb-28 sm:pb-24 sm:pt-24'
    >
      <Container className='flex flex-wrap lg:flex-nowrap'>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex w-full justify-end pb-5 lg:hidden lg:w-3/5 lg:pb-0'
        >
          <div className='relative flex justify-end self-end'>
            <Image
              quality={100}
              className=''
              src={feature}
              alt=''
            />
          </div>
        </motion.div>

        <div className='flex w-full justify-center lg:w-2/5' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 text-sm text-gray-500'>
              About BEE | Introduction
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:w-3/5 sm:text-3xl md:text-4xl'>
              Make informed decisions based on real data
            </h2>
            <p className='mt-6  text-lg tracking-tight text-deep-dark sm:w-3/5'>
              Use more accurate methods to measure your building’s energy consumption and CO2 emissions.
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
            <Image
              quality={100}
              className=''
              src={feature}
              alt=''
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
