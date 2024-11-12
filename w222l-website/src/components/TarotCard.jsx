import { useEffect, useRef,  useState } from 'react'
import gsap from 'gsap'
import tarotCardData from '../data/tarotCards'
import '../styles/tarot-card.css'

export default function TarotCard({ showTarotCardHome, drawCardTransition }) {
    const [ tarotName, setTarotName ] = useState( '' )
    const [ tarotMeaning, setTarotMeaning ] = useState( '' )

    const tarotCardContainer = useRef( null )
    const tarotCardContent = useRef( null )
    const tarotNameText = useRef( null )
    const tarotMeaningText = useRef( null )
    const continueText = useRef( null )

    const handleContinueAction = () => {
        const tl = gsap.timeline({
            onComplete: () => drawCardTransition()
        })

        tl.to( continueText.current, { 
            opacity: 0, 
            duration: 0.25
        } )
          .to( tarotCardContainer.current, { 
            scale: 0, 
            duration: 0.5,
            ease: 'elastic.out'
        } )
    }

    useEffect( () => {
        if ( showTarotCardHome ) {
            const tl = gsap.timeline()

            tl.to( tarotCardContainer.current, {
                scale: 1,
                duration: 1.3,
                ease: 'elastic.out( 1, 0.3 )'
            } )
              .to( tarotNameText.current, {
                opacity: 1,
                duration: 0.3
            } )
              .to( tarotMeaningText.current, {
                opacity: 1,
                duration: 0.3
            } )
              .to( continueText.current, {
                opacity: 1,
                duration: 0.5
            } )
        }
    }, [ showTarotCardHome ] )

    useEffect( () => {
        const randomIndex = Math.floor( Math.random() * tarotCardData.length )
        const chosenCard = tarotCardData[ randomIndex ]

        setTarotName( chosenCard.name )
        setTarotMeaning( chosenCard.meaning )
    }, [] )

    return <>
        <div ref={ tarotCardContainer } className="tarot-card-container">
            <div ref={ tarotCardContent } className='tarot-card'>

                <div ref={ tarotNameText } className='name'>{ tarotName }</div>

                <div ref={ tarotMeaningText } className='meaning'>{ tarotMeaning }</div>

            </div>
        </div>

        <div className='continue-container'>
            <div ref={ continueText } className='continue-text' onClick={ handleContinueAction }>
                click here to continue
            </div>
        </div>
    </>
}