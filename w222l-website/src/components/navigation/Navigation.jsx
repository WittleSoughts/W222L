import { useMemo, useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import NavigationCircle from './components/NavigationCircle.jsx'
import btnListArray from '../../data/navigation.js'

export default function Navigation({ showNavigation, toggleContentCard }) {
    const navigationContainer = useRef()

    const btnList = useMemo( () => {
        return btnListArray
    }, [] )

    useEffect( () => {
        if ( showNavigation ) {
            gsap.fromTo( navigationContainer.current, { scale: 0 }, { scale: 1, duration: 1.5, ease: 'elastic.out( 1, 0.3 )' } )
        } else {
            const tl = gsap.timeline({
                 
            })

            tl.to( navigationContainer.current, {
                scale: 0,
                duration: 0.25
            } )
        }
    }, [ showNavigation ] )

    return <>
        <div 
            ref={ navigationContainer } 
            className='fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center z-50'
        >
           
            <NavigationCircle btnList={ btnList } toggleContentCard={ toggleContentCard } />

        </div>
    </>
}