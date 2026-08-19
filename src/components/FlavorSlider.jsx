import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";

const FlavorSlider = () => {
    const sliderRef = useRef();


    useGSAP(() => {

        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.flavor-section',
                start: '2% top',
                end: `+=${scrollAmount + 1500}px`,
                scrub: true,
                pin: true
            },
        });

        tl.to('.flavor-section', {
            x: `-=${scrollAmount + 1000}px`,
            ease: 'power1.inOut',

        });


        const TitleTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.first-text-split',
                start: "top top",
                end: "bottom 80%",
                scrub: 3
            }
        });

        TitleTl.to('.first-text-split', {

            xPercent: -30,
            ease: "power1.inOut"

        }, "<").to('.flavor-text-scroll', {
            xPercent: -22,
            ease: "power1.inOut",

        }, "<").to('.second-text-split', {
            xPercent: -30,
            ease: "power1.inOut"
        })