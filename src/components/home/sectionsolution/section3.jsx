import React from 'react'

const SectionNumbers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#212433]">
          Ensome in numbers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
       
          <div>
            <p className="text-[#9497A1] mb-2">
              Data analytics performed by Ensome’s
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-[#185CFF]">
              220
            </h3>
          </div>
          <div>
            <p className="text-[#9497A1] mb-2">
              Data management performed by Ensome’s
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-[#185CFF]">
              390
            </h3>
          </div>
          <div>
            <p className="text-[#9497A1] mb-2">
              Customers are satisfied with Ensome’s work
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-[#185CFF]">
              834+
            </h3>
          </div>

    
          <div>
            <p className="text-[#9497A1] mb-2">
              Projects implemented by Ensome
            </p>
            <h3 className="text-4xl md:text-5xl font-bold text-[#185CFF]">
              1830+
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionNumbers
