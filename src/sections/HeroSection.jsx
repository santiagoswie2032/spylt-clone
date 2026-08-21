import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";


const HeroSection = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const isTablet = useMediaQuery({
        query: "(max-width 1024px)",
    });

    useGSAP((animation) => {

        const titleSplit = SplitText.create(".hero-title", {
            type: "chars"