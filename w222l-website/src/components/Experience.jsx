import { useFrame } from '@react-three/fiber'
import TarotScene from './models/TarotScene.jsx'
import TarotCard from './models/TarotCard.jsx'
import SydneyAvatar from './models/SydneyAvatar.jsx'

export default function Experience() {
    useFrame( ( { camera } ) => {
        camera.lookAt( 0, 0.6, 0 )
    } )

    return <>
        <directionalLight position={ [ 0, 1, 0 ] } intensity={ 1 } />
        <ambientLight intensity={ 0.5 } />

        <TarotScene/>
        <TarotCard/>
        <SydneyAvatar/>
    </>
}