import { Container } from '@/components/Container'
import LayerStructure from '@/components/LayerStructure'

export default function SecondFeature() {
  return (
    <>
      <section
        id='features'
        aria-label='Features for running your books'
        //className="relative overflow-hidden bg-white  sm:py-32 h-[1601px]"
        className='pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32'
        //className="lg:grid lg:grid-cols-2 lg:gap-8"
      >
        <Container>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='bg-neutral-100 pt-14 px-16 pb-[100px]'>
              <h2 className='font-display text-3xl font-bold leading-tight text-deep-dark'>
                How BEE helps with your building energy costs whilst supporting
                your ESG requirements
              </h2>

              <h3 className='mt-8 font-display text-2xl font-bold text-neutral-700'>
                Here’s how it all comes together
              </h3>

              <p className='mt-6'>
                Initially when our Building Energy Estimator was created it was
                to quickly and easily enable you to get a quick overview of the
                current state of your building compared to current building
                regulations and what’s the best energy and CO2 performance you
                could get from your building.
              </p>
            </div>
          </div>

          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='bg-neutral-100 pb-6 px-16'>
              <h3 className='font-display text-xl font-bold leading-tight text-neutral-700'>
                Current Building Performance
              </h3>
              <p className='mt-2'>
                Initially when our Building Energy Estimator was created it was
                to quickly and easily enable you to get a quick overview of the
                current state of your building compared to current building
                regulations and what’s the best energy and CO2 performance you
                could get from your building.
              </p>
            </div>
            <LayerStructure text='Current Building Performance' />
          </div>

          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='bg-neutral-100 pb-6 px-16'>
              <h3 className='font-display text-xl font-bold leading-tight text-neutral-700'>
                Compare Building Performance
              </h3>
              <p className='mt-2'>
                Initially when our Building Energy Estimator was created it was
                to quickly and easily enable you to get a quick overview of the
                current state of your building compared to current building
                regulations and what’s the best energy and CO2 performance you
                could get from your building.
              </p>
            </div>
            <LayerStructure text='Compare' />
          </div>

          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='bg-neutral-100 pb-6 px-16'>
              <h3 className='font-display text-xl font-bold leading-tight text-neutral-700'>
                Improve Building Performance
              </h3>
              <p className='mt-2'>
                Initially when our Building Energy Estimator was created it was
                to quickly and easily enable you to get a quick overview of the
                current state of your building compared to current building
                regulations and what’s the best energy and CO2 performance you
                could get from your building.
              </p>
            </div>
            <LayerStructure text='Improve' />
          </div>

          <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='bg-neutral-100 pb-16 px-16'>
              <h3 className='font-display text-xl font-bold leading-tight text-neutral-700'>
                Asset Reliability
              </h3>
              <p className='mt-2'>
                Initially when our Building Energy Estimator was created it was
                to quickly and easily enable you to get a quick overview of the
                current state of your building compared to current building
                regulations and what’s the best energy and CO2 performance you
                could get from your building.
              </p>
            </div>
            <LayerStructure text='Asset Reliability' />
          </div>

          {/*<Image*/}
          {/*  className="absolute object-cover "*/}
          {/*  src={backgroundImage}*/}
          {/*  alt=""*/}
          {/*/>*/}
        </Container>
      </section>
    </>
  )
}
