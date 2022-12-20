import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'

import SecondFeature from '@/components/SecondFeature'
import { Run247Feature } from '@/components/Run247Feature'
import { EnergyConsumptionFeature } from '@/components/EnergyConsumptionFeature'
import { ESGRequirementsFeature } from '@/components/ESGRequirementsFeature'

import { FirstFFeatures } from '@/components/FirstFFeature'
import Header from '@/components/Header'

import { VideoContent } from '@/components/VideoContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Last footprint - Enterprise Software for Commercial Real Estate
        </title>
        <meta
          name='description'
          content='Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.'
        />
      </Head>
      <Header />

      <main>
        <Hero />
        <Run247Feature />
        <EnergyConsumptionFeature />
        <ESGRequirementsFeature />
        {/*<FirstDFeatures />*/}
        {/*<FirstEFeatures />*/}
        <VideoContent/>
        <SecondFeature />
        <FirstFFeatures />
        {/*<AsanaFeature />*/}
        {/*<Solutions />*/}
        {/*<PrimaryFeatures />*/}
        {/*<ThirdFeature />*/}

        {/*<CallToAction />*/}
        {/*<Testimonials />*/}
        {/*<Pricing />*/}
        {/*<Faqs />*/}
      </main>
      <Footer />
    </>
  )
}
