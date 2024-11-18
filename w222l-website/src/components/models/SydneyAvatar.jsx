import * as THREE from 'three'
import React, { useEffect, useState } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function SydneyAvatar( { animationState, ...props } ) {
  const [ currentAction, setCurrentAction ] = useState( 'intro' )

  const group = React.useRef()
  const { scene, animations } = useGLTF( '/models/SydneyAvatar-transformed.glb' )
  const clone = React.useMemo( () => SkeletonUtils.clone( scene ), [ scene ] )
  const { nodes, materials } = useGraph( clone )
  const { actions } = useAnimations( animations, group )

  useEffect( () => {  
    if ( actions[ currentAction ] ) {
      switch ( animationState ) {
        case 'intro':
          actions[ currentAction ].reset().fadeIn( 0.5 ).setLoop( THREE.LoopOnce ).play().clampWhenFinished = true
          break
        case 'intro-reverse':
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

    return () => actions[ currentAction ]?.fadeOut( 0.5 )
  }, [ animationState ] )

  return (
    <group ref={ group } { ...props } dispose={ null }>
      <group name="Scene">
        <group name="model-RIG">
          <primitive object={ nodes.spine } />
        </group>
        <skinnedMesh name="hair" geometry={ nodes.hair.geometry } material={ materials.Base } skeleton={ nodes.hair.skeleton } />
        <skinnedMesh name="hoops" geometry={ nodes.hoops.geometry } material={ materials.BASE } skeleton={ nodes.hoops.skeleton } />
        <skinnedMesh name="model" geometry={ nodes.model.geometry } material={ materials.Base } skeleton={ nodes.model.skeleton } />
        <skinnedMesh name="necklace" geometry={ nodes.necklace.geometry } material={ materials.BASE } skeleton={ nodes.necklace.skeleton } />
        <skinnedMesh name="pants" geometry={ nodes.pants.geometry } material={ materials.Base } skeleton={ nodes.pants.skeleton } />
        <skinnedMesh name="shirt" geometry={ nodes.shirt.geometry } material={ materials.Base } skeleton={ nodes.shirt.skeleton } />
        <skinnedMesh name="strap" geometry={ nodes.strap.geometry } material={ materials.BASE}  skeleton={ nodes.strap.skeleton } />
      </group>
    </group>
  )
}

useGLTF.preload( '/models/SydneyAvatar-transformed.glb' )
