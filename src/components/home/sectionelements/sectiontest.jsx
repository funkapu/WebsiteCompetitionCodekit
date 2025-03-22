import React from 'react'
import { Row, Col, Card, Avatar, Button } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import ceo1 from "../img/imgdata/ceo1.png"
import ceo2 from "../img/imgdata/ceo2.png"
import ceo3 from "../img/imgdata/ceo2.png"
const SectionTestimonials = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* ส่วนหัวข้อ + ปุ่มเลื่อน */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#212433]">
            Testimonials
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

        {/* การ์ด Testimonials */}
        <Row gutter={[24, 24]}>
          {/* Card 1 */}
          <Col xs={24} sm={24} md={8}>
            <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center mb-4">
                <Avatar
                  size={48}
                  src={ceo1} // ใส่รูปจริงได้
                  className="mr-3"
                />
                <div>
                  <p className="font-semibold text-[#212433] mb-0">Alex Bern</p>
                  <p className="text-[#9497A1] text-sm mb-0">CEO by PixelPerfect</p>
                </div>
              </div>
              <p className="text-[#212433] text-sm md:text-base leading-relaxed">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum.”
              </p>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={24} sm={24} md={8}>
            <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center mb-4">
                <Avatar
                  size={48}
                  src={ceo2}
                  className="mr-3"
                />
                <div>
                  <p className="font-semibold text-[#212433] mb-0">Ruben Chirindo</p>
                  <p className="text-[#9497A1] text-sm mb-0">CEO by NOX</p>
                </div>
              </div>
              <p className="text-[#212433] text-sm md:text-base leading-relaxed">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum.”
              </p>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={24} sm={24} md={8}>
            <Card className="shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center mb-4">
                <Avatar
                  size={48}
                  src={ceo3}
                  className="mr-3"
                />
                <div>
                  <p className="font-semibold text-[#212433] mb-0">Tigran Nazaret</p>
                  <p className="text-[#9497A1] text-sm mb-0">Data analyst</p>
                </div>
              </div>
              <p className="text-[#212433] text-sm md:text-base leading-relaxed">
                “Ut enim ad minima veniam, quis nostrum exercitationem ullam
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

export default SectionTestimonials
