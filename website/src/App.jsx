import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import LoadingScreen from './components/LoadingScreen'
import Experience from './components/Experience'

export default function App() {
    const [ isIntroScene, setIsIntroScreen ] = useState( true )

    const hideLoader = () => {
        setTimeout( () => {
            console.log( '[+] SCENE LOADED::' )
            
            setIsIntroScreen( false )
        }, 3000 )
    }

    return <>
        { isIntroScene && <LoadingScreen/> }

        <Canvas
            camera={ {
                position: [ 
                    0, 
                    0.5904769648619101, 
                    0.9978116259269155 
                ]
            } }
        >
            <Experience hideLoader={ hideLoader } />
        </Canvas>
    </>
}