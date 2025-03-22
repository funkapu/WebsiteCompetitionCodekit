import { Col, Row } from 'antd'
import React from 'react'
import analytics from '../img/imgdata/analytics.png'
import data from '../img/imgdata/data.png'

export const Section3 = () => {
  return (
    <div className="w-full bg-white py-16 space-y-16">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]} justify="center" align="middle">
          <Col xs={24} md={12}>
            <div className="space-y-6">
              <h1 className="font-extrabold text-[46px]">
                The newest business <br /> analytics platform
              </h1>
              <p className="text-[#9497A1]">
                Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className="w-[168px] h-[44px] bg-[#185CFF] text-white rounded-[6px] flex justify-center items-center shadow-xl cursor-pointer hover:opacity-90">
                <p className="font-bold">Learn more</p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <img src={analytics} alt="Analytics" className="w-full h-auto" />
          </Col>
        </Row>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]} justify="center" align="middle">
          <Col xs={24} md={12}>
            <img src={data} alt="data" className="w-full h-auto" />
          </Col>
          <Col xs={24} md={12}>
            <div className="space-y-6">
              <h1 className="font-extrabold text-[46px]">
                Radically new data <br />solutions
              </h1>
              <p className="text-[#9497A1]">
                Sed ut perspiciatis unde omnis iste natus error sit <br />
                voluptatem accusantium doloremque laudantium, totam <br />
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br />
                quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className="w-[168px] h-[44px] bg-[#185CFF] text-white rounded-[6px] flex justify-center items-center shadow-xl cursor-pointer hover:opacity-90">
                <p className="font-bold">Learn more</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
