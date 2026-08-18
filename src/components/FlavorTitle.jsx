import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import SplitText from "gsap/SplitText.js";


const FlavorTitle = () => {

    useGSAP(() => {
        const firstText = SplitText.create('.first-text-split h1', {
            type: "chars",
        });

        const secText = SplitText.create('.second-text-split h1', {
            type: "chars",
        });
