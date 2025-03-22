import React from 'react'
import { Row, Col, Card, Button, Avatar } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import ceo1 from '../img/imgdata/ceo1.png'
import ceo2 from '../img/imgdata/ceo2.png' 
const SectionTest = () => {
  return (
    <div className="bg-[#F8FBFF] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#212433]">
            <span className="relative inline-block">
              <span className="z-10 relative">What</span>
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-[#185CFF] -z-10" />
            </span>{' '}
            our customers say
          </h2>
          <div className="flex space-x-2">
            <Button
              shape="circle"
              icon={<LeftOutlined />}
              className="bg-white hover:bg-white shadow-md border-none text-gray-600 flex items-center justify-center"
            />
            <Button
              shape="circle"
              icon={<RightOutlined />}
              className="bg-white hover:bg-white shadow-md border-none text-gray-600 flex items-center justify-center"
            />
          </div>
        </div>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Avatar
                  size={48}
                  src={ceo1}
                  className="mr-3"
                />
                <div>
                  <p className="font-semibold text-[#212433] mb-0">
                    Alex Bern
                  </p>
                  <p className="text-[#9497A1] text-sm mb-0">
                    CEO PayRefresh
                  </p>
                </div>
              </div>
              <p className="text-[#212433] text-sm md:text-base leading-relaxed">
                “Et enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum.”
              </p>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Avatar
                  size={48}
                  src={ceo2}
                  className="mr-3"
                />
                <div>
                  <p className="font-semibold text-[#212433] mb-0">
                    Ruben Chirindo
                  </p>
                  <p className="text-[#9497A1] text-sm mb-0">
                    CEO VDCX
                  </p>
                </div>
              </div>
              <p className="text-[#212433] text-sm md:text-base leading-relaxed">
                “Et enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum.”
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SectionTest
