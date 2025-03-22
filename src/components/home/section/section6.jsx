import React from 'react'
import { Row, Col } from 'antd'

const Section6 = () => {
  return (
    <div className="bg-blue-600 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]} justify="center">
          {/* สถิติ 1 */}
          <Col xs={12} sm={6}>
            <div className="text-center">
              <h2 className="text-4xl font-bold">1830+</h2>
              <p className="mt-2 text-base">Projects executed</p>
            </div>
          </Col>
          {/* สถิติ 2 */}
          <Col xs={12} sm={6}>
            <div className="text-center">
              <h2 className="text-4xl font-bold">220</h2>
              <p className="mt-2 text-base">Data analytics</p>
            </div>
          </Col>
          {/* สถิติ 3 */}
          <Col xs={12} sm={6}>
            <div className="text-center">
              <h2 className="text-4xl font-bold">390</h2>
              <p className="mt-2 text-base">Data management</p>
            </div>
          </Col>
          {/* สถิติ 4 */}
          <Col xs={12} sm={6}>
            <div className="text-center">
              <h2 className="text-4xl font-bold">834+</h2>
              <p className="mt-2 text-base">Satisfied customers</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Section6
