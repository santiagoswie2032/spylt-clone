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



        tl.to('.hero-content', {

            opacity: 1,                      // to fade in the content
            y: 0,                        // goes to 0 to its final position
            ease: "power1.inOut"           // smooth in and out motion
        }).to('.hero-text-scroll', {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        }, "-=0.5").from(titleSplit.chars, {   // from because we are defining the initial position first here 
            yPercent: 200,                      // the bottom where it should start from, 200% below it is here
            stagger: 0.02,                       // time diff between popping up of each character so it creates wave like animation
            ease: "power2.out"
        }, "-=0.8")

        //-=0.5 is the position parameter here which basially cancels out the default 0.5s duration
        // of hero-content to make sure both happens kinda at same point instead of one after another