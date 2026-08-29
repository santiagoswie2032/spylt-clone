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