import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const VIdeoPinSection = () => {


    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.vd-pin-section',
                start: 'top top',
                end: '200%',
                scrub: 1.5,
                pin: true,
            }
        });

        tl.to('.video-box', {
            clipPath: "circle(100% at 50% 50%)",
            ease: "power1.inOut"
        })
    })






    return (
        <section className="vd-pin-section">
            <div style={{
                clipPath: "circle(9% at 50% 50%)"

            }} className="size-full video-box ">