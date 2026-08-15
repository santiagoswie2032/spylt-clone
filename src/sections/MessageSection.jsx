import { useGSAP } from '@gsap/react'
import React from 'react'

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
            linesClass: paragraph - line
        });


    })




    return (
        <section className='message-content'>
            <div className='container mx-auto flex-center py-28 relative'>
                <div className='w-full h-full'>
                    <div className='msg-wrapper'>
                        <h1 className='first-message'>Stir Up Your Fearless Past and</h1>
                        <div className='msg-text-scroll'>
                            <div className="bg-light-brown md:pb-5 pb-3 px-5">
                                <h2 className='text-red-brown'>Fuel Up</h2>
                            </div>
                        </div>

                        <h1 className='second-message'>
                            Your Future With Every Gulp Of Perfect Protein Nigga
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