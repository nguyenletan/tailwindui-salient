import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'

import SecondFeature from '@/components/SecondFeature'
import { MakeDecisionsBasedOnRealData } from '@/components/MakeDecisionsBasedOnRealData'
import { EnergyConsumptionFeature } from '@/components/EnergyConsumptionFeature'
import { ESGRequirementsFeature } from '@/components/ESGRequirementsFeature'
import { AverageGermanWholeSaleElectricity } from '@/components/AverageGermanWholeSaleElectricity'
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
        <MakeDecisionsBasedOnRealData />
        <EnergyConsumptionFeature />
        <ESGRequirementsFeature />
        <VideoContent />
        <SecondFeature />
        <AverageGermanWholeSaleElectricity />
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
