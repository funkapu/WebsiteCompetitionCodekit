import React from 'react'
import { Row, Col, Card } from 'antd'
import brain from '../img/imgdata/brain.png' 
import graph from '../img/imgdata/graph.png'
import key from '../img/imgdata/key.png'
export const Section2 = () => {
  return (
    <div className="w-full bg-[#F1F6FA]">
      {/* ส่วนหัวข้อ */}
      <div className="flex justify-center py-[100px]">
        <div>
          <h1 className="text-[46px] font-extrabold flex justify-center">
            Why our clients <br /> choose Ensome?
          </h1>
          <p className="text-[#9497A1] text-[20px] my-[30px] text-left">
            Doloremque laudantium, totam rem aperiam, eaque ipsa <br />
            quae ab illo inventore veritatis et quasi architecto beatae <br />
            <p className='justify-center flex'>vitae dicta sunt explicabo.</p>
          </p>
        </div>
      </div>

      {/* ส่วนการ์ด 3 ใบ */}
      <div className="max-w-6xl mx-auto px-4 pb-[100px]">
        <Row gutter={[24, 24]}>
          {/* Card 1 */}
          <Col xs={24} sm={24} md={8}>
            <Card className="hover:shadow-lg transition-shadow" bodyStyle={{ padding: '2rem' }}>
              <div className="flex flex-col items-start">
                {/* ไอคอนอยู่ด้านบน */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 text-blue-600">
                  <img src={brain} alt="" className='w-[33px] h-[33px]'/>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-left">Machine learning</h3>
                <p className="text-gray-600 text-left">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores.
                </p>
              </div>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={24} sm={24} md={8}>
            <Card className="hover:shadow-lg transition-shadow" bodyStyle={{ padding: '2rem' }}>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 text-blue-600">
                  <img src={graph} alt="" className='w-[33px] h-[33px]'/>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-left">Embed analytics</h3>
                <p className="text-gray-600 text-left">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores.
                </p>
              </div>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={24} sm={24} md={8}>
            <Card className="hover:shadow-lg transition-shadow" bodyStyle={{ padding: '2rem' }}>
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-50 text-blue-600">
                  <img src={key} alt="" className='w-[33px] h-[33px]'/>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-left">Access control</h3>
                <p className="text-gray-600 text-left">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores.
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}
