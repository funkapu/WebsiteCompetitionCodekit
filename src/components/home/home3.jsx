import React from 'react'
import { Navbar } from '../nav'
import SectionExample from './sectionelements/sectionexample'
import SectionSuccess from './sectionelements/sectionsuccess'
import SectionBenefits from './sectionelements/sectionbenefit'
import SectionTestimonials from './sectionelements/sectiontest'
import SectionPricing from './sectionelements/sectionpricing'
import SectionHelp from './sectionelements/sectionhelp'
import SectionFooter from './sectionsolution/sectionfooter'

export const Home3 = () => {
const home = 3
  return (
    <div> 
        <Navbar home={home}/>
        <SectionExample/>
        <SectionSuccess/>
        <SectionBenefits/>
        <SectionTestimonials/>
        <SectionPricing/>
        <SectionHelp/>
        <SectionFooter/>
    </div>
  )
}

