import BeatingHeart from './BeatingHeart'
import '../styles/loading-screen.css'

export default function LoadingScreen() {
    return <>
        <div className='loading-screen-container'>
            <div className='loading-screen-content'>
                
                <BeatingHeart/>

                <div className='loading-text'>
                    loading...
                </div>

            </div>
        </div>
    </>
}