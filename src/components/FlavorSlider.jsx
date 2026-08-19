import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";

const FlavorSlider = () => {
    const sliderRef = useRef();


    useGSAP(() => {

        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;