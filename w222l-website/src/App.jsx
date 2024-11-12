import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Intro from './components/Intro'
import Experience from './components/Experience'

export default function App() {
    const [ parentState, setParentState ] = useState( 'intro' )
    const [ isExperienceLoaded, setIsExperienceLoaded ] = useState( false )
    const [ avatarAnimationState, setAvatarAnimationState ] = useState( 'idle' )

    // INTRO:
    const experiencedLoaded = () => {
        setIsExperienceLoaded( true )

        setTimeout( () => {
            setAvatarAnimationState( 'intro' )

            setTimeout( () => {
                console.log( '[+] PARENT STATE CHANGED:: draw card' )
            }, 1000 )
        }, 3000 )
    }

    // USER INTERACTIONS:
    const onExperienceClick = () => {
        console.log( 'clicked meh' )
    }

    return <>
        { parentState === 'intro' && <Intro isExperienceLoaded={ isExperienceLoaded } /> }

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
            <Experience experiencedLoaded={ experiencedLoaded } avatarAnimationState={ avatarAnimationState } />
        </Canvas>
    </>
}