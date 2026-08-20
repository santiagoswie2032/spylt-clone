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

