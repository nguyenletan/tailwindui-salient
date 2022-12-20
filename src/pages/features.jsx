import Head from 'next/head'
import { Footer } from '@/components/Footer'
import Header2 from '@/components/Header2'
import { HeroForFeatures } from '@/components/Features/HeroForFeatures'
import { NotJustAnotherFeature } from '@/components/Features/NotJustAnotherFeature'
import { BuildingPeformace } from '@/components/Features/BuildingPeformace'
import { Compare } from '@/components/Features/Compare'
import { Improve } from '@/components/Features/Improve'
import { AssetReliability } from '@/components/Features/AsserReliability'

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
        <Compare />
        <Improve />
        <AssetReliability />
      </main>
      <Footer />
    </>
  )
}
