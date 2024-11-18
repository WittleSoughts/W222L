import { useState, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import Navigation from './components/navigation/Navigation.jsx'
import ContentCard from './components/content-cards/ContentCard.jsx'
import Intro from './components/Intro'
import Experience from './components/Experience'
import tarotCardData from './data/tarotCards.js'

export default function App() {
    const [ parentState, setParentState ] = useState( 'intro' )
    const [ isExperienceLoaded, setIsExperienceLoaded ] = useState( false )
    const [ avatarAnimationState, setAvatarAnimationState ] = useState( 'idle' )
    const [ cardInformation, setCardInformation ] = useState( 'intro' )
    const [ cardAnimationState, setCardAnimationState ] = useState( 'idle' )

    const [ showIntro, setShowIntro ] = useState( true )
    const [ hideIntroText, setHideIntroText ] = useState( false )
    const [ mountTarotCardHome, setMountTarotCardHome ] = useState( false )
    const [ showContentCard, setShowContentCard ] = useState( false )

    const [ showNavigation, setShowNavigation ] = useState( true )

    const [ clickNeeded, setClickNeeded ] = useState( false )
    const [ cardClickAnimation, setCardClickAnimation ] = useState( false )

    const tarotData = useMemo( () => {
        return tarotCardData
    }, [] )

    // [ INITIAL LOAD ]
    const handleInitialLoad = () => {
        setIsExperienceLoaded( true )

        handleIntro()
    }

    // [ INITIAL LOAD:: end ]

    // [ INTRO ]
    const handleIntro = () => {
        const introTimeLength = 3000
        setTimeout(() => {

            setAvatarAnimationState( 'intro' )

            setTimeout( () => {
                setClickNeeded( true )
                setCardClickAnimation( true )
            }, 1500 );

        }, introTimeLength );
    }

    const hideIntro = () => {
        if ( showIntro ) {
            setShowIntro( false )
            console.log( '[+] INTRO COMPONENT UNMOUNTED::' )
        }
    }
    // [ INTRO:: end ]

    // DRAW CARD:
    const handleDrawCard = () => {
        setShowContentCard( true )
        setCardAnimationState( 'drawCard' )
    }

    const drawCardTransition = () => {
        setCardAnimationState( 'draw-card-reverse' )
        setAvatarAnimationState( 'intro-reverse' )

        setTimeout( () => {
            handleNavigation()
        }, 1000 )
    }

    // NAVIGATION
    const handleNavigation = () => {
        setParentState( 'navigation' )
    }

    const navigationToCard = ( cardLabel ) => {
        setCardInformation( cardLabel )
        setShowNavigation( false )
        
        setTimeout( () => {
            setShowContentCard( true )
        }, 500 );
    }
    const cardToNavigation = () => {
        setShowNavigation( true )
    }

    // USER INTERACTIONS:
    const onExperienceClick = () => {
        if ( clickNeeded && parentState === 'intro' ) {
            setHideIntroText( true )
            setCardClickAnimation( false )

            handleDrawCard()
        }
    }

    return <>
        <div className='fixed inset-0 w-full h-full font-sofia_sans uppercase font-bold z-[1]'>

            { parentState === 'navigation' && <Navigation showNavigation={ showNavigation } toggleContentCard={ navigationToCard } /> }

            { showIntro &&
                <Intro 
                    hideIntro={ hideIntro }
                    hideIntroText={ hideIntroText } 
                    isExperienceLoaded={ isExperienceLoaded } 
                />
            }

            
            <ContentCard 
                parentState={ parentState }
                cardInformation={ cardInformation }
                tarotData={ tarotCardData }
                showContentCard={ showContentCard }
                setShowContentCard={ setShowContentCard } 
                drawCardTransition={ drawCardTransition }
                cardToNavigation={ cardToNavigation }
            />
            

            <div className='fixed inset-0 w-full h-full'>
                <Canvas
                    camera={ {
                        position: [ 
                            0, 
                            0.6, 
                            0.85 
                        ]
                    } }
                    onClick={ onExperienceClick }
                >
                    <Experience 
                        experiencedLoaded={ handleInitialLoad }  
                        animationState={ avatarAnimationState }
                        cardAnimationState={ cardAnimationState }
                        cardClickAnimation={ cardClickAnimation }
                    />
                </Canvas>
            </div>

        </div> 
    </>
}