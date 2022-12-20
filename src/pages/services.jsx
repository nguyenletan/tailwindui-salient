import Head from 'next/head'
import { Footer } from '@/components/Footer'
import Header from '@/components/Header'
import { Hero } from '@/components/Services/Hero'
import {
  BuildingConditionalAssessment
} from '@/components/Services/BuildingConditionalAssessment'
import { OperationOfThings } from '@/components/Services/OeprationOfThings'

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
      <Header />

      <main>
        <Hero />
        <BuildingConditionalAssessment/>
        <OperationOfThings/>
      </main>
      <Footer />
    </>
  )
}
