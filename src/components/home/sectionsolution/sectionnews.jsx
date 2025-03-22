import React from 'react'
import { Row, Col } from 'antd'

const SectionNewsletter = () => {
  return (
    <section className="bg-[#002B4E] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/80 text-base md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
              accusantium doloremque laudantium.
            </p>
          </Col>
          <Col xs={24} md={12}>
            <div className="flex items-center bg-white/20 rounded-md overflow-hidden w-full max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-white placeholder-gray-200 bg-transparent outline-none"
              />
              <button className="bg-white text-[#0F2A43] px-6 py-2 font-semibold hover:opacity-90 transition-colors">
                Send
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default SectionNewsletter
