import { useGSAP } from "@gsap/react"
import { cards } from "../constants"
import gsap from "gsap"

const TestimonialSection = () => {


    useGSAP(() => {
        gsap.set('.testimonials-section', {
            marginTop: "-100vh",
        });

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonials-section',
                scrub: true,
                start: 'top bottom',
                end: '200% top'
            }
        });

        titleTl
            .to('.testimonials-section .first-title', {
                xPercent: 75
            }, "<")
            .to('.testimonials-section .sec-title-one', {
                xPercent: -30
            }, "<")
            .to('.testimonials-section .sec-title-two', {
                xPercent: 30
            }, "<")
            .to('.testimonials-section .third-title', {
                xPercent: -75
            }, "<")



        const pintTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonials-section',
                scrub: true,
                start: 'top top',
                end: '150% top',
                pin: true
            }
        });

        pintTl.from('.vd-card', {
            yPercent: 150,
            stagger: 0.2,