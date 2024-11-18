import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import TarotScene from './models/TarotScene.jsx'
import TarorCardModel from './models/TarotCardModel.jsx'
import SydneyAvatar from './models/sydney-avatar/SydneyAvatar.jsx'

export default function Experience({ 
    experiencedLoaded,  
    animationState,
    cardAnimationState,
    cardClickAnimation 
}) {

    useFrame( ( { camera } ) => {
        camera.lookAt( 0, 0.6, 0 )
    } )

    const { progress } = useProgress()
    useEffect( () => {
        if ( progress === 100 ) {
            experiencedLoaded()
        }
    }, [ progress ] )

    return <>
        <directionalLight position={ [ 0, 1, 0 ] } intensity={ 1 } />
        <ambientLight intensity={ 0.5 } />

        <TarotScene/>
        <TarorCardModel animationState={ cardAnimationState } cardClickAnimation={ cardClickAnimation } />
        <SydneyAvatar animationState={ animationState } />
    </>
}