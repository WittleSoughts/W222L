import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'

export default function App() {
    return <>
        <Canvas
            camera={ {
                position: [ 
                    0, 
                    0.5904769648619101, 
                    0.9978116259269155 
                ]
            } }
        >
            <Experience/>
        </Canvas>
    </>
}