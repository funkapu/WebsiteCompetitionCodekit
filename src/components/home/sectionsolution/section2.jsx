import React from 'react'
import { Row, Col, Button } from 'antd'
import group1 from "../img/imgdata/group1.png"
import group2 from "../img/imgdata/group2.png"
const Section2 = () => {
  return (
    <div className="bg-[#F8FBFF] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The newest business analytics platform
            </h2>
            <p className="text-gray-600 mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <Button
              type="primary"
              className="bg-blue-600 hover:bg-blue-700 border-none"
            >
              Learn more
            </Button>
          </Col>
          <Col xs={24} md={12}>
           
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-600">
              <img src={group1} alt="" />
            </div>
          </Col>
        </Row>

        
        <Row gutter={[24, 24]} align="middle" className="mt-10">
          
          <Col xs={24} md={12} order={{ xs: 2, md: 1 }}>
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              <img src={group2} alt="" />
            </div>
          </Col>
        
          <Col xs={24} md={12} order={{ xs: 1, md: 2 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Radically new solutions for data
            </h2>
            <p className="text-gray-600 mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <Button
              type="primary"
              className="bg-blue-600 hover:bg-blue-700 border-none"
            >
              Learn more
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Section2
