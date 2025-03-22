import React, { useState } from 'react'
import { Row, Col, Card, Button } from 'antd'

const SectionPricing = () => {
  // สลับระหว่าง Monthly/Yearly
  const [billingCycle, setBillingCycle] = useState('Monthly')

  // ข้อมูลแพ็กเกจ (สามารถปรับเป็น Yearly ราคาลด/เพิ่มได้)
  const monthlyPlans = [
    {
      title: 'Starter',
      price: 'Free',
      description: 'Trial plan for starters',
      features: [
        'For small teams – 5 users',
        'Community support',
        'Individual data – 20GB',
      ],
    },
    {
      title: 'Professional',
      price: '$20 per editor/month',
      description: 'For users who want more',
      features: [
        'For small teams – 5 users',
        'Individual support',
        'Individual data – 60GB',
      ],
    },
    {
      title: 'Organization',
      price: '$50 per editor/month',
      description: 'The best solution for Pro',
      features: [
        'For big teams – unlimited',
        'Individual support',
        'Data history',
      ],
    },
  ]

  const yearlyPlans = [
    {
      title: 'Starter',
      price: 'Free',
      description: 'Trial plan for starters',
      features: [
        'For small teams – 5 users',
        'Community support',
        'Individual data – 20GB',
      ],
    },
    {
      title: 'Professional',
      price: '$200 per editor/year', // ตัวอย่างสมมุติ
      description: 'For users who want more',
      features: [
        'For small teams – 5 users',
        'Individual support',
        'Individual data – 60GB',
      ],
    },
    {
      title: 'Organization',
      price: '$500 per editor/year', // ตัวอย่างสมมุติ
      description: 'The best solution for Pro',
      features: [
        'For big teams – unlimited',
        'Individual support',
        'Data history',
      ],
    },
  ]

  // เลือก plans ตาม billingCycle
  const plans = billingCycle === 'Monthly' ? monthlyPlans : yearlyPlans

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#212433] mb-6">
          Our pricing
        </h2>

        {/* Toggle Monthly/Yearly */}
        <div className="flex justify-end mb-10">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setBillingCycle('Monthly')}
              className={`px-4 py-1 rounded-full font-semibold transition-colors ${
                billingCycle === 'Monthly'
                  ? 'bg-[#185CFF] text-white'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('Yearly')}
              className={`px-4 py-1 rounded-full font-semibold transition-colors ${
                billingCycle === 'Yearly'
                  ? 'bg-[#185CFF] text-white'
                  : 'text-gray-600'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards */}
        <Row gutter={[24, 24]}>
          {plans.map((plan) => (
            <Col xs={24} md={8} key={plan.title}>
              <Card className="hover:shadow-lg transition-shadow border rounded-md">
                <h3 className="text-xl font-bold text-[#212433] mb-2">
                  {plan.title}
                </h3>
                <p className="text-3xl font-bold text-[#212433] mb-2">
                  {plan.price}
                </p>
                <p className="text-[#9497A1] mb-4">{plan.description}</p>
                <ul className="mb-6 space-y-2 text-[#212433]">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      • <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  type="primary"
                  className="bg-[#185CFF] border-none w-full font-semibold hover:bg-[#3B7BFF]"
                >
                  Get started
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default SectionPricing
