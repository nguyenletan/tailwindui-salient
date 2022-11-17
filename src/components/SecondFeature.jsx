import { Container } from '@/components/Container'
import BlackDishSVG from '@/components/BlackDishSVG'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import ColorDishSVG from '@/components/ColorDishSVG'

const CurrentBuildingStack = styled.div`
  transition: transform 0.8s ease-in-out;
  transform: translate3d(0, 40%, 0);
  will-change: transform;
  .title {
    transition: all 0.8s ease-in-out;
    will-change: all;
  }

  &.active {
    transform: translate3d(0, -50%, 0);

    .title {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`

const CompareStack = styled.div`
  transition: transform 0.8s ease-in-out;
  transform: translate3d(0, 49%, 0);
  will-change: transform;

  .title {
    transition: all 0.8s ease-in-out;
    will-change: all;
  }

  &.active {
    transform: translate3d(0, -20%, 0);

    .title {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`

const ImproveStack = styled.div`
  transition: transform 0.8s ease-in-out;
  transform: translate3d(0, 58%, 0);
  will-change: transform;

  .title {
    transition: all 0.8s ease-in-out;
    will-change: all;
  }

  &.active {
    transform: translate3d(0, 10%, 0);

    .title {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`

const AssetReliabilityStack = styled.div`
  transition: transform 0.8s ease-in-out;
  transform: translate3d(0, 67%, 0);
  will-change: transform;

  .title {
    transition: all 0.8s ease-in-out;
    will-change: all;
  }

  &.active {
    transform: translate3d(0, 40%, 0);

    .title {
      font-weight: bold;
      font-size: 1.1rem;
    }
  }
`

export default function SecondFeature() {
  const currentBuildingPerformanceBoxRef = useRef(null)
  const compareBoxRef = useRef(null)
  const improveBoxRef = useRef(null)
  const assetReliabilityBoxRef = useRef(null)

  const [activePerformanceStack, setActivePerformanceStack] = useState(false)
  const [activeCompareStack, setActiveCompareStack] = useState(false)
  const [activeImproveStack, setActiveImproveStack] = useState(false)
  const [activeAssetReliabilityStack, setActiveAssetReliabilityStack] =
    useState(false)

  // description scroll position
  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < 400) {
        setActivePerformanceStack(true)
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
        <div className='lg:grid lg:grid-cols-2 lg:gap-10'>
          <div>
            <div className='bg-neutral-100 px-16 pt-14 pb-[150px]'>
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
              className='bg-neutral-100 px-16 pb-32'
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

            <div className='bg-neutral-100 px-16 pb-32' ref={compareBoxRef}>
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

            <div className='bg-neutral-100 px-16 pb-32' ref={improveBoxRef}>
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
              className='bg-neutral-100 px-16 pb-52'
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
          <div className='mt-[7%] h-[90%] self-center px-4'>
            <div className='stack-layer relative sticky top-[250px] flex h-[230px] flex-col'>
              <CurrentBuildingStack
                className={
                  activePerformanceStack
                    ? 'active absolute z-50 grid w-full grid-cols-2 items-center gap-2 opacity-100'
                    : 'absolute z-50 grid w-full grid-cols-2 items-center gap-2 opacity-100'
                }
              >
                <div className='stack-label'>
                  <p className='text-h-200 title border-t-2 border-t-gray-200 pb-2 text-sm leading-tight'>
                    Current Building Performance
                  </p>
                </div>
                <ColorDishSVG color='#87972fde' />
              </CurrentBuildingStack>

              <CompareStack
                className={
                  activeCompareStack
                    ? 'active absolute z-40 grid w-full grid-cols-2 items-center gap-2'
                    : 'absolute z-40 grid w-full grid-cols-2 items-center gap-2'
                }
              >
                <div className='stack-label'>
                  <p className='text-h-200 title border-t-2 border-t-gray-200 pb-2 text-sm leading-tight'>
                    Compare Building Performance
                  </p>
                </div>
                <ColorDishSVG color='#BF4E03de' />
              </CompareStack>

              <ImproveStack
                className={
                  activeImproveStack
                    ? 'active absolute z-30 grid w-full grid-cols-2 items-center gap-2'
                    : 'absolute z-30 grid w-full grid-cols-2 items-center gap-2'
                }
              >
                <div className='stack-label'>
                  <p className='text-h-200 title border-t-2 border-t-gray-200 text-sm leading-tight'>
                    Improve Building Performance
                  </p>
                </div>
                <ColorDishSVG color='#3f3cbbde' />
              </ImproveStack>

              <AssetReliabilityStack
                className={
                  activeAssetReliabilityStack
                    ? 'active absolutez-20 grid w-full grid-cols-2 items-center gap-2'
                    : 'absolute z-20 grid w-full grid-cols-2 items-center gap-2'
                }
              >
                <div className='stack-label'>
                  <p className='text-h-200 title border-t-2 border-t-gray-200 text-sm leading-tight'>
                    Asset Reliability
                  </p>
                </div>
                <div className='stack-layer-end'>
                  {/*<BlackDishSVG/>*/}
                  <ColorDishSVG color='#2E424D' />
                </div>
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
