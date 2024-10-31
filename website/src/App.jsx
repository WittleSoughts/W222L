import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import LoadingScreen from './components/LoadingScreen'
import Experience from './components/Experience'

export default function App() {
    const [ isIntroScreen, setIsIntroScreen ] = useState( true )
    const [ showLoadingScreen, setShowLoadingScreen ] = useState( true )
    const [ showIntroAnimation, setShowIntroAnimation ] = useState( false )

    useEffect( () => {

    }, [] )

    const hideLoadingScreen = () => {
        setTimeout( () => {
            setShowLoadingScreen( false )
        }, 2000 )
    }
    const introAnimation = () => {
        hideLoadingScreen()
    }

    return <>
        { isIntroScreen && <LoadingScreen fadeAway={ showLoadingScreen } isLoadingScreen={ setIsIntroScreen } showIntroAnimation={ showIntroAnimation } /> }

        <Canvas
            camera={ {
                position: [ 
                    0, 
                    0.5904769648619101, 
                    0.9978116259269155 
                ]
            } }
        >
            <Experience introAnimation={ introAnimation } />
        </Canvas>
    </>
}