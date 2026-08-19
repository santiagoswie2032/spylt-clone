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





    });


    return (
        <div ref={sliderRef} className="slider-wrapper">
            <div className="flavors">
                {flavorlists.map((value) => {
                    return (<div
                        key={value.name}
                        className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] h-80 flex-none ${value.rotation}`}
                    >
                        <img src={`/images/${value.color}-bg.svg`} alt="" className="absolute bottom-0 " />
                        <img src={`/images/${value.color}-drink.webp`} className="drinks" />
                        <img src={`/images/${value.color}-elements.webp`} alt="" className="elements" />
                        <h1>{value.name}</h1>
                    </div>)
                })}
            </div>
        </div>