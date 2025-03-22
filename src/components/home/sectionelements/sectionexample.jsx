import React from 'react'
import { Row, Col, Button } from 'antd'
import group from '../img/imgdata/group2.png'
import group2 from '../img/imgdata/group1.png'
const SectionHero = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section 1: Find true power in your data with Ensome */}
        <Row gutter={[24, 24]} align="middle" className="mb-16">
          <Col xs={24} md={12}>
            <h1 className="text-[46px] md:text-5xl font-extrabold leading-tight text-[#212433]">
              Find true power in your <br />
              data with <span className="text-[#185CFF]">Ensome</span>
            </h1>
          </Col>
          <Col xs={24} md={12} className='flex'>
            <p className="text-[#212433] text-[16px] md:text-lg leading-relaxed mb-4">
              Sed ut perspiciatis unde omnis iste natus error <br />
              sit voluptatem accusantium doloremque laudantium, <br />
              totam rem aperiam, eaque ipsa quae ab illo <br />
              inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <circle cx="60" cy="60" r="60" fill="#185CFF" />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontFamily="sans-serif"
              >
                learnmore
              </text>
            </svg>
          </Col>
        </Row>

        {/* Group image */}
        <div className="flex justify-center my-[5rem]">
          <img src={group} alt="Group" className="w-full h-auto" />
        </div>

        {/* Section 2: The newest business analytics platform */}
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={12}>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#212433] mb-4">
              The <span className="text-[#185CFF]">newest</span> business analytics platform
            </h1>
          </Col>
          <Col xs={24} md={12}>
            <p className="text-[#212433] text-base md:text-lg leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <Button
              type="primary"
              className="bg-[#185CFF] border-none hover:bg-[#3B7BFF]"
            >
              Discover more
            </Button>
          </Col>
        </Row>

        {/* Section 3: Radically new solutions for data */}
        <Row gutter={[24, 24]} align="middle" className="mt-16 flex my-[5rem]">
          <Col xs={24} md={12}>
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-600">
              <img src={group2} alt="" />
            </div>
          </Col>
          <Col xs={24} md={12}>
          <div >
            <h2 className="text-2xl md:text-3xl font-bold text-[#212433] mb-4">
              Radically new solutions for data
            </h2>
            <p className="text-[#212433] text-base md:text-lg leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <Button type="primary" className="bg-[#185CFF] text-white hover:bg-[#3B7BFF] border-none ">
              Learn more
            </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SectionHero
