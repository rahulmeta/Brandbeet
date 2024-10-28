import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import Rotatediv from './Rotatediv'

const Page1 = () => {

    function logoAnimEnter() {
        gsap.to(".navleftTop h1", {
            y: "-100%",
            stagger: 0.03,
            duration: 0.4
        })
        gsap.to(".navleftBottom h1", {
            y: "-100%",
            stagger: 0.03,
            duration: 0.4
        })
    }
    function logoAnimLeave() {
        gsap.to(".navleftTop h1", {
            y: "0%",
            stagger: 0.03,
            duration: 0.4
        })
        gsap.to(".navleftBottom h1", {
            y: "0%",
            stagger: 0.03,
            duration: 0.4
        })
    }

    function webAnimEnter() {
        gsap.to(".navRightTop h1", {
            y: "-100%",
            stagger: 0.03,
            duration: 0.3
        })
        gsap.to(".navRightBottom h1", {
            y: "-100%",
            stagger: 0.03,
            duration: 0.3
        })
    }
    function webAnimLeave() {
        gsap.to(".navRightTop h1", {
            y: "0%",
            stagger: 0.03,
            duration: 0.3
        })
        gsap.to(".navRightBottom h1", {
            y: "0%",
            stagger: 0.03,
            duration: 0.3
        })
    }


    return (
        <>
            <div className="nav">
                <div className="navLeft" onMouseEnter={logoAnimEnter} onMouseLeave={logoAnimLeave}>
                    <div className="navleftTop">
                        {["B", "r", "a", "n", "d", "b", "e", "e", "t"].map((item, index) => (
                            <h1 key={index}>{item}</h1>
                        ))}
                    </div>
                    <div className="navleftBottom">
                        {["B", "r", "a", "n", "d", "b", "e", "e", "t"].map((item, index) => (
                            <h1 key={index}>{item}</h1>
                        ))}
                    </div>
                </div>
                <div className="navRight" onMouseEnter={webAnimEnter} onMouseLeave={webAnimLeave}>
                    <div className="navRightTop">
                        {["h", "e", "l", "l", "o", "@", "b", "r", "a", "n", "d", "b", "e", "e", "t", ".", "c", "o", "m"].map((item, index) => (
                            <h1 key={index}>{item}</h1>
                        ))}
                    </div>
                    <div className="navRightBottom">
                        {["h", "e", "l", "l", "o", "@", "b", "r", "a", "n", "d", "b", "e", "e", "t", ".", "c", "o", "m"].map((item, index) => (
                            <h1 key={index}>{item}</h1>
                        ))}
                    </div>
                </div>
            </div>
            <div className="page-1">
                <Rotatediv />
            </div>
        </>

    )
}

export default Page1