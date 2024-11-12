import { useState, useEffect, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import Intro from './components/Intro'
import TarotCard from './components/TarotCard'
import Experience from './components/Experience'

export default function App() {
    const [ parentState, setParentState ] = useState( 'intro' )
    const [ isExperienceLoaded, setIsExperienceLoaded ] = useState( false )
    const [ avatarAnimationState, setAvatarAnimationState ] = useState( 'idle' )
    const [ cardAnimationState, setCardAnimationState ] = useState( 'idle' )

    const [ showIntro, setShowIntro ] = useState( true )
    const [ hideIntroText, setHideIntroText ] = useState( false )
    const [ mountTarotCardHome, setMountTaroCardHome ] = useState( false )
    const [ showTarotCardHome, setShowTarotCardHome ] = useState( false )

    const [ clickNeeded, setClickNeeded ] = useState( false )
    const [ cardClickAnimation, setCardClickAnimation ] = useState( false )

    // INTRO:
    const experiencedLoaded = () => {
        setIsExperienceLoaded( true )

        setTimeout( () => {
            setAvatarAnimationState( 'intro' )

            setTimeout( () => {
                introTransition()
            }, 1000 )
        }, 1500 )
    }

    const introTransition = () => {
        setClickNeeded( true )
        setCardClickAnimation( true )
    }

    const hideIntro = () => {
        if ( showIntro ) {
            setShowIntro( false )
            console.log( '[+] INTRO COMPONENT UNMOUNTED::' )
        }
    }

    // DRAW CARD:
    const handleDrawCard = () => {
        setCardAnimationState( 'drawCard' )
        setShowTarotCardHome( true )
    }

    const drawCardTransition = () => {
        setCardAnimationState( 'draw-card-reverse' )
        setAvatarAnimationState( 'intro-reverse' )

        if ( mountTarotCardHome ) {
            setMountTaroCardHome( false )
            console.log( '[+] DRAW CARD COMPONENT UNMOUNTED::' )
        }
    }

    // USER INTERACTIONS:
    const onExperienceClick = () => {
        if ( clickNeeded && parentState === 'intro' ) {
            setHideIntroText( true )
            setCardClickAnimation( false )
            setParentState( 'draw-card' )
            setMountTaroCardHome( true )
        }
    }

    useEffect( () => {
        if ( parentState === 'draw-card' ) {
            handleDrawCard()
        }
    }, [ parentState ] )

    return <>
        { showIntro &&
            <Intro 
                hideIntro={ hideIntro }
                hideIntroText={ hideIntroText } 
                isExperienceLoaded={ isExperienceLoaded } 
            />
        }

        { mountTarotCardHome &&
            <TarotCard 
                showTarotCardHome={ showTarotCardHome } 
                drawCardTransition={ drawCardTransition }
            />
        }

        <Canvas
            camera={ {
                position: [ 
                    0, 
                    0.6, 
                    0.85 
                ]
            } }
            onClick={ onExperienceClick }
        >
            <Experience 
                experiencedLoaded={ experiencedLoaded } 
                avatarAnimationState={ avatarAnimationState } 
                cardAnimationState={ cardAnimationState }
                cardClickAnimation={ cardClickAnimation }
            />
        </Canvas>
    </>
}