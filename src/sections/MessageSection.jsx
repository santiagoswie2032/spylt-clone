import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText } from 'gsap/all'
import gsap from "gsap"


const MessageSection = () => {

    useGSAP(() => {
        const firstmsgSplit = SplitText.create('.first-message', {
            type: 'words',
        });