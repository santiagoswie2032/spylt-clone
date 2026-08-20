import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import gsap from "gsap";
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';
import FlavorSlider from './components/FlavorSlider';
import { useGSAP } from '@gsap/react';
import NutritionSection from './sections/NutritionSection';



gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// write registerPlugin once here and use it everywhere in the project
// and use it everywhere in the project 


const App = () => {

    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 3,
            effects: true,
        });
    });


    return (
        <main>
            <NavBar />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HeroSection />
                    <MessageSection />
                    <FlavorSection />
                    <NutritionSection />
                </div>
            </div>



        </main>
    )
}


export default App
