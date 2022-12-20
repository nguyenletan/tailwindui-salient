import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/building-assessment.webp'
import feature2 from '@/images/conditional-assessment.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function BuildingConditionalAssessment() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <section
      id='features'
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
          className='flex hidden w-full justify-end lg:block lg:w-3/5'
        >
          <div className='relative flex justify-end self-end'>
            <Image quality={100} className='' src={feature} alt='' />
          </div>
        </motion.div>

        <div className='flex w-full justify-center lg:w-2/5' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 font-display text-sm font-bold uppercase text-primary'>
              Services | CONDITION ASSESSMENT
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              Building Condition Assessment
            </h2>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              QGet visibility on the energy performance of all your buildings at
              the system and subsystem level and develop an energy savings plan
              that is sustainable and meets your organisation’s ESG objectives.
            </p>
            <p className='justify-left mt-10'>
              <Image quality={100} className='' src={feature2} alt='' />
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
