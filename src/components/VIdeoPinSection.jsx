import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const VIdeoPinSection = () => {


    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.vd-pin-section',
                start: 'top top',
                end: '200%',
                scrub: 1.5,
                pin: true,