import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

export default function Intro({ hideIntro, hideIntroText, isExperienceLoaded }) {
    const [ showIntroText, setShowIntroText ] = useState( true )
    const [ showIntroScreen, setShowIntroScreen ] = useState( true )

    const introScreen = useRef( null )
    const introBanner = useRef( null )

    useEffect( () => {
        if ( isExperienceLoaded === true ) {
            const tl = gsap.timeline({
                onComplete: () => setShowIntroScreen( false )
            })

            tl.to( introScreen.current, { opacity: 0, duration: 2, ease: 'elastic.inOut' } )
              .to( introBanner.current, { opacity: 1, duration: 1.5, ease: 'elastic.inOut' } )
        }
    }, [ isExperienceLoaded ] )

    useEffect( () => {
        if ( hideIntroText === true ) {
            const tl = gsap.timeline({
                onComplete: () => {
                    hideIntro()
                }
            })

            tl.to( introBanner.current, { opacity: 0, duration: 0.5 } )
        }
    }, [ hideIntroText ] )

    return <>
        { showIntroScreen && <div ref={ introScreen } className='fixed top-0 left-0 w-full h-full bg-white z-[10]'></div> }

        { showIntroText && 
            <div className="fixed top-0 left-0 flex items-center justify-center w-full h-[30%] font-sofia z-[10]">
                <div ref={ introBanner } className="opacity-0 text-[#454545]">
                    why are you here?
                </div>
            </div> 
        }
    </>
}