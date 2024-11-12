import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import '../styles/intro.css'

export default function Intro({ isExperienceLoaded }) {
    const introScreen = useRef( null )
    const introBanner = useRef( null )

    useEffect( () => {
        if ( isExperienceLoaded === true ) {
            const tl = gsap.timeline()

            tl.to( introScreen.current, { opacity: 0, duration: 1.5 } )
              .to( introBanner.current, { opacity: 1, duration: 1.5 } )
        }
    }, [ isExperienceLoaded ] )

    return <>
        <div ref={ introScreen } className='intro-screen'></div>

        <div className="intro-banner-container">
            <div ref={ introBanner } className="intro-banner-content">
                why are you here?
            </div>
        </div>
    </>
}