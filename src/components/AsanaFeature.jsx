import { Container } from '@/components/Container'
import BlackDishSVG from '@/components/BlackDishSVG'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import ColorDishSVG from '@/components/ColorDishSVG'

const CurrentBuildingStack = styled.div`
  transition: opacity 0.8s ease-in-out;
  will-change: opacity;
  .title {
    transition: all 0.8s ease-in-out;
    will-change: all;
  }

  &.active {
    //transform: translate3d(0, -50%, 0);
    opacity: 1;

    .title {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`

const CompareStack = styled.div`
  transition: opacity 0.8s ease-in-out;
  will-change: opacity;

  .title {
    transition: all 0.8s ease-in-out;
    will-change: all;
  }

  &.active {
    opacity: 1;

    .title {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`

const ImproveStack = styled.div`
  transition: opacity 0.8s ease-in-out;
  will-change: auto;
  top: -20px;

  .title {
    transition: all 0.8s ease-in-out;
    will-change: all;
  }

  &.active {
    opacity: 1;

    .title {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`

const AssetReliabilityStack = styled.div`
  transition: opacity 0.8s ease-in-out;
  will-change: opacity;

  .title {
    transition: all 0.8s ease-in-out;
    will-change: all;
  }

  &.active {
    opacity: 1;

    .title {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`

export default function AsanaFeature() {
  const currentBuildingPerformanceBoxRef = useRef(null)
  const compareBoxRef = useRef(null)
  const improveBoxRef = useRef(null)
  const assetReliabilityBoxRef = useRef(null)

  const [activePerformanceStack, setActivePerformanceStack] = useState(false)
  const [activeCompareStack, setActiveCompareStack] = useState(false)
  const [activeImproveStack, setActiveImproveStack] = useState(false)
  const [activeAssetReliabilityStack, setActiveAssetReliabilityStack] =
    useState(false)

  //description scroll position
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < 400) {
        setActivePerformanceStack(true)
        setActiveCompareStack(false)
        setActiveImproveStack(false)
        setActiveAssetReliabilityStack(false)
      } else {
        setActivePerformanceStack(false)
      }
    },
    [],
    currentBuildingPerformanceBoxRef,
    false,
    300
  )

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < 400) {
        setActiveCompareStack(true)
        setActivePerformanceStack(false)
        setActiveImproveStack(false)
        setActiveAssetReliabilityStack(false)
      } else {
        setActiveCompareStack(false)
      }
    },
    [],
    compareBoxRef,
    false,
    300
  )

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < 400) {
        setActiveImproveStack(true)
        setActivePerformanceStack(false)
        setActiveCompareStack(false)
        setActiveAssetReliabilityStack(false)
      } else {
        setActiveImproveStack(false)
      }
    },
    [],
    improveBoxRef,
    false,
    300
  )

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < 400) {
        setActiveAssetReliabilityStack(true)
        setActiveImproveStack(false)
        setActivePerformanceStack(false)
        setActiveCompareStack(false)
      } else {
        setActiveAssetReliabilityStack(false)
      }
    },
    [],
    assetReliabilityBoxRef,
    false,
    300
  )

  return (
    <section
      id='features'
      aria-label='Features for running your books'
      //className="relative overflow-hidden bg-white  sm:py-32 h-[1601px]"
      className='pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32'
      //className="lg:grid lg:grid-cols-2 lg:gap-8"
    >
      <Container>
        <div className='cols-1 lg:grid lg:grid-cols-2 lg:gap-10'>
          <div>
            <div className='bg-neutral-100 px-8 pt-14 pb-[150px] lg:px-16'>
              <h2 className='font-display text-3xl font-bold leading-tight text-deep-dark'>
                How BEE helps with your building energy costs whilst supporting
                your ESG requirements
              </h2>

              <h3 className='mt-8 font-display text-2xl font-bold text-neutral-700'>
                Here’s how it all comes together
              </h3>

              <p className='mt-6 text-lg'>
                Using building information and sub-meter readings, track key
                energy and emission numbers to see which sub-systems have the
                largest impacts. Drill down to critical plant and equipment and
                see the factors that influence your building’s energy
                consumption. Track key building information to understand and
                make informed decisions.
              </p>
            </div>

            <div
              className='bg-neutral-100 px-8 pb-32 lg:px-16'
              ref={currentBuildingPerformanceBoxRef}
            >
              <h3 className='font-display text-xl font-bold leading-tight text-neutral-700'>
                Current Building Performance
              </h3>
              <p className='mt-8 text-lg'>
                Compare each building’s performance with similar ones in your
                portfolio, minimum legislative requirements and potential
                best-in-class. Understand the gaps and the best possible
                performance achievable. Look at individual spaces and identify
                where improvements can be made. Receive alerts when compliance
                requirements are not met.
              </p>
            </div>

            <div
              className='bg-neutral-100 px-8 pb-32 lg:px-16'
              ref={compareBoxRef}
            >
              <h3 className='font-display text-xl font-bold leading-tight text-neutral-700'>
                Compare Building Performance
              </h3>
              <p className='mt-8 text-lg'>
                Identify potential energy performance improvements achievable
                for each building along with key energy, emissions and financial
                metrics. Analyse multiple scenarios and optimise improvement
                measures to suit your business needs. Easily share reports so
                everyone can work with the same dataset.
              </p>
            </div>

            <div
              className='bg-neutral-100 px-8 pb-32 lg:px-16'
              ref={improveBoxRef}
            >
              <h3 className='font-display text-xl font-bold leading-tight text-neutral-700'>
                Improve Building Performance
              </h3>
              <p className='mt-8 text-lg'>
                Monitor the health of critical assets and receive alerts when
                potential issues are detected. Understand the factors affecting
                each equipment’s reliability to optimise your maintenance
                efforts. Analyse asset replacements to understand the energy
                savings and financial returns and determine the ones that meets
                your business priorities.
              </p>
            </div>

            <div
              className='bg-neutral-100 px-8 pb-52 lg:px-16'
              ref={assetReliabilityBoxRef}
            >
              <h3 className='font-display text-xl font-bold leading-tight text-neutral-700'>
                Asset Reliability
              </h3>
              <p className='mt-8 text-lg'>
                Initially when our Building Energy Estimator was created it was
                to quickly and easily enable you to get a quick overview of the
                current state of your building compared to current building
                regulations and what’s the best energy and CO2 performance you
                could get from your building.
              </p>
            </div>
          </div>
          <div className='hidden h-[100%] lg:block'>
            <div className='stack-layer relative sticky top-[120px] flex h-[230px] flex-col'>
              <CurrentBuildingStack
                className={
                  activePerformanceStack
                    ? 'active absolute z-50 h-full w-full opacity-100'
                    : 'absolute z-50 w-full gap-2 opacity-0'
                }
              >
                <iframe
                  src='https://www.lastingfootprint.io/iframe/improve-building-energy-performance'
                  className='h-[500px] w-full'
                />
              </CurrentBuildingStack>

              <CompareStack
                className={
                  activeCompareStack
                    ? 'active absolute z-50 h-full w-full opacity-100'
                    : 'absolute z-50 w-full gap-2 opacity-0'
                }
              >
                <iframe
                  src='https://www.lastingfootprint.io/iframe/improve-co2-emission-performance'
                  className='h-[500px] w-full'
                />
              </CompareStack>

              <ImproveStack
                className={
                  activeImproveStack
                    ? 'active absolute z-50 h-full w-full opacity-100'
                    : 'absolute z-50 w-full gap-2 opacity-0'
                }
              >
                <iframe
                  src='https://www.lastingfootprint.io/iframe/improve-subsystem-performance'
                  className='h-[630px] w-full'
                />
              </ImproveStack>

              <AssetReliabilityStack
                className={
                  activeAssetReliabilityStack
                    ? 'active absolute z-50 h-full w-full opacity-100'
                    : 'absolute z-50 w-full gap-2 opacity-0'
                }
              >
                <iframe
                  src='https://www.lastingfootprint.io/iframe/improve-payback'
                  className='h-[800px] w-full'
                />
              </AssetReliabilityStack>
            </div>
          </div>
        </div>

        {/*<Image*/}
        {/*  className="absolute object-cover "*/}
        {/*  src={backgroundImage}*/}
        {/*  alt=""*/}
        {/*/>*/}
      </Container>
    </section>
  )
}
