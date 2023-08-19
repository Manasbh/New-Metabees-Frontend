import neptaverse8 from '../../assets/neptaverse8.jpg'

export default function Neptaverse() {
  return (
    <div className="container mx-auto">
      <div className="container mt-10 m-auto grid lg:grid-cols-2 gap-2">
        {/* Add an image and size it according to the div */}
        <img
          className="h-auto w-auto sm:mt-5"
          src={neptaverse8}
          alt="Neptaverse"
        />
        <div className="ml-2 flex flex-col mt-10 lg:mt-32">
          <h3 className="text-[#864bc9] max-sm:text-center text-2xl font-bold mb-5 neptaverse-heading">
            Neptaverse
          </h3>
          <p className="text-[#edd8f7] text-base">
            Harnessing the immense capability of virtual reality is the core
            purpose of our product. The Neptaverse brings brands to target
            audiences and larger demographics.
            <br />
            <br />
            Our subscribers can showcase their products in virtual worlds that
            will in turn be made available to their customers.
            <br />
            <br />
            Equipped with an oculus and a corresponding mobile device, one can
            access these worlds from the comfort of their home.
          </p>
        </div>
      </div>
    </div>
  )
}
