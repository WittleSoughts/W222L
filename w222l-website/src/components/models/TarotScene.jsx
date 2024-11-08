import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function TarotScene( props ) {
  const { nodes, materials } = useGLTF( '/models/TarotScene.glb' )
  return (
    <group { ...props } dispose={ null }>
      <mesh name="floor-table" geometry={ nodes[ 'floor-table' ].geometry } material={ materials.BASE } />
    </group>
  )
}

useGLTF.preload( '/models/TarotScene.glb' )
