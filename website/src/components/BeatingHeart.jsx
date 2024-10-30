import { useEffect } from 'react'
import { gsap } from 'gsap'
import HEART from '/images/heart.svg'

export default function BeatingHeart() {
    useEffect( () => {
        const heart = document.getElementById( 'heart' )
        gsap.to( heart, {
            scale: 1.2,
            duration: 0.2, 
            yoyo: true, 
            repeat: -1, 
            ease: "power1.inOut"
        } )
    } )

    return <>
        <div className='loading-icon'>
            <img id='heart' src={ HEART } alt='pink heart svg' />
        </div>
    </>
}