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
    });


    return (
        <div ref={sliderRef} className="slider-wrapper">