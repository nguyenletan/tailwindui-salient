import { Container } from '@/components/Container'
import DishSVG from '@/components/DishSVG'
import DarkGrayDishSVG from '@/components/DarkGrayDishSVG'
import BlackDishSVG from '@/components/BlackDishSVG'

export default function SecondFeature () {
  return (
    <>
      <section
        id="features"
        aria-label="Features for running your books"
        //className="relative overflow-hidden bg-white  sm:py-32 h-[1601px]"
        className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
        //className="lg:grid lg:grid-cols-2 lg:gap-8"
      >
        <Container>
          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="bg-neutral-100 px-16 pt-14 pb-[100px]">
                <h2 className="font-display text-3xl font-bold leading-tight text-deep-dark">
                  How BEE helps with your building energy costs whilst supporting
                  your ESG requirements
                </h2>

                <h3 className="mt-8 font-display text-2xl font-bold text-neutral-700">
                  Here’s how it all comes together
                </h3>

                <p className="mt-6">
                  Initially when our Building Energy Estimator was created it was
                  to quickly and easily enable you to get a quick overview of the
                  current state of your building compared to current building
                  regulations and what’s the best energy and CO2 performance you
                  could get from your building.
                </p>
              </div>

              <div className="bg-neutral-100 px-16 pb-8">
                <h3 className="font-display text-xl font-bold leading-tight text-neutral-700">
                  Current Building Performance
                </h3>
                <p className="mt-4">
                  Initially when our Building Energy Estimator was created it was
                  to quickly and easily enable you to get a quick overview of the
                  current state of your building compared to current building
                  regulations and what’s the best energy and CO2 performance you
                  could get from your building.
                </p>
              </div>

              <div className="bg-neutral-100 px-16 pb-8">
                <h3 className="font-display text-xl font-bold leading-tight text-neutral-700">
                  Compare Building Performance
                </h3>
                <p className="mt-3">
                  Initially when our Building Energy Estimator was created it was
                  to quickly and easily enable you to get a quick overview of the
                  current state of your building compared to current building
                  regulations and what’s the best energy and CO2 performance you
                  could get from your building.
                </p>
              </div>

              <div className="bg-neutral-100 px-16 pb-8">
                <h3 className="font-display text-xl font-bold leading-tight text-neutral-700">
                  Improve Building Performance
                </h3>
                <p className="mt-3">
                  Initially when our Building Energy Estimator was created it was
                  to quickly and easily enable you to get a quick overview of the
                  current state of your building compared to current building
                  regulations and what’s the best energy and CO2 performance you
                  could get from your building.
                </p>
              </div>

              <div className="bg-neutral-100 px-16 pb-16">
                <h3 className="font-display text-xl font-bold leading-tight text-neutral-700">
                  Asset Reliability
                </h3>
                <p className="mt-3">
                  Initially when our Building Energy Estimator was created it was
                  to quickly and easily enable you to get a quick overview of the
                  current state of your building compared to current building
                  regulations and what’s the best energy and CO2 performance you
                  could get from your building.
                </p>
              </div>
            </div>
            <div className="h-[79%]">
              <div className="flex flex-col relative stack-layer h-[230px] sticky top-[80px]">
                <div className="w-full grid grid-cols-2 items-center gap-2 z-50 opacity-100 absolute -translate-y-[0%]">
                  <div className="stack-label">
                    <p className="text-h-200 border-t-2 border-t-gray-200">
                      Current Building Performance
                    </p>
                  </div>
                  <DishSVG/>
                </div>
                <div className="w-full grid grid-cols-2 items-center gap-2 absolute z-40 top-[33%]">
                  <div className="stack-label">
                    <p className="text-h-200 border-t-2 border-t-gray-200">
                      Compare
                    </p>
                  </div>
                  <DarkGrayDishSVG/>
                </div>
                <div className="w-full grid grid-cols-2 items-center gap-2 absolute z-30 top-[51%]">
                  <div className="stack-label">
                    <p className="text-h-200 border-t-2 border-t-gray-200">
                      Improve
                    </p>
                  </div>
                  <DarkGrayDishSVG/>
                </div>
                <div className="w-full grid grid-cols-2 items-center gap-2 absolute z-20 top-[90%]">
                  <div className="stack-label">
                    <p className="text-h-200 border-t-2 border-t-gray-200">
                      Asset Reliability
                    </p>
                  </div>
                  <div className="stack-layer-end">
                    <BlackDishSVG/>
                  </div>
                </div>
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
    </>
  )
}
