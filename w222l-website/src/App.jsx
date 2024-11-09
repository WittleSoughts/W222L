import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import IntroBanner from './components/IntroBanner'

export default function App() {
    return <>
        <IntroBanner/>

        <Canvas
            camera={ {
                position: [ 
                    0, 
                    0.6, 
                    0.85 
                ]
            } }
        >
            <Experience/>
        </Canvas>
    </>
}