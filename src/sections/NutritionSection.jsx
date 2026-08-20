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
                yPercent: 100,
                stagger: 0.02,
                ease: "power2.out",
            })
            .from(paragraphSplit.words, {
                yPercent: 300,
                rotate: 3,
                ease: "power1.inOut",
                duration: 1,
                stagger: 0.01,
            });

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top 80%",
            },
        });

        titleTl.to(".nutrition-text-scroll", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
            ease: "power1.inOut",
        });
    });

    return (
        <section className="nutrition-section">
            <img
                src="/images/slider-dip.png"
                alt=""
                className="w-full object-cover"
            />

            <img src="/images/big-img.png" alt="" className="big-img" />

            <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
                <div className="relative inline-block md:translate-y-20">