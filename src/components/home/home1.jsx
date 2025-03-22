import React from 'react';
import { Navbar } from '../nav';
import { Section1 } from './section/section1';
import { Section2 } from './section/section2';
import { Section3 } from './section/section3';
import Section4 from './section/section4';
import Section5 from './section/section5';
import Section6 from './section/section6';
import Section7 from './section/section7';
import Section8 from './section/section8';
import SectionFooter from './section/sectionfooter';
export const Home1 = () => {
  const home = 1;

  return (
    <div className="w-full h-[5000px]"> 
      <div>
        <Navbar home={home} />
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <SectionFooter/>
    </div>
    </div>
  );
};
