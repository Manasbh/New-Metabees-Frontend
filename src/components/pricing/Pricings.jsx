import { useNavigate } from 'react-router-dom'
import { subscriptions } from '../../utils/data'
import './Pricings.css'

function Pricings() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden py-10 mt-6">
      <p
        className="text-[#864bc9] text-center font-bold text-2xl pricing-heading"
        style={{ marginBottom: '4rem' }}
      >
        Pricing
      </p>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-evenly">
            <div className="w-full lg:-mr-2 lg:w-1/4">
              <div className="rounded-md lg:rounded-r-5xl mx-auto max-w-sm border border-[#6e25c0] hover:border-[#3950d1] bg-[#1a1a1a] pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6 max-sm:mt-20">
                <span className="mb-2 block text-sm font-semibold text-gray-400">
                  {subscriptions[0][0]}
                </span>
                <span className="flex items-end">
                  <span className="text-4xl font-extrabold leading-none text-white">
                    {subscriptions[0][1]}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    /month
                  </span>
                </span>
                <div className="mt-7 border-t border-[#6e25c0] pt-5 text-center">
                  <ul>
                    {subscriptions[0][2].map((feature) => (
                      <li className="mb-6 flex items-center" key={feature}>
                        <span className="ml-2 text-sm text-white">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="pricing-btn"
                    onClick={() => navigate('/waitlist')}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
              <div className="border border-[#6e25c0] hover:border-[#3950d1] pt-22 relative mx-auto max-w-sm rounded-lg bg-[#1a1a1a] px-10 pb-16 max-sm:mt-20">
                <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#6e25c0] p-1">
                  <div className="flex-shrink-0 rounded-full bg-black px-5 py-4 text-sm font-semibold uppercase text-white hover:c">
                    MOST POPULAR
                  </div>
                </div>
                <span className="mb-2 block pt-10 text-sm font-semibold text-[#FFD93D]">
                  {subscriptions[1][0]}
                </span>
                <span className="flex items-end text-white">
                  <span className="text-4xl font-extrabold leading-none">
                    {subscriptions[1][1]}
                  </span>
                  <span className="text-sm font-semibold">/month</span>
                </span>
                <div className="mt-7 border-t pt-5 text-center">
                  <ul className="mb-10">
                    {subscriptions[1][2].map((feature) => (
                      <li className="mb-6 flex items-center" key={feature}>
                        <span className="ml-2 text-sm text-white">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="pricing-btn"
                    onClick={() => navigate('/waitlist')}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:-mr-2 lg:w-1/4">
              <div className="rounded-md lg:rounded-r-5xl mx-auto max-w-sm border border-[#6e25c0] hover:border-[#3950d1] bg-[#1a1a1a] pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6 max-sm:mt-14">
                <span className="mb-2 block text-sm font-semibold text-gray-400">
                  {subscriptions[2][0]}
                </span>
                <span className="flex items-end">
                  <span className="text-4xl font-extrabold leading-none text-white">
                    {subscriptions[2][1]}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    /month
                  </span>
                </span>
                <div className="mt-7 border-t border-[#6e25c0] pt-5 text-center">
                  <ul className="mb-10">
                    {subscriptions[2][2].map((feature) => (
                      <li className="mb-6 flex items-center" key={feature}>
                        <span className="ml-2 text-sm text-white">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="pricing-btn"
                    onClick={() => navigate('/waitlist')}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricings
