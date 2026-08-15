import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger } from 'gsap/all';
import gsap from "gsap";
import MessageSection from './sections/MessageSection';


gsap.registerPlugin(ScrollTrigger);
// write registerPlugin once here and use it everywhere in the project
// and use it everywhere in the project 


const App = () => {
    return (
        <main>
            <NavBar />
            <HeroSection />
            <MessageSection />
            <div className='h-dvh border border-red-500'></div>

        </main>
    )
}


export default App
