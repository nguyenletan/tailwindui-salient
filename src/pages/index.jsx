import Head from 'next/head'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { ThirdFeature } from '@/components/ThirdFeature'
import { Testimonials } from '@/components/Testimonials'
import { Solutions } from '@/components/Solutions'
import SecondFeature from '@/components/SecondFeature'
import { FirstFeatures } from '@/components/FirstFeature'
import { FirstBFeatures } from '@/components/FirstBFeature'
import { FirstCFeatures } from '@/components/FirstCFeature'
import { FirstDFeatures } from '@/components/FirstDFeature'
import { FirstEFeatures } from '@/components/FirstEFeature'
import { FirstFFeatures } from '@/components/FirstFFeature'
import Header2 from '@/components/Header2'
import AsanaFeature from '@/components/AsanaFeature'

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
      <Header2 />

      <main>
        <Hero />
        <FirstFeatures />
        <FirstBFeatures />
        <FirstCFeatures />
        <FirstDFeatures />
        <FirstEFeatures />
        <SecondFeature />
        <FirstFFeatures />
        <AsanaFeature/>
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
