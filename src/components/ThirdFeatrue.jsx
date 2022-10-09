import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import feature from '@/images/feature.webp'


export function ThirdFeatures() {


  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden pt-12 pb-28 sm:pb-24"
    >
      {/*<Image*/}
      {/*  className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"*/}
      {/*  src={backgroundImage}*/}
      {/*  alt=""*/}
      {/*  width={2245}*/}
      {/*  height={1636}*/}
      {/*  unoptimized*/}
      {/*/>*/}
      <Container className="flex gap-20 justify-between">
        <div className="w-3/5">
          <Image
            className=""
            src={feature}
            alt=""
          />
        </div>
        <div className="w-2/5 md:mx-auto sm: text-center md:text-left xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-deep-dark sm:text-4xl md:text-4xl">
            A single platform to manage property, leases and facilities with confidence.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-deep-dark">
            A modern cloud-based software platform for managing commercial and corporate real estate.  Managing your entire portfolio with a comprehensive suite of integrated modules specifically designed for the property industry
          </p>
        </div>
      </Container>
    </section>
  )
}
