import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import '../styles/intro-banner.css'

export default function IntroBanner() {
    const introBanner = useRef( null )

    useEffect( () => {
        gsap.to( introBanner.current, {
            opacity: 1,
            duration: 1.5,
            delay: .75
        } )
    }, [] )

    return <>
        <div className="intro-banner-container">
            <div ref={ introBanner } className="intro-banner-content">
                why are you here?
            </div>
        </div>
    </>
}