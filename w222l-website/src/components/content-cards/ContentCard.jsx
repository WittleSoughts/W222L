import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import IntroCard from './components/IntroCard.jsx'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe.jsx'
import Blog from './components/Blog.jsx'
import ContactMe from './components/ContactMe.jsx'
import Learn from './components/Learn.jsx'
import TarotReadings from './components/TarotReadings.jsx'

export default function ContentCard({ 
    parentState, 
    cardInformation,
    tarotData,
    showContentCard, 
    setShowContentCard, 
    drawCardTransition, 
    cardToNavigation 
}) {
    const [ isActive, setIsActive ] = useState( false )

    const tarotCardContainer = useRef( null )
    const continueText = useRef( null )

    const cardComponents = {
        home: () => <Home />,
        intro: () => <IntroCard tarotData={ tarotData } isActive={ isActive } />,
        about_me: () => <AboutMe />,
        blog: () => <Blog />,
        contact_me: () => <ContactMe />,
        learn: () => <Learn />,
        tarot_readings: () => <TarotReadings />
    }

    const hideCard = () => {
        const tl = gsap.timeline({
            onComplete: () => {
                setShowContentCard( false )

                if ( parentState === 'intro' ) {
                    drawCardTransition()
                } else if ( parentState === 'navigation' ) {
                    cardToNavigation()
                }
            }
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
        if ( showContentCard ) {
            const tl = gsap.timeline({
                onComplete: setIsActive( true )
            })

            tl.to( tarotCardContainer.current, {
                scale: 1,
                duration: 1.3,
                ease: 'elastic.out( 1, 0.3 )'
            } )
            .to( continueText.current, {
                opacity: 1,
                duration: 0.3
            } )
        } 
    }, [ showContentCard ] )

    return <>
        <div className={ `fixed top-0 left-0 flex items-center justify-center w-full h-full text-[#313131] transform z-[100]
                           ${ showContentCard ? 'z-60 pointer-events-auto' : 'z-40 pointer-events-none' }` }
        >
            <div 
                ref={ tarotCardContainer } 
                className="flex flex-col items-center justify-center p-4 w-[320px] h-[550px] bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/30 overflow-hidden scale-0"
            >
                { cardComponents[ cardInformation ] ? cardComponents[ cardInformation ]() : null }
            </div>

            <div className='flex items-center justify-center fixed bottom-0 left-0 w-full h-[20%] text-xs z-[100]'>
                <div ref={ continueText } className='opacity-0 cursor-pointer' onClick={ hideCard }>
                    click here to continue
                </div>
            </div>
        </div>
    </>
}