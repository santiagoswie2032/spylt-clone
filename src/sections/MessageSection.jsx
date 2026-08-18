import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText } from 'gsap/all'
import gsap from "gsap"


const MessageSection = () => {

    useGSAP(() => {
        const firstmsgSplit = SplitText.create('.first-message', {
            type: 'words',
        });

        const secmsgSplit = SplitText.create('.second-message', {
            type: 'words',
        });

        const paragraphSplit = SplitText.create('.message-content p', {
            type: 'words, lines',
            linesClass: "paragraph-line"
        });

        gsap.to(firstmsgSplit.words, {
            color: "#faeade",
            stagger: 0.2,
            ease: "none",
            scrollTrigger: {
                trigger: '.message-content',
                start: "top center",
                end: "40% center",       //giving scroll more distance
                scrub: true,               // 1s numeric scrub for buttery lag


            }

        });

        gsap.to(secmsgSplit.words, {
            color: "#faeade",
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
                trigger: '.second-message',
                start: "top center",
                end: "bottom center",       //giving scroll more distance
                scrub: true,               // 1s numeric scrub for buttery lag


            }

        });

        const revealTl = gsap.timeline({
            delay: 0,
            scrollTrigger: {
                trigger: '.msg-text-scroll',
                start: "top 60%",


            }
        });

        revealTl.to('.msg-text-scroll', {
            duration: 1,

            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
        })


        const paragraphTl = gsap.timeline({
            scrollTrigger: {                         // scroll trigger will only have trigger: , start: , end: 
                trigger: '.message-content p',
                start: 'top 70%',

            }
        });

        paragraphTl.from(paragraphSplit.words, {
            duration: 1,                            // how long should it last
            stagger: 0.02,                          // duration between popping up of each word
            rotate: 15,                              // starts from a 3 degree rotation back to 0 deg to give that rotating effect
            ease: 'power1.inOut',                   // smooth effect
            yPercent: 300                           // where should it start from ? remember, its a reveal animation 