import React from 'react'

const SectionHelp = () => {
  return (
    <div className="bg-[#F8FBFF] py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#212433] mb-4">
          Do you need help?
        </h2>
        <p className="text-[#9497A1] text-base md:text-lg mb-6 leading-relaxed">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </p>
        <button className="bg-[#185CFF] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#3B7BFF] transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default SectionHelp
