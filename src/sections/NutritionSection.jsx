import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const [lists, setLists] = useState(nutrientLists);

    useEffect(() => {
        if (isMobile) {
            setLists(nutrientLists.slice(0, 3));
        } else {
            setLists(nutrientLists);
        }
    }, [isMobile]);

    useGSAP(() => {
        const titleSplit = SplitText.create(".nutrition-title", {
            type: "chars",
        });
        const paragraphSplit = SplitText.create(".nutrition-section p", {
            type: "words, lines",
            linesClass: "paragraph-line",
        });

        const contentTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top center",
            },
        });
        contentTl
            .from(titleSplit.chars, {