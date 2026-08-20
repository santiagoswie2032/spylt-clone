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