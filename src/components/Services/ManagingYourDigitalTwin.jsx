import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/managing-your-digital-twin.webp'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

export function ManagingYourDigitalTwin() {
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
              Services | DIGITAL TWIN MANAGEMENT
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:text-3xl md:text-4xl'>
              Managing your Digital Twin
            </h2>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              We start with the possibilities and the practicality of utilising
              the information and work with you to identify what your business
              needs are and expectations from your facilities operationally.
            </p>
            <p className='mt-6 text-lg tracking-tight text-deep-dark'>
              Once the current performance based on the building assessment then
              move to aspirations and how to reach your organisation’s net zero
              goals. Your existing buildings can be retrofitted with smart
              features - we tend to focus on the what’s practical for you and
              your building operations. We will advise on where the connections
              should be made with your building’s systems for the best results
              for your information flow.
            </p>
            <ul className='mt-6 text-lg tracking-tight text-deep-dark'>
              <h4 className="font-bold pb-4">Key Features:</h4>
              <li className="pb-8">
                <CheckIcon className="mr-1 font-bold h-6 w-6 text-primary inline-block" aria-hidden="true" />
                Advance analytics to monitor and manage and future-proof your
                building portfolio.
              </li>
              <li className="pb-8">
                <CheckIcon className="mr-1 font-bold h-6 w-6 text-primary inline-block" aria-hidden="true" />
                We digitise and develop your smart building with insight
                dashboards and enable you to continuous optimise your building’s
                operational performance.
              </li>
              <li className="pb-8">
                <CheckIcon className="mr-1 font-bold h-6 w-6 text-primary inline-block" aria-hidden="true" />
                Collate the data and continue to manage and maintain your
                building’s digital twin information so that you can focus on
                your business.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
