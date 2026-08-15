import { useGSAP } from '@gsap/react'
import React from 'react'

const MessageSection = () => {

    useGSAP(() => {
        const firstmsgSplit = SplitText.create('.first-message', {
            type: 'words',
        });
