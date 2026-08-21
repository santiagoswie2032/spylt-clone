import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";


const HeroSection = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",