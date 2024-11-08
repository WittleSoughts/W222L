import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'

export default function App() {
    return <>
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