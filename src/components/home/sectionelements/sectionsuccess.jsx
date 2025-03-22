import React from 'react'
import { Row, Col } from 'antd'

const SectionSuccess = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              We provide services that guarantee your success
            </h2>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={8}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#185CFF] mb-2">
                    1830+
                  </h3>
                  <p className="text-[#212433]">Project executed</p>
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#185CFF] mb-2">
                    834+
                  </h3>
                  <p className="text-[#212433]">Satisfied customers</p>
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#185CFF] mb-2">
                    390
                  </h3>
                  <p className="text-[#212433]">Data management</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="md:w-1/2">
            <p className="text-[#212433] text-base md:text-lg leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. 
              Donec tincidunt tempor quam, non mollis quam finibus nec.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSuccess
