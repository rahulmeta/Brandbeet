import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {

  return (
    <div className='page-4'>
      <div className="page4Top">
        <h1>{["D", "e", "s", "i", "g", "n"," ", "s", "e", "r", "v", "i", "c", "e", "s", " ", "f", "o", "r"].map((item, index) => (
          <span key={index}>{item}</span>
        ))}</h1>
        <h1>profitable outcomes</h1>
      </div>
      <div className="cards">
        <Card heading="Brand" details="1-2 months average / 8 design sprints" li1="Logo design" li2="Visual Identity" li3="Collateral" li4="Brand Guidelines" li5="Animation" li6="Naming"/>

        <Card heading="Product" details="2-3 months average / 12 design sprints" li1="Mobile/Web apps" li2="Design systems" li3="Wireframing" li4="Interaction design" li5="UX design" li6="Design thinking"/>

        <Card heading="Web" details="1-2 months average / 8 design sprints" li1="Art direction" li2="Wireframing" li3="Responsive design" li4="Prototyping" li5="E-commerce" li6="Webflow development"/>

        <Card heading="Marketing" details="1-2 weeks average / 2 design sprints" li1="Pitch deck design" li2="Social media" li3="Email design" li4="Tradeshow assets" li5="Brochures" li6="Signage"/>
      </div>
    </div>
  )
}

export default Page4