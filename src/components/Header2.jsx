import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'

import {
  ArrowUturnUpIcon,
  Bars3Icon,
  BookmarkSlashIcon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CircleStackIcon,
  DocumentMinusIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  HeartIcon,
  InboxStackIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  Squares2X2Icon,
  UserGroupIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  RectangleStackIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PuzzlePieceIcon,
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
  CloudArrowUpIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  XMarkIcon,
  Square3Stack3DIcon,
  XCircleIcon,
  CurrencyDollarIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/solid'

import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'

const whyBEE = [
  {
    name: 'Overview',
    description:
      'The building performance is based on the current state of your building and how it reacts to the environment.',
    subDescription: 'Seeing and managing in real time your buildings energy consumption and emissions',
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
    name: 'For Transparency',
    description:
      'Have a clear understanding of your energy consumption about where  and what is being used to be able to make informed choices for energy procurement.',
    subDescription: 'Seeing and managing in real time your buildings energy consumption and emissions',
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
    name: 'For Forecasting',
    description:
      'Forecasting your future energy usage with and without improvements have been implemented. ',
    subDescription: 'Seeing and managing in real time your buildings energy consumption and emissions',
    href: '#',
    icon: ArrowTrendingUpIcon,
    subItems: [
      {
        title: 'Annual Energy Savings',
        icon: BarsArrowDownIcon,
        href: '#',
      },
      {
        title: 'CO2 Emissions improvements',
        icon: BarsArrowUpIcon,
        href: '#',
      },
      {
        title: 'Annual energy cost savings',
        icon: XMarkIcon,
        href: '#',
      },
      {
        title: 'Energy savings breakdown',
        icon: Square3Stack3DIcon,
        href: '#',
      },
      {
        title: 'Annual CO2 emissions avoided',
        icon: XCircleIcon,
        href: '#',
      },
      {
        title: 'Cost savings breakdown',
        icon: CurrencyDollarIcon,
        href: '#',
      },
      {
        title: 'Investment cost and payback',
        icon: BanknotesIcon,
        href: '#',
      },
      {
        title: 'CO2 Emissions breakdown',
        icon: PuzzlePieceIcon,
        href: '#',
      },
      {
        title: 'Energy usage intensity reduction',
        icon: ScaleIcon,
        href: '#',
      },
      {
        title: 'Breakdown of improvements',
        icon: RectangleStackIcon,
        href: '#',
      },
      {
        title: 'Building energy improvements',
        icon: ArrowTrendingUpIcon,
        href: '#',
      },
      {
        title: 'Improvement measures',
        icon: ArrowUturnUpIcon,
        href: '#',
      },
    ],
  },
  {
    name: 'For Compliance',
    description:
      'Ensure all  your buildings meet the current and future regulatory requirements for energy consumption and CO2 emissions.',
    subDescription: 'Seeing and managing in real time your buildings energy consumption and emissions',
    href: '#',
    icon: Squares2X2Icon,
    subItems: [
      {
        title: 'Asset health',
        icon: HeartIcon,
        href: '#',
      },
      {
        title: 'Annual energy consumption ',
        icon: BoltIcon,
        href: '#',
      },
      {
        title: 'Potential issues and risks',
        icon: ExclamationTriangleIcon,
        href: '#',
      },
      {
        title: 'Parts and reliability',
        icon: CircleStackIcon,
        href: '#',
      },
      {
        title: 'Sub-system health',
        icon: InboxStackIcon,
        href: '#',
      },
      {
        title: 'Depreciation',
        icon: DocumentMinusIcon,
        href: '#',
      },
      {
        title: 'Potential Issues',
        icon: ExclamationCircleIcon,
        href: '#',
      },
      {
        title: 'Asset parts and services',
        icon: WrenchIcon,
        href: '#',
      },
      {
        title: 'Potential Faults',
        icon: ShieldExclamationIcon,
        href: '#',
      },
      {
        title: 'Alerts',
        icon: BookmarkSlashIcon,
        href: '#',
      },
      {
        title: 'Maintenance budget by sub-system',
        icon: CurrencyDollarIcon,
        href: '#',
      },
      {
        title: 'Maintenance & sensor logs',
        icon: WrenchScrewdriverIcon,
        href: '#',
      },
    ],
  },
  {
    name: 'For Efficiency',
    description:
      'Ensure all  your building’s critical plant and equipment are fully optimised and operating efficiently.',
    href: '#',
    icon: Square3Stack3DIcon,
    subItems: [
      {
        title: 'Asset health',
        icon: HeartIcon,
        href: '#',
      },
      {
        title: 'Annual energy consumption ',
        icon: BoltIcon,
        href: '#',
      },
      {
        title: 'Potential issues and risks',
        icon: ExclamationTriangleIcon,
        href: '#',
      },
      {
        title: 'Parts and reliability',
        icon: CircleStackIcon,
        href: '#',
      },
      {
        title: 'Sub-system health',
        icon: InboxStackIcon,
        href: '#',
      },
      {
        title: 'Depreciation',
        icon: DocumentMinusIcon,
        href: '#',
      },
      {
        title: 'Potential Issues',
        icon: ExclamationCircleIcon,
        href: '#',
      },
      {
        title: 'Asset parts and services',
        icon: WrenchIcon,
        href: '#',
      },
      {
        title: 'Potential Faults',
        icon: ShieldExclamationIcon,
        href: '#',
      },
      {
        title: 'Alerts',
        icon: BookmarkSlashIcon,
        href: '#',
      },
      {
        title: 'Maintenance budget by sub-system',
        icon: CurrencyDollarIcon,
        href: '#',
      },
      {
        title: 'Maintenance & sensor logs',
        icon: WrenchScrewdriverIcon,
        href: '#',
      },
    ],
  },
  {
    name: 'For Informed Choice',
    description:
      'Ensure clarity and focus  on current and future needs for your building portfolio based on your business needs.',
    subDescription: 'Seeing and managing in real time your buildings energy consumption and emissions',
    href: '#',
    icon: InformationCircleIcon,
    subItems: [
      {
        title: 'Asset health',
        icon: HeartIcon,
        href: '#',
      },
      {
        title: 'Annual energy consumption ',
        icon: BoltIcon,
        href: '#',
      },
      {
        title: 'Potential issues and risks',
        icon: ExclamationTriangleIcon,
        href: '#',
      },
      {
        title: 'Parts and reliability',
        icon: CircleStackIcon,
        href: '#',
      },
      {
        title: 'Sub-system health',
        icon: InboxStackIcon,
        href: '#',
      },
      {
        title: 'Depreciation',
        icon: DocumentMinusIcon,
        href: '#',
      },
      {
        title: 'Potential Issues',
        icon: ExclamationCircleIcon,
        href: '#',
      },
      {
        title: 'Asset parts and services',
        icon: WrenchIcon,
        href: '#',
      },
      {
        title: 'Potential Faults',
        icon: ShieldExclamationIcon,
        href: '#',
      },
      {
        title: 'Alerts',
        icon: BookmarkSlashIcon,
        href: '#',
      },
      {
        title: 'Maintenance budget by sub-system',
        icon: CurrencyDollarIcon,
        href: '#',
      },
      {
        title: 'Maintenance & sensor logs',
        icon: WrenchScrewdriverIcon,
        href: '#',
      },
    ],
  },
]

const features = [
  {
    name: 'Current Performance ',
    description:
      'Get your to know the performance of your building portfolio in relation to the local regulatory and environmental conditions.',
    subDescription: 'Manage every aspect of your infrastructure real estate from accounting and operations to sustainability and energy consumption: ',
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
      'Compare the current state of your buildings against the regulatory standards as well as the best in class for your building type.',
    subDescription: 'Manage every aspect of your infrastructure real estate from accounting and operations to sustainability and energy consumption: ',
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
      'Identify and address the gaps with the best improvement measures  for your buildings and to your business needs.',
    subDescription: 'Manage every aspect of your infrastructure real estate from accounting and operations to sustainability and energy consumption: ',
    href: '#',
    icon: ArrowTrendingUpIcon,
    subItems: [
      {
        title: 'Annual Energy Savings',
        icon: BarsArrowDownIcon,
        href: '#',
      },
      {
        title: 'CO2 Emissions improvements',
        icon: BarsArrowUpIcon,
        href: '#',
      },
      {
        title: 'Annual energy cost savings',
        icon: XMarkIcon,
        href: '#',
      },
      {
        title: 'Energy savings breakdown',
        icon: Square3Stack3DIcon,
        href: '#',
      },
      {
        title: 'Annual CO2 emissions avoided',
        icon: XCircleIcon,
        href: '#',
      },
      {
        title: 'Cost savings breakdown',
        icon: CurrencyDollarIcon,
        href: '#',
      },
      {
        title: 'Investment cost and payback',
        icon: BanknotesIcon,
        href: '#',
      },
      {
        title: 'CO2 Emissions breakdown',
        icon: PuzzlePieceIcon,
        href: '#',
      },
      {
        title: 'Energy usage intensity reduction',
        icon: ScaleIcon,
        href: '#',
      },
      {
        title: 'Breakdown of improvements',
        icon: RectangleStackIcon,
        href: '#',
      },
      {
        title: 'Building energy improvements',
        icon: ArrowTrendingUpIcon,
        href: '#',
      },
      {
        title: 'Improvement measures',
        icon: ArrowUturnUpIcon,
        href: '#',
      },
    ],
  },
  {
    name: 'Asset Reliability',
    description:
      'Identify your assets health across your building portfolio to know where best to focus your time and effort.',
    subDescription: 'Manage every aspect of your infrastructure real estate from accounting and operations to sustainability and energy consumption: ',
    href: '#',
    icon: Squares2X2Icon,
    subItems: [
      {
        title: 'Asset health',
        icon: HeartIcon,
        href: '#',
      },
      {
        title: 'Annual energy consumption ',
        icon: BoltIcon,
        href: '#',
      },
      {
        title: 'Potential issues and risks',
        icon: ExclamationTriangleIcon,
        href: '#',
      },
      {
        title: 'Parts and reliability',
        icon: CircleStackIcon,
        href: '#',
      },
      {
        title: 'Sub-system health',
        icon: InboxStackIcon,
        href: '#',
      },
      {
        title: 'Depreciation',
        icon: DocumentMinusIcon,
        href: '#',
      },
      {
        title: 'Potential Issues',
        icon: ExclamationCircleIcon,
        href: '#',
      },
      {
        title: 'Asset parts and services',
        icon: WrenchIcon,
        href: '#',
      },
      {
        title: 'Potential Faults',
        icon: ShieldExclamationIcon,
        href: '#',
      },
      {
        title: 'Alerts',
        icon: BookmarkSlashIcon,
        href: '#',
      },
      {
        title: 'Maintenance budget by sub-system',
        icon: CurrencyDollarIcon,
        href: '#',
      },
      {
        title: 'Maintenance & sensor logs',
        icon: WrenchScrewdriverIcon,
        href: '#',
      },
    ],
  },
]

const services = [
  {
    name: 'Consultancy',
    description:
      'Our expertise goes beyond software we work with you to find the most suitable solution that works best for your building’s operation and business objectives.',
    href: '#',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Building Condition Assessment',
    description:
      'Get visibility on the energy performance of all your buildings at the system and subsystem level and develop an energy savings plan that is sustainable and meets your organisation’s ESG objectives.',
    href: '#',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Building Plant and Equipment Audit',
    description:
      'Understanding the current state of your facility’s plant and equipment helps with the rolling out your building maintenance strategies.',
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Software Service Consulting',
    description:
      'Provide the integration of your building and critical plant and equipment data and APIs of your building’s and existing BMS, BEMS, IWMS and Billing and Consumption information onto one easy to use solution.',
    href: '#',
    icon: ComputerDesktopIcon,
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
          <div className='mx-auto flex max-w-8xl items-center justify-between py-5 pr-4 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:pr-8'>
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
                          'group inline-flex items-center border-b-4 border-transparent bg-white text-base font-medium hover:border-primary focus:border-primary focus:outline-none'
                        )}
                      >
                        <span className='font-display text-lg'>Why BEE</span>
                        {!open ? (
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden='true'
                          />
                        ) : (
                          <ChevronUpIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden='true'
                          />
                        )}
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-800'
                        enterFrom='opacity-0 -translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-400'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 -translate-y-1'
                      >
                        <Popover.Panel className='absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block'>
                          <div className='grid h-[86vh] grid-cols-3 gap-8 overflow-auto'>
                            <div className='mx-auto flex max-w-7xl flex-col gap-8 overflow-auto bg-stone-50 px-4 py-4 pb-8 sm:px-6 sm:py-4 lg:px-8 lg:py-6 xl:py-8'>
                              <h3 className="font-display text-md text-primary font-bold uppercase">Why BEE?</h3>

                              {whyBEE.map((item, index) => (
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
                            <div className='col-span-2 max-w-7xl overflow-auto px-4 py-4 pb-8 sm:px-6 sm:py-4 lg:px-8 lg:py-6 xl:py-8'>
                              <p className='pb-8 font-display text-lg'>
                                {whyBEE[softwareSelectedItem].subDescription}
                              </p>
                              <ul className='grid grid-cols-2 gap-x-6 gap-y-8 2xl:grid-cols-3'>
                                {whyBEE[softwareSelectedItem].subItems?.map(
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
                          'group inline-flex items-center border-b-4 border-transparent bg-white text-base font-medium hover:border-primary focus:border-primary focus:outline-none'
                        )}
                      >
                        <span className='font-display text-lg'>Features</span>
                        {!open ? (
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden='true'
                          />
                        ) : (
                          <ChevronUpIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden='true'
                          />
                        )}
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-800'
                        enterFrom='opacity-0 -translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-400'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 -translate-y-1'
                      >
                        <Popover.Panel className='absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block'>
                          <div className='grid h-[86vh] grid-cols-3 gap-8 overflow-auto'>
                            <div className='mx-auto flex max-w-7xl flex-col gap-8 overflow-auto bg-stone-50 px-4 py-4 pb-8 sm:px-6 sm:py-4 lg:px-8 lg:py-6 xl:py-8'>
                              <h3 className="font-display text-md text-primary font-bold uppercase">Features</h3>

                              {features.map((item, index) => (
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
                            <div className='col-span-2 max-w-7xl overflow-auto px-4 py-4 pb-8 sm:px-6 sm:py-4 lg:px-8 lg:py-6 xl:py-8'>
                              <p className='pb-8 font-display text-lg'>
                                {features[softwareSelectedItem].subDescription}
                              </p>
                              <ul className='grid grid-cols-2 gap-x-6 gap-y-8 2xl:grid-cols-3'>
                                {features[softwareSelectedItem].subItems?.map(
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
                          'group inline-flex items-center border-0 border-white border-b-4 bg-white text-base font-medium hover:border-primary focus:border-primary focus:outline-none'
                        )}
                      >
                        <span className='font-display text-lg'>Services</span>
                        {!open ? (
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden='true'
                          />
                        ) : (
                          <ChevronUpIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden='true'
                          />
                        )}
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
                <Link
                  href='/contact-us'
                  className='font-display text-lg font-medium border-b-4 border-transparent hover:border-primary focus:border-primary'
                >
                  Contact Us
                </Link>
              </Popover.Group>
              <div className='flex items-center md:ml-12'>
                <Button
                  className='ml-8 text-base font-medium text-white shadow-sm'
                  href='/contact-us'
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
                      {whyBEE.map((item) => (
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
