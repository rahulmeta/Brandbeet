import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import ViewPricingBtn from './ViewPricingBtn';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer",
                start: "50% 50%",
                end: "100% 50%",
                pin: true,
                scrub: 2,
                // markers: true
            }
        })
        tl.to(".top", {
            top: "-50%"
        }, "anim")
        tl.to(".bottom", {
            bottom: "-50%"
        }, "anim")
        tl.to("#topH1", {
            bottom: "30%"
        }, "anim")
        tl.to("#bottomH1", {
            bottom: "-30%"
        }, "anim")
        tl.from(".middleInnerContainer", {
            y: "200%"
        }, "anim")
    })

    return (
        <div className='footer'>
            <div className="top">
                <h1 id='topH1'>FOOTER</h1>
            </div>
            <div className="middle">
                <div className="middleInnerContainer">
                    <h1>Try us on for size</h1>
                    <p id='firstPara'>Get a personal overview of how we work and the <br /> commercial impact ofgreat design.
                    </p>
                    <ViewPricingBtn />
                    {/* <p id='secondPara'>© Brandbeet 2024</p> */}
                </div>
            </div>
            <div className="bottom">
                <h1 id='bottomH1'>FOOTER</h1>
            </div>
        </div>
    )
}

export default Footer