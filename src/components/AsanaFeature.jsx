import { Container } from '@/components/Container'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import asana01 from '@/images/asana01.webp'
import Image from 'next/image'

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
            <div
              className='bg-neutral-100 px-8 pb-64 pt-16 lg:px-16'
              ref={currentBuildingPerformanceBoxRef}
            >
              <h3 className='font-display text-xl font-bold leading-tight text-neutral-700'>
                Current Building Performance
              </h3>
              <p className='mt-8 text-lg'>
                The animation aims to show users that through our software, they
                are able to track their building’s energy use. They can track
                the efficiency down to each critical equipment. Performance gaps
                are analysed and improvement measures generated, allowing users
                to decide how the best way to improve their energy performance.
              </p>
              <p className='mt-8 text-lg'>
                The animation starts with the energy usage bar chart showing
                that the energy use is actively monitored.
              </p>
            </div>

            <div
              className='bg-neutral-100 px-8 pb-64 lg:px-16'
              ref={compareBoxRef}
            >
              <p className='text-lg'>
                A single bar for 1 month changes into the donut chart showing
                the potential for drilling down into each critical equipment
              </p>
            </div>

            <div
              className='bg-neutral-100 px-8 pb-32 lg:px-16'
              ref={improveBoxRef}
            >
              <p className='text-lg'>
                The part for the cooling subsystem is moved into the compare chart to show how it’s performing now.
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
                <Image src={asana01} alt=""/>
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
