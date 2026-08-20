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