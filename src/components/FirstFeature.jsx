import Image from 'next/image'
import { Container } from '@/components/Container'
import feature from '@/images/first-feature.webp'
import {
  motion,
  useInView
} from 'framer-motion'
import { useRef } from 'react'

export function FirstFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id='features'
      aria-label='Features for running your books'
      className='relative overflow-hidden pt-12 pb-28 sm:pb-24'
    >
      {/*<Image*/}
      {/*  className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"*/}
      {/*  src={backgroundImage}*/}
      {/*  alt=""*/}
      {/*  width={2245}*/}
      {/*  height={1636}*/}
      {/*  unoptimized*/}
      {/*/>*/}
      <Container className='flex flex-wrap lg:flex-nowrap'>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex w-full lg:w-3/5 justify-end pb-5 lg:pb-0'
        >
          <div className='relative flex justify-end self-end lg:hidden'>
            <Image
              placeholder='blur'
              quality={100}
              className=''
              src={feature}
              alt=''
            />
          </div>
        </motion.div>

        <div className='flex w-full justify-center lg:w-2/5' ref={ref}>
          <div className='md:text-left xl:max-w-none'>
            <span className='block pb-3 text-sm text-gray-500'>
              Solution | Introduction
            </span>
            <h2 className='font-display text-3xl font-extrabold !leading-tight tracking-tight text-deep-dark sm:w-3/5 sm:text-3xl md:text-4xl'>
              We run 24/7 so you can sleep in peace
            </h2>
            <p className='mt-6  text-lg tracking-tight text-deep-dark sm:w-3/5'>
              Transform your energy management needs with one flexible,
              powerful, robust software suite that has solutions for a myriad of
              business needs.
            </p>
          </div>
        </div>
        <motion.div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
          className='flex w-full lg:w-3/5 justify-end hidden lg:block'
        >
          <div className='relative flex justify-end self-end'>
            {/*<div className='absolute top-[190px] left-[-150px] flex flex-col gap-0 rounded-xl bg-white px-3 pt-2 pb-0 shadow-lg'>*/}
            {/*  <p className='flex gap-2'>*/}
            {/*    <svg*/}
            {/*      xmlns='http://www.w3.org/2000/svg'*/}
            {/*      width='31.21'*/}
            {/*      height='31.209'*/}
            {/*      viewBox='0 0 41.21 41.209'*/}
            {/*    >*/}
            {/*      <g id='Path_8658' data-name='Path 8658' fill='#fff'>*/}
            {/*        <path*/}
            {/*          d='M 20.60475540161133 40.20951461791992 C 17.95769500732422 40.20951461791992 15.39033508300781 39.69130706787109 12.97400569915771 38.66928482055664 C 10.63960552215576 37.68191528320312 8.542895317077637 36.26820373535156 6.742105484008789 34.46741485595703 C 4.941315174102783 32.6666259765625 3.527605295181274 30.56990623474121 2.54023551940918 28.23550605773926 C 1.518215417861938 25.81917572021484 1.00000536441803 23.2518253326416 1.00000536441803 20.60475540161133 C 1.00000536441803 17.95768547058105 1.518215417861938 15.39033508300781 2.54023551940918 12.97400569915771 C 3.527605295181274 10.63960552215576 4.941315174102783 8.542895317077637 6.742105484008789 6.742105484008789 C 8.542895317077637 4.941315174102783 10.63960552215576 3.527605295181274 12.97400569915771 2.54023551940918 C 15.39033508300781 1.518215417861938 17.95768547058105 1.00000536441803 20.60475540161133 1.00000536441803 C 23.2518253326416 1.00000536441803 25.81917572021484 1.518215417861938 28.23550605773926 2.54023551940918 C 30.56990623474121 3.527605295181274 32.6666259765625 4.941315174102783 34.46741485595703 6.742105484008789 C 36.26820373535156 8.542895317077637 37.68191528320312 10.63960552215576 38.66928482055664 12.97400569915771 C 39.69130706787109 15.39033508300781 40.20951461791992 17.95769500732422 40.20951461791992 20.60475540161133 C 40.20951461791992 23.88995552062988 39.42087554931641 27.0079345703125 37.86549377441406 29.87208557128906 C 36.36680603027344 32.63184356689453 34.161865234375 35.06665420532227 31.48903465270996 36.91328430175781 C 28.41822624206543 39.0390739440918 24.55305480957031 40.20951461791992 20.60475540161133 40.20951461791992 Z'*/}
            {/*          stroke='none'*/}
            {/*        />*/}
            {/*        <path*/}
            {/*          d='M 20.60475540161133 1.999996185302734 C 15.63524627685547 1.999996185302734 10.96318626403809 3.935226440429688 7.449207305908203 7.449207305908203 C 3.935226440429688 10.96318626403809 1.999996185302734 15.63524627685547 1.999996185302734 20.60475540161133 C 1.999996185302734 25.57426452636719 3.935226440429688 30.2463264465332 7.449207305908203 33.76029586791992 C 10.96318626403809 37.27427673339844 15.63524627685547 39.20950698852539 20.60475540161133 39.20950698852539 C 24.35163497924805 39.20950698852539 28.0146656036377 38.10221481323242 30.92061614990234 36.09055328369141 C 33.46493530273438 34.33269500732422 35.56255340576172 32.01736450195312 36.9867057800293 29.39485549926758 C 38.46164703369141 26.67882537841797 39.20950698852539 23.72140502929688 39.20950698852539 20.60475540161133 C 39.20950698852539 15.63524627685547 37.27427673339844 10.96318626403809 33.76029586791992 7.449207305908203 C 30.2463264465332 3.935226440429688 25.57426452636719 1.999996185302734 20.60475540161133 1.999996185302734 M 20.60475540161133 -3.814697265625e-06 C 31.98444557189941 -3.814697265625e-06 41.20950698852539 9.225065231323242 41.20950698852539 20.60475540161133 C 41.20950698852539 27.63740539550781 37.68623352050781 33.84714508056641 32.05745697021484 37.73602676391602 C 28.98442459106445 39.86335372924805 24.95179557800293 41.20950698852539 20.60475540161133 41.20950698852539 C 9.225065231323242 41.20950698852539 -3.814697265625e-06 31.98444557189941 -3.814697265625e-06 20.60475540161133 C -3.814697265625e-06 9.225065231323242 9.225065231323242 -3.814697265625e-06 20.60475540161133 -3.814697265625e-06 Z'*/}
            {/*          stroke='none'*/}
            {/*          fill='#b1dc65'*/}
            {/*        />*/}
            {/*      </g>*/}
            {/*      <path*/}
            {/*        id='Path_8659'*/}
            {/*        data-name='Path 8659'*/}
            {/*        d='M59.526,48A11.526,11.526,0,1,0,71.052,59.526,11.524,11.524,0,0,0,59.526,48ZM57.747,63.61a.764.764,0,0,1-.488.244.8.8,0,0,1-.493-.249l-3.1-3.1.986-.986,2.616,2.616,6.916-6.966.97,1Z'*/}
            {/*        transform='translate(-38.921 -38.922)'*/}
            {/*        fill='#afd862'*/}
            {/*      />*/}
            {/*    </svg>*/}
            {/*    <span className='text-sm leading-tight'>*/}
            {/*      Total Energy <br /> Consumption (MWh)*/}
            {/*    </span>*/}
            {/*  </p>*/}
            {/*  <span className='number ml-[45px] text-[1.7rem] font-bold text-primary'></span>*/}
            {/*</div>*/}

            {/*<div className='absolute bottom-[150px] left-[-110px] flex flex-col gap-0 rounded-xl bg-white px-3 pt-2 pb-0 shadow-lg'>*/}
            {/*  <p className='flex gap-2'>*/}
            {/*    <span className='text-sm leading-tight'>*/}
            {/*      Improvements <br />*/}
            {/*      Lights Replacement*/}
            {/*    </span>*/}

            {/*    <svg*/}
            {/*      id='Group_2475'*/}
            {/*      data-name='Group 2475'*/}
            {/*      xmlns='http://www.w3.org/2000/svg'*/}
            {/*      width='40'*/}
            {/*      height='40'*/}
            {/*      viewBox='0 0 45.322 45.322'*/}
            {/*    >*/}
            {/*      <g*/}
            {/*        id='Ellipse_321'*/}
            {/*        data-name='Ellipse 321'*/}
            {/*        fill='#fff'*/}
            {/*        stroke='#ffbf0e'*/}
            {/*        strokeWidth='2'*/}
            {/*      >*/}
            {/*        <circle cx='22.661' cy='22.661' r='22.661' stroke='none' />*/}
            {/*        <circle cx='22.661' cy='22.661' r='21.661' fill='none' />*/}
            {/*      </g>*/}
            {/*      <circle*/}
            {/*        id='Ellipse_322'*/}
            {/*        data-name='Ellipse 322'*/}
            {/*        cx='12.675'*/}
            {/*        cy='12.675'*/}
            {/*        r='12.675'*/}
            {/*        transform='translate(9.984 9.986)'*/}
            {/*        fill='#ffbf0e'*/}
            {/*      />*/}
            {/*      <g id='Group_1115' transform='translate(17.035 13.117)'>*/}
            {/*        <path*/}
            {/*          id='Path_59'*/}
            {/*          d='M6.433,2.01H0V0H6.433Z'*/}
            {/*          transform='translate(2.411 14.063)'*/}
            {/*          fill='none'*/}
            {/*          stroke='#fcfcfc'*/}
            {/*          strokeMiterlimit='10'*/}
            {/*          strokeWidth='1'*/}
            {/*        />*/}
            {/*        <path*/}
            {/*          id='Path_61'*/}
            {/*          d='M4.646,1.886l-.6.941h-2.4l-.121-.177L1,1.886H.963c-.45,0-.937-.083-.937-.721h0c0-.033,0-.168,0-.325C.019.7.015.536.012.413L0,0H5.643L5.635.41l-.015.755h0c0,.638-.486.721-.937.721Z'*/}
            {/*          transform='translate(2.802 16.462)'*/}
            {/*          fill='none'*/}
            {/*          stroke='#fcfcfc'*/}
            {/*          strokeMiterlimit='10'*/}
            {/*          strokeWidth='1'*/}
            {/*        />*/}
            {/*        <path*/}
            {/*          id='Path_63'*/}
            {/*          d='M8.734,12.706c-.037.226-.076.464-.1.622l-.041.331h-5.9l-.06-.331c-.028-.159-.067-.4-.1-.622A6.566,6.566,0,0,0,1.483,9.73a12.272,12.272,0,0,1-1.008-1.8A5.328,5.328,0,0,1,0,5.8H0A5.874,5.874,0,0,1,1.642,1.715,5.541,5.541,0,0,1,5.608,0h.036A5.54,5.54,0,0,1,9.609,1.715,5.875,5.875,0,0,1,11.251,5.8h0a5.322,5.322,0,0,1-.476,2.135,12.262,12.262,0,0,1-1.008,1.8A6.559,6.559,0,0,0,8.734,12.706Z'*/}
            {/*          transform='translate(0)'*/}
            {/*          fill='none'*/}
            {/*          stroke='#fcfcfc'*/}
            {/*          strokeMiterlimit='10'*/}
            {/*          strokeWidth='1'*/}
            {/*        />*/}
            {/*      </g>*/}
            {/*    </svg>*/}
            {/*  </p>*/}
            {/*  <p className='flex gap-3'>*/}
            {/*    <span className='text-[1.7rem] font-bold text-yellow-500'>*/}
            {/*      60%*/}
            {/*    </span>*/}
            {/*    <p className="flex flex-col gap-1">*/}
            {/*      <span className='text-xs leading-tight'>IRR 27%</span>*/}
            {/*      <span className='text-xs leading-tight'>CO2 57 Tons/Yr</span>*/}
            {/*    </p>*/}
            {/*  </p>*/}
            {/*</div>*/}
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
