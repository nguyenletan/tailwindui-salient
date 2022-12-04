import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/feature2.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ESGRequirementsFeature() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='features'
      aria-label='Features for running your books'
      className='relative overflow-hidden pt-12 pb-28 sm:pb-24'
    >
      <Container className='flex flex-wrap gap-8 align-top lg:flex-nowrap pb-5'>
        <div className='flex w-full justify-start lg:hidden'>
          <div className='relative flex justify-end self-center'>
            <Image
              placeholder='blur'
              quality={100}
              className=''
              src={feature}
              alt=''
            />
          </div>
        </div>

        <div ref={ref} className='flex w-full lg:w-1/2'>
          <div className='md:text-left xl:max-w-none'>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-4xl md:text-4xl'>
              A single platform to manage your property’s ESG requirements
            </h2>
            <p className='py-8 text-xl text-gray-600'>
              A software that you and your tenants can use to coordinate and
              manage your building’s energy consumption and CO2 emissions.
            </p>
            {/*<div className='mt-6 pb-8 text-lg tracking-tight text-deep-dark'>*/}
            {/*  <h4 className='pb-4 font-semibold'>*/}
            {/*    Current Building Performance*/}
            {/*  </h4>*/}
            {/*  <p>*/}
            {/*    Using building information and sub-meter readings, track key*/}
            {/*    energy and emission numbers to see which sub-systems have the*/}
            {/*    largest impacts. Drill down to critical plant and equipment and*/}
            {/*    see the factors that influence your building’s energy*/}
            {/*    consumption. Track key building information to understand and*/}
            {/*    make informed decisions.*/}
            {/*  </p>*/}
            {/*</div>*/}
            {/*<div className='mt-6 pb-8 text-lg tracking-tight text-deep-dark'>*/}
            {/*  <h4 className='pb-4 font-semibold'>*/}
            {/*    Compare Building Performance*/}
            {/*  </h4>*/}
            {/*  <p>*/}
            {/*    Compare each building’s performance with similar ones in your*/}
            {/*    portfolio, minimum legislative requirements and potential*/}
            {/*    best-in-class. Understand the gaps and the best possible*/}
            {/*    performance achievable. Look at individual spaces and identify*/}
            {/*    where improvements can be made. Receive alerts when compliance*/}
            {/*    requirements are not met.*/}
            {/*  </p>*/}
            {/*</div>*/}

            {/*<div className='mt-6 text-lg tracking-tight text-deep-dark'>*/}
            {/*  <h4 className='pb-4 font-semibold'>*/}
            {/*    Improve Building Performance*/}
            {/*  </h4>*/}
            {/*  <p>*/}
            {/*    Identify potential energy performance improvements achievable*/}
            {/*    for each building along with key energy, emissions and financial*/}
            {/*    metrics. Analyse multiple scenarios and optimise improvement*/}
            {/*    measures to suit your business needs. Easily share reports so*/}
            {/*    everyone can work with the same dataset.*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>
        </div>

        <motion.div
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex hidden w-1/2 justify-start lg:block'
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
