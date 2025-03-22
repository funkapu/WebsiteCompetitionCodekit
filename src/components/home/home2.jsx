import React from 'react'
import { Navbar } from '../nav'
import Section1 from './sectionsolution/section1'
import Section2 from './sectionsolution/section2'
import SectionNumbers from './sectionsolution/section3'
import SectionBenefits from './sectionsolution/sectionbenefits'
import SectionTest from './sectionsolution/sectiontest'
import SectionPricing from './sectionsolution/sectionpricing'
import SectionBlog from './sectionsolution/sectionblog'
import SectionContact from './sectionsolution/sectioncontract'
import SectionNewsletter from './sectionsolution/sectionnews'
import SectionFooter from './sectionsolution/sectionfooter'
export const Home2 = () => { 
const home = 2
  return (
    <div> 
        <Navbar home={home}/>
        <Section1/>
        <Section2/>
        <SectionNumbers/>
        <SectionBenefits/>
        <SectionTest/>
        <SectionPricing/>
        <SectionBlog/>
        <SectionContact/>
        <SectionNewsletter/>
        <SectionFooter/>
    </div>
  )
}