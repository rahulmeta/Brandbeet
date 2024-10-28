import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Rotatediv = () => {

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".rotateDiv",
                start: "top 0%",
                end: "bottom 50%",
                // markers: true,
                scrub: 2,
            }
        })
        tl.to(".rotateDiv", {
            transform: "rotate(-10deg)"
        }, "anim")
        tl.to(".container", {
            scale: 1
        }, "anim")
        tl.to(".column:nth-child(1)", {
            y: "10%",
        }, "anim")
        tl.to(".column:nth-child(2)", {
            y: "-10%",
        }, "anim")
        tl.to(".column:nth-child(3)", {
            y: "20%",
        }, "anim")

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".rotateDiv",
                start: "top -50%",
                end: "bottom 50%",
                // markers: true,
                scrub: 2,
            }
        })
        tl2.to(".cont", {
            opacity: 1
        })
    })
    return (
        <>
            <div className="container">
                <div className="rotateDiv">
                    <div className="column">
                        <div className="imgContainer">
                            <img src="src/assets/img5.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img7.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img2.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img15.jpg" alt="" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="imgContainer">
                            <img src="src/assets/img1.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img8.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img11.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img5.jpg" alt="" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="imgContainer">
                            <img src="src/assets/img3.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img11.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img7.jpg" alt="" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="imgContainer">
                            <img src="src/assets/img8.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img8.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img8.jpg" alt="" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="imgContainer">
                            <img src="src/assets/img8.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img8.jpg" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src="src/assets/img8.jpg" alt="" />
                        </div>
                    </div>
                    <div className="cont">
                        <h1>Brandbeet</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rotatediv