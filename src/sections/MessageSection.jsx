import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText } from 'gsap/all'
import gsap from "gsap"


const MessageSection = () => {

    useGSAP(() => {
        const firstmsgSplit = SplitText.create('.first-message', {
            type: 'words',
        });

        const secmsgSplit = SplitText.create('.second-message', {
            type: 'words',
        });

        const paragraphSplit = SplitText.create('.message-content p', {
            type: 'words, lines',
            linesClass: "paragraph-line"
        });

        gsap.to(firstmsgSplit.words, {
            color: "#faeade",
            stagger: 0.2,
            ease: "none",
            scrollTrigger: {
                trigger: '.message-content',
                start: "top center",
                end: "40% center",       //giving scroll more distance
                scrub: true,               // 1s numeric scrub for buttery lag


            }

        });

        gsap.to(secmsgSplit.words, {
            color: "#faeade",
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
                trigger: '.second-message',
                start: "top center",
                end: "bottom center",       //giving scroll more distance
                scrub: true,               // 1s numeric scrub for buttery lag


            }

        });

        const revealTl = gsap.timeline({
            delay: 0,
            scrollTrigger: {
                trigger: '.msg-text-scroll',
                start: "top 60%",


            }
        });

        revealTl.to('.msg-text-scroll', {
            duration: 1,

            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
        })


        const paragraphTl = gsap.timeline({
            scrollTrigger: {                         // scroll trigger will only have trigger: , start: , end: 
                trigger: '.message-content p',
                start: 'top 70%',

            }
        });

        paragraphTl.from(paragraphSplit.words, {
            duration: 1,                            // how long should it last
            stagger: 0.02,                          // duration between popping up of each word
            rotate: 15,                              // starts from a 3 degree rotation back to 0 deg to give that rotating effect
            ease: 'power1.inOut',                   // smooth effect
            yPercent: 300                           // where should it start from ? remember, its a reveal animation 
        })                                          // so you have to hide it first, then it reveals itself


    });





    return (
        <section className='message-content'>
            <div className='container mx-auto flex-center py-28 relative'>
                <div className='w-full h-full'>
                    <div className='msg-wrapper'>
                        <h1 className='first-message'>Stir Up Your Fearless Past and</h1>

                        <div style={{
                            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                        }}
                            className='msg-text-scroll mt-6 md:mt-10'>
                            <div className="bg-light-brown md:pb-5 pb-3 px-5">
                                <h2 className='text-red-brown'>Fuel Up Twin</h2>
                            </div>
                        </div>

                        <h1 className='second-message'>
                            Your Future With Every Gulp Of Perfect Protein
                        </h1>
                    </div>
                    <div className="flex-center md:mt-20 mt-10">
                        <div className="max-w-md px-10 flex-center overflow-hidden">
                            <p>
                                Rev up your rebel spirit and feeed the adventure of life with splyt,
                                where you're one chug away from epic nostalgia and fearless fun.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MessageSection