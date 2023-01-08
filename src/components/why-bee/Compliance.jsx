import Image from 'next/image'
import { Container } from '@/components/Container'
import feature1 from '@/images/why-bee-for-compliance-1.webp'
import feature2 from '@/images/why-bee-for-compliance-2.webp'
import feature3 from '@/images/why-bee-for-compliance-3.webp'
import feature4 from '@/images/why-bee-for-compliance-4.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/Button'

export function Compliance() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='compliance'
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
          className='flex hidden w-full justify-end lg:block lg:w-1/2'
        >
          <div className='relative flex justify-end self-end'>
            <Image
              quality={100}
              className=''
              src={feature1}
              alt=''
            />
          </div>
          <div className='relative flex justify-end self-end mt-12'>
            <Image
              quality={100}
              className=''
              src={feature4}
              alt=''
            />
          </div>
        </motion.div>
        <div className='flex w-full justify-center lg:w-1/2' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 text-sm text-gray-500'>
              Why BEE | For Compliance
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              For Compliance
            </h2>
            <p className='my-6 text-lg tracking-tight text-deep-dark'>
              Ensure all your buildings meet the current and future regulatory
              requirements for energy consumption and CO2 emissions. Review the
              potential saving potentials for your building, plant and
              equipment.
            </p>
            <div className="mb-12">
              <Image src={feature2} alt='' quality={100} />
            </div>
            <div>
              <Image src={feature3} alt='' quality={100} />
            </div>
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
