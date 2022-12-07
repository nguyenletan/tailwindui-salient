import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowDownOnSquareStackIcon,
  CurrencyPoundIcon,
  BoltIcon,
  GlobeEuropeAfricaIcon,
  BanknotesIcon,
  BoltSlashIcon,
  ArrowTrendingUpIcon,
  ScaleIcon,
  PencilSquareIcon,
  ChartPieIcon,
  DocumentArrowUpIcon,
  BuildingLibraryIcon,
  HandThumbUpIcon,
  TruckIcon,
  BuildingOffice2Icon,
  DocumentChartBarIcon,
  PauseIcon,
  PresentationChartLineIcon,
  DocumentCheckIcon,
  PresentationChartBarIcon,
  DocumentPlusIcon,
  Bars2Icon,
  CloudArrowUpIcon
} from '@heroicons/react/24/solid'

import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import Link from 'next/link'

const software = [
  {
    name: 'Current Performance ',
    description:
      'The building performance is based on the current state of your building and how it reacts to the environment.',
    href: '#',
    icon: ChartBarIcon,
    subItems: [
      {
        title: 'New project input',
        icon: ArrowDownOnSquareStackIcon,
        href: '#',
      },
      {
        title: 'Cost Breakdown',
        icon: CurrencyPoundIcon,
        href: '#',
      },
      {
        title: 'Total Energy Consumption',
        icon: BoltIcon,
        href: '#',
      },
      {
        title: 'CO2 Breakdown',
        icon: GlobeEuropeAfricaIcon,
        href: '#',
      },
      {
        title: 'Total Energy Cost',
        icon: BanknotesIcon,
        href: '#',
      },
      {
        title: 'Electrical Systems Information',
        icon: BoltSlashIcon,
        href: '#',
      },
      {
        title: 'Total Carbon Emissions',
        icon: GlobeAltIcon,
        href: '#',
      },
      {
        title: 'Incidental Gains Information',
        icon: ArrowTrendingUpIcon,
        href: '#',
      },
      {
        title: 'Historical Comparison',
        icon: ScaleIcon,
        href: '#',
      },
      {
        title: 'Edit Input',
        icon: PencilSquareIcon,
        href: '#',
      },
      {
        title: 'Consumption Breakdown',
        icon: ChartPieIcon,
        href: '#',
      },
      {
        title: 'Save and Export',
        icon: DocumentArrowUpIcon,
        href: '#',
      },
    ],
  },
  {
    name: 'Comparison',
    description:
      'The building performance is based on the current state of your building and how it reacts to the environment.',
    href: '#',
    icon: ScaleIcon,
    subItems: [
      {
        title: 'Building Energy Performance',
        icon: BuildingLibraryIcon,
        href: '#',
      },
      {
        title: 'Best-in-Class Comparison',
        icon: HandThumbUpIcon,
        href: '#',
      },
      {
        title: 'CO2 Emission Performance',
        icon: TruckIcon,
        href: '#',
      },
      {
        title: 'Multi-Building Comparison',
        icon: BuildingOffice2Icon,
        href: '#',
      },
      {
        title: 'Sub-system Performance',
        icon: DocumentChartBarIcon,
        href: '#',
      },
      {
        title: 'Multi-Sub-System Comparison',
        icon: PauseIcon,
        href: '#',
      },
      {
        title: 'Envelope Performance Comparison',
        icon: PresentationChartLineIcon,
        href: '#',
      },
      {
        title: 'Facilities Selection',
        icon: DocumentCheckIcon,
        href: '#',
      },
      {
        title: 'Sub-system Comparison',
        icon: PresentationChartBarIcon,
        href: '#',
      },
      {
        title: 'Edit Input',
        icon: DocumentPlusIcon,
        href: '#',
      },
      {
        title: 'Regulatory  Comparison',
        icon: Bars2Icon,
        href: '#',
      },
      {
        title: 'Save and Export',
        icon: CloudArrowUpIcon,
        href: '#',
      },
    ],
  },
  {
    name: 'Improvements',
    description:
      'The building performance is based on the current state of your building and how it reacts to the environment.',
    href: '#',
    icon: ArrowTrendingUpIcon,
    subItems: [
      {
        title: 'Annual Energy Savings',
        icon: ArrowDownOnSquareStackIcon,
        href: '#',
      },
      {
        title: 'CO2 Emissions improvements',
        icon: CurrencyPoundIcon,
        href: '#',
      },
      {
        title: 'Annual energy cost savings',
        icon: BoltIcon,
        href: '#',
      },
      {
        title: 'Energy savings breakdown',
        icon: GlobeEuropeAfricaIcon,
        href: '#',
      },
      {
        title: 'Annual CO2 emissions avoided',
        icon: BanknotesIcon,
        href: '#',
      },
      {
        title: 'Cost savings breakdown',
        icon: BoltSlashIcon,
        href: '#',
      },
      {
        title: 'Investment cost and payback',
        icon: GlobeAltIcon,
        href: '#',
      },
      {
        title: 'CO2 Emissions breakdown',
        icon: ArrowTrendingUpIcon,
        href: '#',
      },
      {
        title: 'Energy usage intensity reduction',
        icon: ScaleIcon,
        href: '#',
      },
      {
        title: 'Breakdown of improvements',
        icon: PencilSquareIcon,
        href: '#',
      },
      {
        title: 'Building energy improvements',
        icon: ChartPieIcon,
        href: '#',
      },
      {
        title: 'Improvement measures',
        icon: DocumentArrowUpIcon,
        href: '#',
      },
    ],
  },
  {
    name: 'Asset Reliability',
    description:
      'The building performance is based on the current state of your building and how it reacts to the environment.',
    href: '#',
    icon: Squares2X2Icon,
    subItems: [
      {
        title: 'Asset health',
        icon: ArrowDownOnSquareStackIcon,
        href: '#',
      },
      {
        title: 'Annual energy consumption ',
        icon: CurrencyPoundIcon,
        href: '#',
      },
      {
        title: 'Potential issues and risks',
        icon: BoltIcon,
        href: '#',
      },
      {
        title: 'Parts and reliability',
        icon: GlobeEuropeAfricaIcon,
        href: '#',
      },
      {
        title: 'Sub-system health',
        icon: BanknotesIcon,
        href: '#',
      },
      {
        title: 'Depreciation',
        icon: BoltSlashIcon,
        href: '#',
      },
      {
        title: 'Potential Issues',
        icon: GlobeAltIcon,
        href: '#',
      },
      {
        title: 'Asset parts and services',
        icon: ArrowTrendingUpIcon,
        href: '#',
      },
      {
        title: 'Potential Faults',
        icon: ScaleIcon,
        href: '#',
      },
      {
        title: 'Alerts',
        icon: PencilSquareIcon,
        href: '#',
      },
      {
        title: 'Maintenance budget by sub-system',
        icon: ChartPieIcon,
        href: '#',
      },
      {
        title: 'Maintenance & sensor logs',
        icon: DocumentArrowUpIcon,
        href: '#',
      },
    ],
  },
]
const services = [
  {
    name: 'Consultancy',
    description:
      'Our expertise goes beyond software we work with you to find the most suitable solution that works for your building’s operations and your business.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Service overview',
    description:
      'The building performance is based on the current state of your building and how it reacts to the environment.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
]

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: BuildingOfficeIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkSquareIcon },
  { name: 'Webinars', href: '#', icon: ComputerDesktopIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header2() {
  const [softwareSelectedItem, setSoftwareSelectedItem] = useState(0)

  return (
    <div className='fixed z-10 w-full'>
      <Popover className='relative bg-white'>
        <div
          className='pointer-events-none absolute inset-0 z-30 shadow'
          aria-hidden='true'
        />
        <div className='relative z-20'>
          <div className='mx-auto flex max-w-7xl items-center justify-between py-5 pr-4 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:pr-8'>
            <Logo />
            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
                <span className='sr-only'>Open menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <div className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
              <Popover.Group as='nav' className='flex space-x-10'>
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                        )}
                      >
                        <span>Software</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden='true'
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 -translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 -translate-y-1'
                      >
                        <Popover.Panel className='absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block'>
                          <div className='grid h-full grid-cols-3 gap-8 overflow-auto'>
                            <div className='mx-auto flex max-w-7xl flex-col gap-8 overflow-auto bg-stone-50 px-4 py-6 pb-8 sm:px-6 sm:py-8 lg:px-8 lg:py-8 xl:py-10'>
                              {software.map((item, index) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className={
                                    '-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-stone-100' +
                                    (index === softwareSelectedItem
                                      ? ' bg-gray-100'
                                      : '')
                                  }
                                  onClick={() => setSoftwareSelectedItem(index)}
                                >
                                  <div className='flex gap-4 md:h-full'>
                                    <div className='mt-1 flex-shrink-0'>
                                      <span className='inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white sm:h-8 sm:w-8'>
                                        <item.icon
                                          className='h-6 w-6'
                                          aria-hidden='true'
                                        />
                                      </span>
                                    </div>
                                    <div className='ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0'>
                                      <div>
                                        <p className='text-base font-medium text-gray-900'>
                                          {item.name}
                                        </p>
                                        <p className='mt-1 text-sm text-gray-500'>
                                          {item.description}
                                        </p>
                                      </div>
                                      {/*<p className='mt-2 text-sm font-medium text-primary lg:mt-4'>*/}
                                      {/*  Learn more*/}
                                      {/*  <span aria-hidden='true'> &rarr;</span>*/}
                                      {/*</p>*/}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className='col-span-2 mx-auto max-w-7xl overflow-auto px-4 py-6 pb-8 sm:px-6 sm:py-8 lg:px-8 lg:py-8 xl:py-9'>
                              <p className='pb-8 font-display text-lg'>
                                Manage every aspect of your infrastructure real
                                estate from accounting and operations to
                                sustainability and energy consumption:{' '}
                              </p>
                              <ul className='grid grid-cols-2 gap-x-6 gap-y-8 2xl:grid-cols-3'>
                                {software[softwareSelectedItem].subItems?.map(
                                  (subItem) => (
                                    <li key={subItem.title} className=''>
                                      <subItem.icon
                                        className='mr-2 inline-block h-6 w-6 text-primary'
                                        aria-hidden='true'
                                      />
                                      <span
                                        //href={subItem.href}
                                        className='align-bottom leading-[24px]'
                                      >
                                        {subItem.title}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                        )}
                      >
                        <span>Services</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden='true'
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 -translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 -translate-y-1'
                      >
                        <Popover.Panel className='absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block'>
                          <div className='mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-3 lg:px-8 lg:py-12 xl:py-16'>
                            {services.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50'
                              >
                                <div className='flex md:h-full lg:flex-col'>
                                  <div className='flex-shrink-0'>
                                    <span className='inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white sm:h-12 sm:w-12'>
                                      <item.icon
                                        className='h-6 w-6'
                                        aria-hidden='true'
                                      />
                                    </span>
                                  </div>
                                  <div className='ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4'>
                                    <div>
                                      <p className='text-base font-medium text-gray-900'>
                                        {item.name}
                                      </p>
                                      <p className='mt-1 text-sm text-gray-500'>
                                        {item.description}
                                      </p>
                                    </div>
                                    <p className='mt-2 text-sm font-semibold text-primary lg:mt-4'>
                                      Learn more
                                      <span aria-hidden='true'> &rarr;</span>
                                    </p>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className='bg-gray-50'>
                            <div className='mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8'>
                              {callsToAction.map((item) => (
                                <div key={item.name} className='flow-root'>
                                  <a
                                    href={item.href}
                                    className='-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100'
                                  >
                                    <item.icon
                                      className='h-6 w-6 flex-shrink-0 text-gray-400'
                                      aria-hidden='true'
                                    />
                                    <span className='ml-3'>{item.name}</span>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a
                  href='#'
                  className='text-base font-medium text-gray-500 hover:text-gray-900'
                >
                  Contact Us
                </a>
              </Popover.Group>
              <div className='flex items-center md:ml-12'>
                <a
                  href='#'
                  className='text-base font-medium text-gray-500 hover:text-gray-900'
                >
                  Sign in
                </a>

                <Button
                  className='ml-8 text-base font-medium text-white shadow-sm'
                  href='/register'
                  color='primary'
                >
                  <span>
                    Get started <span className='hidden lg:inline'>today</span>
                  </span>
                </Button>

                {/*<a*/}
                {/*  href='#'*/}
                {/*  className='ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'*/}
                {/*>*/}
                {/*  Get started today*/}
                {/*</a>*/}
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden'
          >
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6 sm:pb-8'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                      alt='Your Company'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
                      <span className='sr-only'>Close menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6 sm:mt-8'>
                  <nav>
                    <div className='grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4'>
                      {software.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50'
                        >
                          <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md text-white focus:bg-primary sm:h-12 sm:w-12'>
                            <item.icon className='h-6 w-6' aria-hidden='true' />
                          </div>
                          <div className='ml-4 text-base font-medium text-gray-900'>
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className='mt-8 text-base'>
                      <a
                        href='#'
                        className='font-medium text-primary text-green-500'
                      >
                        View all products
                        <span aria-hidden='true'> &rarr;</span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
              <div className='py-6 px-5'>
                <div className='grid grid-cols-2 gap-4'>
                  <a
                    href='#'
                    className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Pricing
                  </a>
                  <a
                    href='#'
                    className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Docs
                  </a>
                  <a
                    href='#'
                    className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Company
                  </a>
                  <a
                    href='#'
                    className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Resources
                  </a>
                  <a
                    href='#'
                    className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Blog
                  </a>
                  <a
                    href='#'
                    className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Contact Sales
                  </a>
                </div>
                <div className='mt-6'>
                  <a
                    href='#'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                  >
                    Sign up
                  </a>
                  <p className='mt-6 text-center text-base font-medium text-gray-500'>
                    Existing customer?{' '}
                    <a href='#' className='text-primary text-green-500'>
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
