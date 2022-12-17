import Head from 'next/head'
import { Footer } from '@/components/Footer'
import Header2 from '@/components/Header2'
import { HeroForSubPage } from '@/components/HeroForSubPage'
import { Overview } from '@/components/why-bee/Overview'
import { Transparent } from '@/components/why-bee/Transparent'
import { Forcasting } from '@/components/why-bee/Forcasting'
import { Compliance } from '@/components/why-bee/Compliance'
import { Effiency } from '@/components/why-bee/Effiency'
import { InformacedChoice } from '@/components/why-bee/InformacedChoice'
import { HeroForFeatures } from '@/components/Features/HeroForFeatures'
import {
  NotJustAnotherFeature
} from '@/components/Features/NotJustAnotherFeature'
import { BuildingPeformace } from '@/components/Features/BuildingPeformace'

export default function Features() {
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
        <HeroForFeatures />
        <NotJustAnotherFeature />
        <BuildingPeformace />

      </main>
      <Footer />
    </>
  )
}
