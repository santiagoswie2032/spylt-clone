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