import React, { useState } from 'react'

const SectionPricing = () => {
  const [billingCycle, setBillingCycle] = useState('Mo')

  const pricingPlans = [
    {
      title: 'Free trial',
      price: { Mo: '$00', Yr: '$0' },
      description: 'For small teams – 5 users',
      features: ['Community support'],
      isHighlighted: false,
    },
    {
      title: 'Lite',
      price: { Mo: '$99', Yr: '$990' },
      description: 'For small teams – 15 users',
      features: ['Individual support', 'Individual data – 60GB'],
      isHighlighted: false,
    },
    {
      title: 'Basic',
      price: { Mo: '$00', Yr: '$0' },
      description: 'For big teams – 30 users',
      features: [
        'Individual support',
        'Individual data – 120GB',
        'Advanced permissions',
      ],
      isHighlighted: true,
    },
    {
      title: 'For enterprises',
      price: { Mo: 'Custom', Yr: 'Custom' },
      description: 'Unlimited team members',
      features: [
        'Individual support',
        'Unlimited data',
        'Advanced permissions',
        'Data history',
        'Audit log',
        'All functions included',
      ],
      isHighlighted: false,
    },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#212433] mb-8">
          Our pricing
        </h2>
        <div className="flex items-center justify-end mb-6">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setBillingCycle('Mo')}
              className={`px-4 py-1 rounded-full font-semibold transition-colors ${
                billingCycle === 'Mo'
                  ? 'bg-[#185CFF] text-white'
                  : 'text-gray-600'
              }`}
            >
              Mo
            </button>
            <button
              onClick={() => setBillingCycle('Yr')}
              className={`px-4 py-1 rounded-full font-semibold transition-colors ${
                billingCycle === 'Yr'
                  ? 'bg-[#185CFF] text-white'
                  : 'text-gray-600'
              }`}
            >
              Yr
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col h-full p-6 rounded-md transition-shadow ${
                plan.isHighlighted
                  ? 'bg-[#185CFF] text-white'
                  : 'border border-gray-200 text-[#212433]'
              }`}
            >
              <h3
                className={`text-xl font-bold mb-2 ${
                  plan.isHighlighted ? 'text-white' : 'text-[#212433]'
                }`}
              >
                {plan.title}
              </h3>
              <p
                className={`text-3xl font-bold mb-2 ${
                  plan.isHighlighted ? 'text-white' : 'text-[#212433]'
                }`}
              >
                {plan.price[billingCycle]}
              </p>
              <div className="flex space-x-2 mb-4">
                <span
                  className={`px-2 py-1 rounded-full border text-xs font-semibold ${
                    plan.isHighlighted
                      ? 'border-white text-white'
                      : 'border-gray-300 text-gray-600'
                  }`}
                >
                  Mo
                </span>
                <span
                  className={`px-2 py-1 rounded-full border text-xs font-semibold ${
                    plan.isHighlighted
                      ? 'border-white text-white'
                      : 'border-gray-300 text-gray-600'
                  }`}
                >
                  Yr
                </span>
              </div>
              <p
                className={`mb-4 ${
                  plan.isHighlighted ? 'text-white/80' : 'text-[#9497A1]'
                }`}
              >
                {plan.description}
              </p>
              <ul className="mb-4 space-y-1 flex-1">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`text-sm ${
                      plan.isHighlighted ? 'text-white' : 'text-[#212433]'
                    }`}
                  >
                    • {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto font-semibold px-4 py-2 rounded transition-colors ${
                  plan.isHighlighted
                    ? 'bg-white text-[#185CFF] hover:bg-gray-100'
                    : 'bg-[#185CFF] text-white hover:bg-[#3B7BFF]'
                }`}
              >
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionPricing
