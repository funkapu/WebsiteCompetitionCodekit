import React from 'react'
import { Row, Col, Card, Tag, Button } from 'antd'

const Section4 = () => {
  return (
    <div className="bg-[#F8FBFF] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* ส่วนหัวข้อ */}
        <h2 className="text-[46px] font-extrabold  text-center mb-8">
          Glad to help your success
        </h2>

        {/* ส่วนการ์ด 3 ใบ */}
        <Row gutter={[24, 24]} justify="center">
          {/* Card 1 */}
          <Col xs={24} sm={24} md={8}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-400 mb-2">22 June 2020</p>
              <h3 className="text-lg font-semibold mb-2">
                Sed ut perspiciatis unde omnis at vero blanditiis
              </h3>
              <p className="text-gray-500 mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum...
              </p>
              <div className="space-x-2">
              <span className='text-[#185CFF] font-extrabold'>Proxy</span>
              <span className='text-[#185CFF] font-extrabold'>VPN</span>
              </div>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={24} sm={24} md={8}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-400 mb-2">22 June 2020</p>
              <h3 className="text-lg font-semibold mb-2">
                Sed ut perspiciatis unde omnis at vero blanditiis
              </h3>
              <p className="text-gray-500 mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum...
              </p>
              <div className="space-x-2">
                <span className='text-[#185CFF] font-extrabold'>Proxy</span>
                <span className='text-[#185CFF] font-extrabold'>VPN</span>
              </div>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={24} sm={24} md={8}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-400 mb-2">22 June 2020</p>
              <h3 className="text-lg font-semibold mb-2">
                Sed ut perspiciatis unde omnis at vero blanditiis
              </h3>
              <p className="text-gray-500 mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum...
              </p>
              <div className="space-x-2">
              <span className='text-[#185CFF] font-extrabold'>Proxy</span>
              <span className='text-[#185CFF] font-extrabold'>VPN</span>
              </div>
            </Card>
          </Col>
        </Row>

        {/* ปุ่ม Learn more */}
        <div className="flex justify-center mt-8">
        <div className="w-[168px] h-[44px] bg-[#185CFF] text-white rounded-[6px] flex justify-center items-center shadow-xl cursor-pointer hover:opacity-90">
                <p className="font-bold">Learn more</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Section4
