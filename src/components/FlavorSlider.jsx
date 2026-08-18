import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";

const FlavorSlider = () => {



    return (
        <div className="slider-wrapper">
            <div className="flavors">
                {flavorlists.map((value) => {
                    return (<div
                        key={value.name}
                        className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] h-80 flex-none ${value.rotation}`}
                    >
                        <img src={`/images/${value.color}-bg.svg`} alt="" className="absolute bottom-0 " />
                        <img src={`/images/${value.color}-drink.webp`} className="drinks" />
                        <img src={`/images/${value.color}-elements.webp`} alt="" className="elements" />