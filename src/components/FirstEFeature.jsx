import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/feature4.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function FirstEFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id='features'
      aria-label='Features for running your books'
      className='relative overflow-hidden pt-12 pb-28 sm:pb-24'
    >
      <Container className='flex gap-8 align-top'>
        <div ref={ref} className='flex w-1/2'>
          <div className=' text-center md:text-left xl:max-w-none'>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-4xl md:text-4xl'>
              The most user friendly energy management software for managing
              your building portfolio
            </h2>
            <p className='py-8 text-lg'>
              A modern cloud-based software platform for managing commercial and
              corporate real estate’s energy consumption and CO2 emissions.
              Manage your entire portfolio with a comprehensive suite of
              integrated modules specifically designed for the property industry
            </p>
          </div>
        </div>

        <motion.div
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex w-1/2 justify-start'
        >
          <div className='relative flex justify-end self-center'>
            <Image
              placeholder='blur'
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
