import Image from 'next/future/image'
import backgroundImage from '@/images/advance.webp'

const FourthFeatures = () => {
  return (
    <>
      <section
        id="features"
        aria-label="Features for running your books"
        className="relative overflow-hidden bg-white  sm:py-32 h-[1601px]"
      >
        <Image
          className="absolute object-cover "
          src={backgroundImage}
          alt=""
          width={1601}
          height={1404}
        />
      </section>
    </>
  )
}

export default FourthFeatures
