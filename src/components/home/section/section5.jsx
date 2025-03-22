import React from 'react'
import { Row, Col, Card, Button } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import ceo1 from '../img/imgdata/ceo1.png'
import ceo2 from '../img/imgdata/ceo2.png'
const Section5 = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* ส่วนหัวข้อและปุ่มเลื่อน */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[46px] font-extrabold text-black">
            Trusted by the best <br />
            in the business
          </h2>
          <div className="flex space-x-2">
            <Button
              shape="circle"
              icon={<LeftOutlined />}
              className="shadow-md hover:shadow-lg transition-shadow"
            />
            <Button
              shape="circle"
              icon={<RightOutlined />}
              className="shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        </div>

        {/* ส่วนการ์ด Testimonials */}
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
            <img src={ceo1} alt="" className='w-[80px] h-[80px]'/>
              <p className="text-gray-700 mb-4 my-5">
                “Et enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum.”
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Alex Bern</p>
                <p className="text-gray-500 text-sm">CEO PayRefresh</p>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
            <img src={ceo2} alt="" className='w-[80px] h-[80px]'/>
              <p className="text-gray-700 mb-4 my-5">
                “Et enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum.”
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Alex Bern</p>
                <p className="text-gray-500 text-sm">CEO VDCX</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Section5
