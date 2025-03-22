import React from 'react'
import { Row, Col } from 'antd'
import typing from "../img/imgdata/typing.png"
import softwaredev from "../img/imgdata/softwaredev.png"
import bussiness from "../img/imgdata/bussiness.png"
const SectionBlog = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#212433] mb-8">
          Ensome blog
        </h2>

        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} md={8}>
            <div className="w-full h-48 bg-gray-300 mb-4 flex items-center justify-center text-gray-600">
              <img src={typing} alt="" />
            </div>
            <p className="text-[#9497A1] mb-2">22 june 2022</p>
            <h3 className="text-lg font-semibold text-[#212433] mb-2">
              Staffing software: key capabilities and top products
            </h3>
            <a
              href="#!"
              className="text-[#185CFF] hover:underline inline-block"
            >
              Read more
            </a>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="w-full h-48 bg-gray-300 mb-4 flex items-center justify-center text-gray-600">
              <img src={softwaredev} alt="" />
            </div>
            <p className="text-[#9497A1] mb-2">22 june 2022</p>
            <h3 className="text-lg font-semibold text-[#212433] mb-2">
              2022 software development trends explained with benefits
            </h3>
            <a
              href="#!"
              className="text-[#185CFF] hover:underline inline-block"
            >
              Read more
            </a>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <div className="w-full h-48 bg-gray-300 mb-4 flex items-center justify-center text-gray-600">
              <img src={bussiness} alt="" />
            </div>
            <p className="text-[#9497A1] mb-2">22 june 2022</p>
            <h3 className="text-lg font-semibold text-[#212433] mb-2">
              Business analysis helps you in finance
            </h3>
            <a
              href="#!"
              className="text-[#185CFF] hover:underline inline-block"
            >
              Read more
            </a>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SectionBlog
