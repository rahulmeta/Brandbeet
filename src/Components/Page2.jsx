import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ViewPricingBtn from './ViewPricingBtn';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

    useGSAP(() => {
        let tl = gsap.timeline()
        tl.to(".roundedDivWrapper", {
            marginTop: 0,
            height: 0,
            scrollTrigger: {
                trigger: ".page-2",
                start: "0% 40%",
                end: "50% 50%",
                scrub: 2
            }
        })
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".textContainer",
                start: "0% 50%",
                end: "100% 50%",
                // markers: true,
                scrub: 2
            }
        })
        tl2
            .to(".textHover", {
                width: "100%",
                stagger: 0.2
            })
    })

    return (
        <div className='page-2'>
            <div className="roundedDivWrapper">
                <div className="roundedDiv"></div>
            </div>
            <div className="textContainer">
                <div className="text">
                    Strategic design solutions <br /> that fuel your bottomline.
                </div>
                <div className="textHover">
                    Strategic design solutions <br /> that fuel your bottomline.
                </div>
            </div>
            <div className="textbtnContainer">
                <div className="textLeft">
                    <p>Unlock profit with monthly design sprints.</p>
                </div>
                <div className="btnRight">
                    <div className="bBtn">Book a demo</div>
                    <ViewPricingBtn/>
                </div>
            </div>
            <div className="page2Bottom">
                <div className="page2BottomImgCont">
                    <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fee7b486cf8fa72268_Vector.svg" alt="" />
                </div>
                <div className="page2BottomImgCont">
                    <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fef884e67ba66aac09_Vector-1.svg" alt="" />
                </div>
                <div className="page2BottomImgCont">
                    <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fe505e4ce593209844_Vector-2.svg" alt="" />
                </div>
                <div className="page2BottomImgCont">
                    <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fe1889b6f78eb198ae_Vector-3.svg" alt="" />
                </div>
                <div className="page2BottomImgCont">
                    <img src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178feb68adb8257d5b442_Vector-4.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Page2