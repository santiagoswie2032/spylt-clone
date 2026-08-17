import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import SplitText from "gsap/SplitText.js";


const FlavorTitle = () => {

    useGSAP(() => {
        const firstText = SplitText.create('.first-text-split h1', {
            type: "chars",
        });

        const secText = SplitText.create('.second-text-split h1', {
            type: "chars",
        });



        gsap.from(firstText.chars, {
            yPercent: 200,
            stagger: 0.02,
            duration: 0.8,

            scrollTrigger: {
                trigger: ".first-text-split h1",
                start: "top 100%"
            }

        })

        gsap.from(secText.chars, {
            yPercent: 200,
            stagger: 0.02,
            duration: 0.8,
            ease: "power1.inOut",

            scrollTrigger: {
                trigger: ".second-text-split h1",
                start: "top 80%"
            }

        });



        gsap.to('.flavor-text-scroll', {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",

            scrollTrigger: {
                trigger: '.flavor-text-scroll',
                start: 'top 50%'
            }
        })
    })

    return (
        <div className="general-title col-center h-full 2xl:gap-32 xl:gap-28 gap-16 relative">
            <div className="overflow-hidden 2xl:py-0 py-4 first-text-split">
                <h1>We have 6</h1>
            </div>

            <div style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }} className="flavor-text-scroll -rotate-4 -translate-y-1 md:translate-y-2">
                <div className="bg-mid-brown pb-4 2xl:pt-0 pt-1 2xl:px-7 px-4">
                    <h2 className="text-milk leading-none">Fcuking</h2>