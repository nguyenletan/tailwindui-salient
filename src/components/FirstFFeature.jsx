import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/feature3.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import GermanWholeSaleLineChart from '@/components/Charts/GermanWholeSaleLineChart'

export function FirstFFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id='features'
      aria-label='Features for running your books'
      className='relative overflow-hidden pt-12 pb-28 sm:pb-24'
    >
      <Container className='flex gap-8 align-top'>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(-200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex w-3/5'
        >
          <GermanWholeSaleLineChart />
        </motion.div>
        <div className='flex w-2/5' ref={ref}>
          <div className=' text-center md:text-left xl:max-w-none'>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-4xl md:text-4xl'>
              Average German wholesale electricity monthly price from Jan 2019
              to Sept 2022 (in euros per megawatt-hour)
            </h2>
            <h5 className='font-semibold pt-8'>
              Monthly wholesale electricity prices in Germany 2019-2022 Research
              expert covering energy and environment Oct 24, 2022
            </h5>

            <p className='mt-6  text-lg tracking-tight text-deep-dark'>
              In September 2022, the average wholesale electricity price in
              Germany surpassed 360 euros per megawatt-hour, more than double
              the price recorded a year earlier.
            </p>
            <p className='mt-6  text-lg tracking-tight text-deep-dark'>
              This was also the second highest figure registered in the
              displayed period. In the past year, electricity prices in Europe
              soared.
            </p>
            <p className='mt-6  text-lg tracking-tight text-deep-dark'>
              This was the result of a myriad of factors, including increased
              heating demand due to cold winters, a rise in natural gas and coal
              prices, a drop in wind power generation due to low wind speeds,
              and more recently, Russia’s invasion of Ukraine and extreme
              temperatures in the summer.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
