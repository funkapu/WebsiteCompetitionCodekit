import React from 'react'
import { Row, Col } from 'antd'

const Section8 = () => {
  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]} align="middle">
          {/* ด้านซ้าย: Headline + Description */}
          <Col xs={24} md={12}>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/80 text-base md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
              accusantium doloremque laudantium.
            </p>
          </Col>

          {/* ด้านขวา: ช่องกรอกอีเมล + ปุ่มส่ง */}
          <Col xs={24} md={12}>
            <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-md">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 outline-none text-gray-700"
              />
              <button className="bg-gray-200 px-6 py-2 text-gray-800 font-semibold hover:bg-gray-300 transition-colors">
                Send
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Section8
