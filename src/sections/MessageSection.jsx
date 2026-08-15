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