import Image from 'next/image'
import backgroundImg from '@/images/services-banner.webp'
import { Button } from '@/components/Button'

export function Hero() {
  return (
    <>
      <div className='mt-[85px] mb-16 flex grid h-[500px] w-full sm:grid-cols-1 md:grid-cols-2 '>
        <div className='mx-auto max-w-2xl self-center'>
          <h5 className='font-display font-bold text-primary'>
            BEE | SERVICES
          </h5>
          <h2 className='leading-tight pb-4 pt-1 font-display text-4xl font-bold'>
            The building management process
          </h2>
          <p className='text-lg'>
            Transform your operations with one flexible, powerful, robust
            software suite that has solutions for a myriad of business needs.
          </p>
          <div className='justify-left mt-10 gap-x-6'>
            <Button href='/contact-us' className='text-lg' color='primary'>
              Get Started
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={backgroundImg}
            alt='background'
            className='h-full object-cover object-left-top'
          />
        </div>
      </div>
    </>
  )
}
