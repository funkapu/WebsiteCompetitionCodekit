import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'

const Section7 = () => {
  return (
    <div className="bg-[#F8FBFF] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <div className="space-y-6">
              <h2 className="text-[38px] font-extrabold text-gray-900">
                Left questions? Contacts us <br />
                now for a free consultation <br />
                and free trial!
              </h2>
              <p className="text-[#9497A1]">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur?
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="text-[#9497A1]">Email: <br /></span>
                  <span className='font-bold'>ensome@info.us</span>
                </p>
                <p>
                  <span className="text-[#9497A1]">Phone number: <br /></span>
                  <span className='font-bold'>+1601-201-5580</span>
                </p>
                <p>
                  <span className="text-[#9497A1]">Address: <br /></span>
                  <span className='font-bold'>1526 Washington Avenue, Jackson, MS, Mississippi, 32001</span>
                </p>
              </div>
            </div>
          </Col>

          {/* คอลัมน์ขวา: ฟอร์มติดต่อ */}
          <Col xs={24} md={12}>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <Form layout="vertical">
                <Form.Item label="Name">
                  <Input placeholder="Andrea" />
                </Form.Item>
                <Form.Item label="Email">
                  <Input placeholder="andrea@gmail.com" />
                </Form.Item>
                <Form.Item label="Job">
                  <Input placeholder="Your job" />
                </Form.Item>
                <Form.Item label="Your message">
                  <Input.TextArea rows={4} placeholder="Type your message..." />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Section7
