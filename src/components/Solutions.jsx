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


export function Solutions() {


  return (
    <section
      id="solutions"
      aria-label="Transform your real estate portfolio"
      className="pt-12 pb-28 sm:pb-24 text-center"
    >
      <h3 className="font-display mx-auto font-semibold uppercase text-stone-400 text-md pb-1">Solution</h3>
      <h2 className="font-display mx-auto font-extrabold capitalize text-deep-dark text-3xl md:text-4xl pb-4">Transform your real estate portfolio</h2>
      <p className="text-deep-dark">Specialized solutions for the commercial real estate, industrial, office, retail and mixed portfolio</p>
      <Container className="mt-16">
        <ul className="flex gap-10 justify-between">
          <li className="w-[500px] h-[281px] rounded-lg bg-lime-600 flex flex-col justify-end items-start p-5 text-white">
            <h3 className="font-display font-semibold text-lg pb-1">Investor</h3>
            <p className="text-md text-left pb-6">For Owners & Investors of Commercial Real Estate and multi-assets</p>
          </li>
          <li className="w-[500px] h-[281px] rounded-lg bg-lime-600 flex flex-col justify-end items-start p-5 text-white">
            <h3 className="font-display font-semibold text-lg pb-1">Corporate</h3>
            <p className="text-md text-left pb-6">For Owners & Investors of Commercial Real Estate and multi-assets</p>
          </li>
          <li className="w-[500px] h-[281px] rounded-lg bg-lime-600 flex flex-col justify-end items-start p-5 text-white">
            <h3 className="font-display font-semibold text-lg pb-1">Infrastructure</h3>
            <p className="text-md text-left pb-6">For Owners & Investors of Commercial Real Estate and multi-assets</p>
          </li>
        </ul>
      </Container>
    </section>
  )
}
