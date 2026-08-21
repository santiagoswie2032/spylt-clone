import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const VIdeoPinSection = () => {


    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {