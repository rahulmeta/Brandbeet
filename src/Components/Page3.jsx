import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {

    function textMouseEnterAnim() {
        let tl = gsap.timeline()
        tl.to(".textHoverContainer:nth-child(1) h1:nth-child(1)", {
            y: "-110%",
            duration: 0.4
        }, "anim")
        tl.to(".textHoverContainer:nth-child(1) h1:nth-child(2)", {
            y: "-100%",
            duration: 0.4
        }, "anim")
    }

    function textMouseLeaveAnim() {
        let tl2 = gsap.timeline()
        tl2.to(".textHoverContainer:nth-child(1) h1:nth-child(2)", {
            y: "0%",
            duration: 0.4
        }, "anim1")
        tl2.to(".textHoverContainer:nth-child(1) h1:nth-child(1)", {
            y: "0%",
            duration: 0.4
        }, "anim1")
    }

    function textMouseEnterAnim2() {
        let tl = gsap.timeline()
        tl.to(".textHoverContainer:nth-child(2) h1:nth-child(1)", {
            y: "-110%",
            duration: 0.4
        }, "anim")
        tl.to(".textHoverContainer:nth-child(2) h1:nth-child(2)", {
            y: "-100%",
            duration: 0.4
        }, "anim")
    }

    function textMouseLeaveAnim2() {
        let tl2 = gsap.timeline()
        tl2.to(".textHoverContainer:nth-child(2) h1:nth-child(2)", {
            y: "0%",
            duration: 0.4
        }, "anim1")
        tl2.to(".textHoverContainer:nth-child(2) h1:nth-child(1)", {
            y: "0%",
            duration: 0.4
        }, "anim1")
    }

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".page3",
                pin: true,
                start: "50% 50%",
                end: "100% 50%",
                // markers: true,
                scrub: 2,
            },
        })
        tl.to(".rightContent:nth-child(1)", {
            marginTop: "-25%",
            opacity: 1
        }, "tl1")
        tl.to(".rightContent:nth-child(2)", {
            opacity: 1
        }, "tl2")
        tl.to(".rightContent:nth-child(1)", {
            marginTop: "-100%",
            opacity: 0
        }, "tl2")
        tl.to(".rightContent:nth-child(3)", {
            opacity: 1
        }, "tl3")
        tl.to(".rightContent:nth-child(2)", {
            opacity: 0
        }, "tl3")
        tl.to(".rightContent:nth-child(1)", {
            marginTop: "-195%"
        }, "tl3")
        tl.to(".rightContent:nth-child(3)", {
            opacity: 0
        },)

        tl.to(".circle", {
            rotate: "360",
            x: "500%"
        }, "anim")

        tl.to(".page3bottom", {
            y: "-60%"
        }, "anim")

    })


    return (
        <>
            <div className='page3'>
                <div className="page3left">
                    <div className="textHoverContainer" onMouseEnter={textMouseEnterAnim} onMouseLeave={textMouseLeaveAnim}>
                        <h1>Expected</h1>
                        <h1>Expected</h1>
                    </div>
                    <div className="textHoverContainer" onMouseEnter={textMouseEnterAnim2} onMouseLeave={textMouseLeaveAnim2}>
                        <h1>Outcomes</h1>
                        <h1>Outcomes</h1>
                    </div>
                    <div className="circle">
                        <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b7d30aa9b24259d10be24d_symbol.svg" alt="" />
                    </div>
                </div>
                <div className="page3Right">
                    <div className="rightContent">
                        <h1>Growth and ROI</h1>
                        <p>Expect a team that looks at problems holistically. A team <br />that designs solutions directly contributing to your revenue <br /> growth and business success - not just pretty pictures.</p>
                    </div>
                    <div className="rightContent">
                        <h1>Growth and ROI</h1>
                        <p>Expect a team that looks at problems holistically. A team <br />that designs solutions directly contributing to your revenue <br /> growth and business success - not just pretty pictures.</p>
                    </div>
                    <div className="rightContent">
                        <h1>Growth and ROI</h1>
                        <p>Expect a team that looks at problems holistically. A team <br />that designs solutions directly contributing to your revenue <br /> growth and business success - not just pretty pictures.</p>
                    </div>
                </div>
            </div>
            <div className="page3bottom">
                <p>In summary..</p>
            </div>
        </>
    )
}

export default Page3