import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function IntroCard({ tarotData, isActive }) {
    const [ tarotName, setTarotName ] = useState( '' )
    const [ tarotMeaning, setTarotMeaning ] = useState( '' )

    const tarotNameText = useRef( null )
    const tarotMeaningText = useRef( null )

    useEffect( () => {
        const randomIndex = Math.floor( Math.random() * tarotData.length )
        const chosenCard = tarotData[ randomIndex ]

        setTarotName( chosenCard.name )
        setTarotMeaning( chosenCard.meaning )
    }, [] )

    useEffect( () => {
        if ( isActive ) {
            const tl = gsap.timeline()

            tl.to( tarotNameText.current, {
                opacity: 1,
                duration: 0.3,
                delay: 1.5
            } )
            .to( tarotMeaningText.current, {
                opacity: 1,
                duration: 0.3,
            } )
        }
    } )

    return <>
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div ref={ tarotNameText } className='font-sofia text-2xl mb-4 opacity-0' >{ tarotName }</div>

            <div ref={ tarotMeaningText } className='text-center opacity-0' >{ tarotMeaning }</div>
        </div>
    </>
}