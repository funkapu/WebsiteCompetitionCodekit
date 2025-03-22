import React from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'

const Section1 = () => {
  return (
    <section className="bg-[#002B4E] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-[46px] md:text-5xl font-extrabold mb-4 leading-tight">
              Find true power in your <br className="hidden md:block" /> data with Ensome
            </h1>
          </div>
          <div className="md:w-1/2 flex flex-col md:justify-end space-y-4">
            <p className="text-white/80 text-lg max-w-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className="flex flex-wrap space-x-4">
              <button className="bg-white text-[#0F2A43] font-bold px-6 py-3 rounded hover:opacity-90 transition-opacity">
                Learn more
              </button>
              <button className="flex items-center border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#0F2A43] transition-colors">
                <PlayCircleOutlined className="mr-2" />
                Watch the demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
