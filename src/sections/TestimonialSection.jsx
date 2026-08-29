import { useGSAP } from "@gsap/react"
import { cards } from "../constants"
import gsap from "gsap"

const TestimonialSection = () => {


    useGSAP(() => {
        gsap.set('.testimonials-section', {
            marginTop: "-100vh",