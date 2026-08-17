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