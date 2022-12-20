import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/feature3.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function FirstDFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='features'
      aria-label='Features for running your books'
      className='relative overflow-hidden pt-12 pb-28 sm:pb-24'
    >
      <Container className='flex flex-wrap gap-8 align-top lg:flex-nowrap'>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex w-full pb-5 lg:w-4/6 lg:pb-0 gap-1'
        >

            <div className='h-[500px] w-2/5'>
              <Image
                quality={100}
                className=''
                src={feature}
                alt=''
              />
            </div>

            <div className='h-[700px] w-3/5'>
              <iframe
                className='h-full w-full'
                src='https://www.lastingfootprint.io/iframe/improve-subsystem-performance'
                allowFullScreen
              ></iframe>
            </div>

        </motion.div>
        <div className='flex w-full lg:w-2/6' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-4xl md:text-4xl'>
              The most user friendly energy management software for managing
              your building portfolio
            </h2>
            <p className='mt-6  text-lg tracking-tight text-deep-dark'>
              A modern cloud-based software platform for managing commercial and
              corporate real estate’s energy consumption and CO2 emissions.
              Manage your entire portfolio with a comprehensive suite of
              integrated modules specifically designed for the property
              industry.
            </p>
            <p className='mt-6  text-lg tracking-tight text-deep-dark'>
              A modern cloud-based software platform for managing commercial and
              corporate real estate’s energy consumption and CO2 emissions.
              Manage your entire portfolio with a comprehensive suite of
              integrated modules specifically designed for the property industry
            </p>
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
