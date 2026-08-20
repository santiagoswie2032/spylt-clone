import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
    const sliderRef = useRef();


    const isTablet = useMediaQuery({
        query: "(max-width: 1024px)",
    });


    useGSAP(() => {

        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;


        if (!isTablet) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.flavor-section',
                    start: '2% top',
                    end: `+=${scrollAmount + 1500}px`,
                    scrub: 1,
                    pin: true
                },
            });

            tl.to('.flavor-section', {
                x: `-=${scrollAmount + 1000}px`,
                ease: 'none',
                force3D: true

            });


        }


        const TitleTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.first-text-split',
                start: "top 1%",
                end: "bottom 80%",
                scrub: 1,

            }
        });

        TitleTl.to('.first-text-split', {

            xPercent: -20,
            ease: "power1.inOut",


        }, "<").to('.flavor-text-scroll', {
            xPercent: -22,
            ease: "power1.inOut",


        }, "<").to('.second-text-split', {
            xPercent: -10,
            ease: "power1.inOut",


        })





