import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import BeatingHeart from './BeatingHeart'
import '../styles/loading-screen.css'

export default function LoadingScreen( { fadeAway, isLoadingScreen } ) {
    const loadingScreenRef = useRef()
    useEffect( () => {
        if ( fadeAway === false ) {
            gsap.to( loadingScreenRef.current, {
                opacity: 0,
                duration: 1.5,
                onComplete: () => {
                    isLoadingScreen( false )
                }
            } )
        }
    }, [ fadeAway ] )

    return <>
        <div ref={ loadingScreenRef } className='loading-screen-container'>
            <div className='loading-screen-content'>
                
                <BeatingHeart/>

                <div className='loading-text'>
                    loading...
                </div>

            </div>
        </div>
    </>
}