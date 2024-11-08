import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function TarotCard( props ) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF( '/models/TarotCard.glb' )
  const { actions } = useAnimations( animations, group )

  return (
    <group ref={ group } { ...props } dispose={ null }>
      <group name="Scene">
        <mesh name="card" geometry={ nodes.card.geometry } material={ materials.BASE } position={[ 0, 0.415, -0.095 ]} />
      </group>
    </group>
  )
}

useGLTF.preload( '/models/TarotCard.glb' )