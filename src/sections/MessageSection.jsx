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
                scrub: 1,               // 1s numeric scrub for buttery lag


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
                scrub: 1,               // 1s numeric scrub for buttery lag


            }

        });

        const revealTl = gsap.timeline({
            delay: 0,
            scrollTrigger: {
                trigger: '.msg-text-scroll',
                start: "top 60%",
                markers: true

            }