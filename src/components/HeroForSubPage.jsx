import Image from 'next/image'
import backgroundImg from '@/images/halfbg.webp'
import { Button } from '@/components/Button'


export function HeroForSubPage() {
  return (
    <>
      <div
        className='grid sm:grid-cols-1 md:grid-cols-2 w-full mt-[88px] mb-16 flex h-[500px] '
      >
        <div className="self-center mx-auto max-w-2xl">
          <h5 className="text-primary font-bold font-display">Bee | Why Bee</h5>
          <h2 className='font-display text-4xl font-extrabold pb-4 pt-1 leading-tight'>Streamline your Building’s Management with BEE</h2>
          <p className="text-lg">Transform your operations with one flexible, powerful, robust software suite that has solutions for a myriad of business needs.</p>
          <div className='justify-left mt-10  gap-x-6'>
            <Button href='/contact-us' className='text-lg' color='primary'>
              Get Started
            </Button>
          </div>
        </div>
        <div>
          <Image src={backgroundImg} alt="background" className="h-full object-cover object-left-top"/>
        </div>

      </div>




    </>
  )
}
