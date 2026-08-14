import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const HeroSection = () => {

    useGSAP((animation) => {

        const titleSplit = SplitText.create(".hero-title", {
            type: "chars"
        });


        // okay so the splitText will split block of words into individual
        // words or chars to animate it 


        const tl = gsap.timeline({
            delay: 1,       //gsap timeline to animate the initial loading
        });