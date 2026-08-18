import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";

const FlavorSlider = () => {



    return (
        <div className="slider-wrapper">
            <div className="flavors">
                {flavorlists.map((value) => {
                    return (<div