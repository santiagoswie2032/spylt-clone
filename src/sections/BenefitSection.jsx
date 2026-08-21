import React from 'react'
import ClipPathTitle from '../components/ClipPathTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import VIdeoPinSection from '../components/VIdeoPinSection'


const BenefitSection = () => {


    useGSAP(() => {
        const RevealTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.benefit-section',
                start: 'top 60%',
                end: 'top top',
                scrub: 1.5,
            }
        })

        RevealTl.to('.benefit-section .first-title', {
            duration: 0.5,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        }).to('.benefit-section .second-title', {
            duration: 0.5,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        }).to('.benefit-section .third-title', {
            duration: 0.5,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        }).to('.benefit-section .fourth-title', {