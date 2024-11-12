import React from 'react'
import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import gsap from 'gsap'

export default function TarotCard( props ) {
  const group = useRef()
  const emissiveAnimation = useRef( null )
  const { nodes, materials, animations } = useGLTF( '/models/TarotCard.glb' )
  const { actions } = useAnimations( animations, group )

  // useEffect( () => {
  //   materials.BASE.emissive = new THREE.Color(0xED5C9B)

  //   emissiveAnimation.current = gsap.to(materials.BASE, {
  //     emissiveIntensity: 5,
  //     duration: 0.5,
  //     repeat: -1,
  //     yoyo: true,
  //     ease: "sine.inOut",
  //   })

  //   return () => {
  //     if (emissiveAnimation.current) {
  //       emissiveAnimation.current.kill();
  //     }
  //   }
  // } )

  return (
    <group ref={ group } { ...props } dispose={ null }>
      <group name="Scene">
        <mesh name="card" geometry={ nodes.card.geometry } material={ materials.BASE } position={[ 0, 0.415, -0.095 ]} />
      </group>
    </group>
  )
}

useGLTF.preload( '/models/TarotCard.glb' )