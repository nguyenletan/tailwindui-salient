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
import { FirstFeatures } from '@/components/FirstFeatrue'

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
        <FirstFeatures />
        <SecondFeature />
        <Solutions />
        <PrimaryFeatures />
        <ThirdFeature />

        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
