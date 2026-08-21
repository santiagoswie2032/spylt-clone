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
            duration: 0.5,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        })


    })












    return (

        <section className='benefit-section'>
            <div className='container mx-auto pt-20'>
                <div className='col-center'>
                    <p>UNLOCK the Advantages: <br />
                        Explore the Key Benefits of Choosing SPYLT</p>

                    <div className='col-center mt-20'>
                        <ClipPathTitle
                            title={"Shelf stable"}
                            color={'#faeade'}
                            bg={'#c88e64'}
                            className={'first-title'}
                            borderColor={'#222123'}


                        />
                        <ClipPathTitle
                            title={"protein + caffeine"}
                            color={'#222123'}
                            bg={'#faeade'}
                            className={'second-title'}
                            borderColor={'#222123'}


                        />
                        <ClipPathTitle
                            title={"Infinitely Delicious"}
                            color={'#faeade'}
                            bg={'#7F3B2D'}
                            className={'third-title'}
                            borderColor={'#222123'}
