import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/operation-of-things.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function OperationOfThings() {
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
              Services | operation of things
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              Assessing the operation of things
            </h2>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              Tends to lead to improvements in performance this is a useful
              by-product of any intervention. We provide the tools for you to
              make the informed building decisions.
            </p>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              These metrics are not only related to one building, but available
              for all your facilities to enable you to take the decisions at the
              strategic and operation levels. These include life-cycle costs,
              functionality and operations
            </p>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              When it comes to building performance assessments we combine the
              physical and the behavioural information these performance metrics
              for the operation and maintenance of buildings.
            </p>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              Integrating the building, plant and equipment life cycle so that
              you have the right information to manage obsolescence. Enabling
              you to plan your replacement budget based on the useful life in
              relation to your business needs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
