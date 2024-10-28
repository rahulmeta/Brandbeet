import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page5 = () => {
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page-5",
                start: "50% 50%",
                end: "300% 50%",
                pin: true,
                scrub: 1
            }
        })
        tl.to(".ourworktextDiv", {
            height: "60vh",
        }, "height")
        tl.to(".ourWorkText", {
            height: "60vh",
        }, "height")
        tl.to("h1:nth-child(1)", {
            left: "0%",
        }, "height")
        tl.to("h1:nth-child(2)", {
            right: "0%",
        }, "height")
        tl.to(".scrollImg", {
            delay: 0.5,
            marginTop: "-410%",
        }, "height")

    })
    return (
        <div className='page-5'>
            <div className="ourWorkText">
                <h1>Our</h1>
                <h1>Work</h1>
            </div>
            <div className="ourworktextDiv">
                <div className="scrollWork">
                    <div className="scrollImg">
                        <img src="src/assets/img1.jpg" alt="" />
                        <img src="src/assets/img2.jpg" alt="" />
                        <img src="src/assets/img3.jpg" alt="" />
                        <img src="src/assets/img4.jpg" alt="" />
                        <img src="src/assets/img5.jpg" alt="" />
                        <img src="src/assets/img6.jpg" alt="" />
                        <img src="src/assets/img7.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page5