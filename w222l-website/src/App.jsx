import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import IntroBanner from './components/IntroBanner'
import ClickScreen from './components/ui/ClickScreen'

export default function App() {
    const [ webState, setWebState ] = useState( 'intro' )
    const [ indicatorState, setIndicatorState ] = useState( 'none' )

    const toggleIndicators = ( newState ) => {
        setTimeout( () => {
            setIndicatorState( newState )
        }, 500 )
    }

    return <>
        { indicatorState === 'click' && <ClickScreen/> }

        { webState === 'intro' && <IntroBanner/> }

        <Canvas
            camera={ {
                position: [ 
                    0, 
                    0.6, 
                    0.85 
                ]
            } }
        >
            <Experience toggleIndicators={ toggleIndicators }/>
        </Canvas>
    </>
}