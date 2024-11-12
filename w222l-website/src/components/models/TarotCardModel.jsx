import React from 'react'
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import gsap from 'gsap'

export default function TarorCardModel({ animationState, cardClickAnimation, ...props }) {
  const [ currentAction, setCurrentAction ] = useState( 'drawCard' )

  const group = useRef()
  const emissiveAnimation = useRef( null )
  const { nodes, materials, animations } = useGLTF( '/models/TarotCard.glb' )
  const { actions } = useAnimations( animations, group )

  useEffect( () => {
    if ( cardClickAnimation ) {
      materials.BASE.emissive = new THREE.Color(0xb3b3b3)

      emissiveAnimation.current = gsap.to(materials.BASE, {
        emissiveIntensity: 5,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    } else if ( emissiveAnimation.current ) {
      emissiveAnimation.current.kill()
      emissiveAnimation.current = null
      materials.BASE.emissiveIntensity = 0
    }

    return () => {
      if (emissiveAnimation.current) {
        emissiveAnimation.current.kill();
      }
    }
  }, [ cardClickAnimation, materials.BASE ] )

  useEffect( () => {
    if ( actions[ currentAction ] ) {
      switch ( animationState ) {
        case 'drawCard':
          actions[ currentAction ].reset().fadeIn( 0.5 ).setLoop( THREE.LoopOnce ).play().clampWhenFinished = true
          break;
        case 'draw-card-reverse':
          actions[currentAction].fadeOut(0.5)

          setTimeout(() => {
            actions[currentAction].time = actions[currentAction].duration
            actions[currentAction].setEffectiveTimeScale(-1) 
            actions[currentAction].play() 
          }, 500)
          break
        default:
          break
      }
    }
  }, [ currentAction, actions, animationState ] )

  return (
    <group ref={ group } { ...props } dispose={ null }>
      <group name="Scene">
        <mesh name="card" geometry={ nodes.card.geometry } material={ materials.BASE } position={[ 0, 0.415, -0.095 ]} />
      </group>
    </group>
  )
}

useGLTF.preload( '/models/TarotCard.glb' )