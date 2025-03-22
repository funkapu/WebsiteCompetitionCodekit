import React from 'react'
import { Row, Col } from 'antd'
import { KeyOutlined } from '@ant-design/icons'
import group3 from '../img/imgdata/group3.png'
import brain from '../img/imgdata/brain.png'
import graph from '../img/imgdata/graph.png'
import key from '../img/imgdata/key.png'
const SectionBenefits = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <div className="w-full h-64 md:h-96 bg-gray-300 flex items-center justify-center ">
                <img src={group3} alt="" className='h-[380px]'/>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#212433]">
              The benefits of Ensome
            </h2>

            <div className="flex items-start mb-8">
              <div className="text-[#185CFF] text-2xl mr-4">
                <img src={brain} alt="" className='w-[40px] h-[19.2px]'/>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#212433] mb-2">
                  Machine learning
                </h3>
                <p className="text-[#9497A1]">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores.
                </p>
              </div>
            </div>

          
            <div className="flex items-start mb-8">
              <div className="text-[#185CFF] text-2xl mr-4">
              <img src={graph} alt="" className='w-[40px] h-[19.2px]'/>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#212433] mb-2">
                  Embed analytics
                </h3>
                <p className="text-[#9497A1]">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores.
                </p>
              </div>
            </div>

            
            <div className="flex items-start">
              <div className="text-[#185CFF] text-2xl mr-4">
                <img src={key} alt="" className='w-[40px] h-[19.2px]'/>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#212433] mb-2">
                  Access control
                </h3>
                <p className="text-[#9497A1]">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SectionBenefits
