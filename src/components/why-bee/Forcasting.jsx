import Image from 'next/image'
import { Container } from '@/components/Container'
import feature2 from '@/images/why-bee-forcasting-2.webp'
import feature1 from '@/images/why-bee-forcasting-1.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Forcasting() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='features'
      aria-label='We run 24/7 so you can sleep in peace'
      className='relative overflow-hidden pt-28 pb-28 sm:pb-24 sm:pt-24'
    >
      <Container className='flex flex-wrap lg:flex-nowrap gap-12'>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex w-full justify-end pb-5 lg:hidden lg:w-1/2 lg:pb-0'
        >
          <div className='relative flex justify-end self-end'>
            <Image
              placeholder='blur'
              quality={100}
              className=''
              src={feature2}
              alt=''
            />
          </div>
        </motion.div>

        <div className='flex w-full justify-center lg:w-1/2' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 font-display text-sm font-bold uppercase text-primary'>
              Why BEE | For Forecasting
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              For Forecasting
            </h2>
            <p className='my-6 text-lg tracking-tight text-deep-dark'>
              Forecasting your future energy usage with and without improvements
              have been implemented. By having more visibility in your overall
              energy KPIs and benchmark and achieve your sustainability goals..
              Be able to understand energy trending and identify and prioritise
              energy opportunities and issues.
            </p>
            <p className='text-lg tracking-tight text-deep-dark mb-6'>
              12 months consumption of building plant and equipment against
              buildings group portfolio
            </p>
            <div>
              <Image src={feature1} alt='' placeholder='blur' quality={100} />
            </div>
          </div>
        </div>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex hidden w-full justify-end lg:block lg:w-1/2'
        >
          <div className='relative flex justify-end self-end w-full'>
            <Image
              placeholder='blur'
              quality={100}
              className=''
              src={feature2}
              alt=''
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
