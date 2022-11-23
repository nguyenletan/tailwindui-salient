import Image from 'next/image'

import { Button } from '@/components/Button'
import circle from '@/images/circle.webp'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <>
      <div
        className='relative w-full mt-[79px] mb-16 flex h-[720px] items-center justify-between bg-cover text-left'
        style={{
          objectFit: 'cover',
          backgroundImage: `url(/background-images/video-sec0.jpg)`,
        }}
      >
        <video
          muted
          autoPlay
          loop
          className=' z[1] absolute top-0 left-0 h-full w-full object-cover hidden md:block'
        >
          <source
            src='https://raw.githubusercontent.com/BEEUK/cdn/master/BEE/DayNight-MBS%20Dial%20V1.mp4?raw=true'
            type='video/mp4'
          ></source>
        </video>
        <div className='items-left mx-auto flex flex-col '>
          <div className='md:w-full lg:w-[680px] relative py-5 px-8 lg:px-14'>
            <h1 className='max-w-2xl font-display text-4xl font-bold !leading-tight tracking-tight text-white lg:text-6xl'>
              {/*<span className='relative whitespace-nowrap text-lime-500'>*/}
              {/*  <svg*/}
              {/*    aria-hidden='true'*/}
              {/*    viewBox='0 0 418 42'*/}
              {/*    className='absolute top-2/3 left-0 h-[0.58em] w-full fill-lime-500/50'*/}
              {/*    preserveAspectRatio='none'*/}
              {/*  >*/}
              {/*    <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />*/}
              {/*  </svg>*/}
              {/*  <span className='relative'>Energy Management</span>*/}
              {/*</span>*/}
              {/*<br />*/}
              We run 24/7 so you can sleep in peace
            </h1>
            <p className='mx-auto mt-6 text-xl tracking-tight text-white'>
              Transform your energy management needs with one flexible,
              powerful, robust software suite that has solutions for a myriad of
              business needs.
            </p>
            <div className='justify-left mt-10 flex gap-x-6'>
              <Button href='/register' className='text-lg' color='primary'>
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className='mx-auto w-2/5 hidden lg:block'>
          {/*<Image src={circle} alt='circle' width='200px' />*/}
        </div>
      </div>



      {/*<Container className="text-center pb-16">*/}
      {/*  <div className="mt-32">*/}
      {/*    <p className="font-display text-base text-slate-900">*/}
      {/*      Trusted by these six companies so far*/}
      {/*    </p>*/}
      {/*    <ul*/}
      {/*      role="list"*/}
      {/*      className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"*/}
      {/*    >*/}
      {/*      {[*/}
      {/*        [*/}
      {/*          { name: 'Transistor', logo: logoTransistor },*/}
      {/*          { name: 'Tuple', logo: logoTuple },*/}
      {/*          { name: 'StaticKit', logo: logoStaticKit },*/}
      {/*        ],*/}
      {/*        [*/}
      {/*          { name: 'Mirage', logo: logoMirage },*/}
      {/*          { name: 'Laravel', logo: logoLaravel },*/}
      {/*          { name: 'Statamic', logo: logoStatamic },*/}
      {/*        ],*/}
      {/*      ].map((group, groupIndex) => (*/}
      {/*        <li key={groupIndex}>*/}
      {/*          <ul*/}
      {/*            role="list"*/}
      {/*            className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"*/}
      {/*          >*/}
      {/*            {group.map((company) => (*/}
      {/*              <li key={company.name} className="flex">*/}
      {/*                <Image*/}
      {/*                  src={company.logo}*/}
      {/*                  alt={company.name}*/}
      {/*                  unoptimized*/}
      {/*                />*/}
      {/*              </li>*/}
      {/*            ))}*/}
      {/*          </ul>*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</Container>*/}
    </>
  )
}
