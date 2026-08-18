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
        // its basically for overlapping animation

        // okay so the first thing that is getting
        // animated is the hero-content which has 
        // hero-title, hero-subtitle, chug splyt button etc

        // okay so this is a "to" animation and not "fro" so gotta define initial
        // position here 


        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-container",
                start: "1% top",
                end: "+=300",
                scrub: 3,          // this is NOT a string, a string will result in default scrub = 0

            },

        });

        // scrollTrigger is a gsap plugin which does animations upon the end user's scrolling 
        // trigger selects the element which is to be triggered
        // start : 1% top means as soon as hero container hits the vh window, the animation will 
        // get triggered, scrub is to not having to sync scroll position and animation manuallyk

        heroTl.to(".hero-container", {
            rotate: 1,                  // rotate effect
            scale: 0.8,                 // to shrink a lil bit
            yPercent: 30,               // come down a lil bit
            ease: "power1.inOut"        // smooth in and out motion
        })


    });




    return (
        <section className="bg-main-bg">
            <div className="hero-container">
                <img
                    src="/images/static-img.png"
                    alt="hero-img"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"
                />

                <div className="hero-content" style={{ opacity: 0 }}>
                    <div className="overflow-hidden">
                        <h1 className="hero-title">Fcuking Delicious</h1>
                    </div>

                    <div
                        style={{
                            clipPath: "polygon(50% 0, 50% 0, 50% 99%, 50% 96%)",
                        }}
                        className="hero-text-scroll">