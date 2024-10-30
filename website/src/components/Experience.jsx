import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { TarotScene } from './models/TarotScene.jsx'
import InfinitePlane from './models/InfinitePlane.jsx'

export default function Experience() {
    useFrame( ( { camera } ) => {
        camera.lookAt( 0, 0.5904769648619101, 0 )
    } )

    return <>
        <OrbitControls/>

        <directionalLight position={ [ 0, 1, 0 ] } intensity={ 1 } />
        <ambientLight intensity={ 0.5 } />

        <TarotScene/>
        <InfinitePlane/>
    </>
}