import { useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import TarotScene from './models/TarotScene.jsx'
import TarotCard from './models/TarotCard.jsx'
import SydneyAvatar from './models/SydneyAvatar.jsx'

export default function Experience({ experiencedLoaded, avatarAnimationState }) {
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
        <TarotCard/>
        <SydneyAvatar animationState={ avatarAnimationState }/>
    </>
}