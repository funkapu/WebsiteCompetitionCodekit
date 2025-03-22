import React from 'react'
import { Row, Col } from 'antd'

const SectionContact = () => {
  return (
    <div className="bg-[#F8FBFF] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#212433] mb-4">
              Contact information
            </h2>
            <div className="relative inline-block mb-6">
              <span className="z-10 relative">Contact</span>
              <span className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-[#185CFF] -z-10" />
            </div>
            <p className="text-[#9497A1] mb-8">
              Fill up the form and our Team will get back to you within 25 hours.
            </p>
            <div className="space-y-4 text-[#212433]">
              <p>ensome@info.us</p>
              <p>+1601-007-5800</p>
              <p>1962 Washington Ave, Jackson, MS</p>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <form className="space-y-6">
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <label className="block text-sm text-[#212433] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Andrea"
                    className="w-full border-b border-gray-300 bg-transparent focus:outline-none py-1"
                  />
                </Col>
                <Col xs={24} md={12}>
                  <label className="block text-sm text-[#212433] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="andrea@gmail.com"
                    className="w-full border-b border-gray-300 bg-transparent focus:outline-none py-1"
                  />
                </Col>
              </Row>
              <div>
                <label className="block text-sm text-[#212433] mb-1">
                  Job
                </label>
                <input
                  type="text"
                  placeholder="Your job"
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none py-1"
                />
              </div>
              <div>
                <label className="block text-sm text-[#212433] mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Your message"
                  className="w-full border-b border-gray-300 bg-transparent focus:outline-none py-1"
                />
              </div>
              <button
                type="submit"
                className="bg-[#185CFF] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#3B7BFF] transition-colors"
              >
                Send
              </button>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SectionContact
