import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function SydneyAvatar( props ) {
  const group = React.useRef()
  const { scene, animations } = useGLTF( '/models/SydneyAvatar.glb' )
  const clone = React.useMemo( () => SkeletonUtils.clone( scene ), [ scene ] )
  const { nodes, materials } = useGraph( clone )
  const { actions } = useAnimations( animations, group )

  console.log( actions )
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

useGLTF.preload( '/models/SydneyAvatar.glb' )
