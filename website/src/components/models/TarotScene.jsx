import React from 'react'
import { MeshToonMaterial } from 'three'
import { useGLTF } from '@react-three/drei'

export function TarotScene( props ) {
  const { nodes, materials } = useGLTF( '/models/tarot-scene.glb' )

  const createToonMaterial = ( color ) => {
    const toonMaterial = new MeshToonMaterial( { color } )

    return toonMaterial
  }

  return (
    <group { ...props } dispose={ null }>
      <mesh geometry={ nodes[ 'floor-table' ].geometry } material={ materials.table } />
      <mesh geometry={ nodes[ 'candle-tray' ].geometry } material={ materials.tray } />
      <mesh geometry={ nodes[ 'table-cloth' ].geometry } material={ materials.tablecloth } />

      <mesh geometry={ nodes.candle.geometry } material={ materials.candle }>
        <mesh geometry={ nodes.wick.geometry } material={ materials[ 'candle-wick' ] } />
      </mesh>
      <mesh geometry={ nodes.candle002.geometry } material={ materials.candle }>
        <mesh geometry={ nodes.wick002.geometry } material={ materials[ 'candle-wick' ] } />
      </mesh>
      <mesh geometry={ nodes.candle001.geometry } material={ materials.candle }>
        <mesh geometry={ nodes.wick001.geometry } material={ materials[ 'candle-wick' ] } />
      </mesh>

      <mesh geometry={ nodes.card.geometry } material={ materials.card } />
      <mesh geometry={ nodes[ 'card-stack' ].geometry } material={ materials[ 'card-deck' ] } />

      <mesh geometry={ nodes.model.geometry } material={materials.body}>
        <mesh geometry={ nodes.bracelet.geometry } material={materials.bracelet} />
        <mesh geometry={ nodes.buns.geometry } material={materials.hair}>
          <mesh geometry={ nodes.Circle010.geometry } material={ materials[ 'flower-head' ] } />
          <mesh geometry={ nodes.Circle010_1.geometry } material={ materials.petals } />
          <mesh geometry={ nodes.Circle011.geometry } material={ materials[ 'flower-head' ] } />
          <mesh geometry={ nodes.Circle011_1.geometry } material={ materials.petals } />
          <mesh geometry={ nodes.Circle012.geometry } material={ materials[ 'flower-head' ] } />
          <mesh geometry={ nodes.Circle012_1.geometry } material={ materials.petals} />
          <mesh geometry={ nodes.Circle013.geometry } material={ materials[ 'flower-head' ] } />
          <mesh geometry={ nodes.Circle013_1.geometry } material={ materials.petals} />
          <mesh geometry={ nodes.Circle018.geometry } material={ materials[ 'flower-head' ] } />
          <mesh geometry={ nodes.Circle018_1.geometry } material={ materials.petals}  />
        </mesh>
        <mesh geometry={ nodes.buns001.geometry } material={ materials.hair }>
          <mesh geometry={ nodes.Circle001.geometry } material={ materials.petals } />
          <mesh geometry={ nodes.Circle001_1.geometry } material={ materials.petals } />
          <mesh geometry={ nodes.Circle003.geometry } material={ materials[ 'flower-head' ] } />
          <mesh geometry={ nodes.Circle003_1.geometry } material={ materials.petals} />
          <mesh geometry={ nodes.Circle004.geometry } material={ materials[ 'flower-head' ] } />
          <mesh geometry={ nodes.Circle004_1.geometry } material={ materials.petals} />
          <mesh geometry={ nodes.Circle005.geometry } material={ materials[ 'flower-head' ] } />
          <mesh geometry={ nodes.Circle005_1.geometry } material={ materials.petals} />
          <mesh geometry={ nodes.Circle014.geometry } material={ materials[ 'flower-head' ] } />
          <mesh geometry={ nodes.Circle014_1.geometry } material={ materials.petals } />
        </mesh>
        <mesh geometry={ nodes.hair.geometry } material={ materials.hair } />
        <mesh geometry={ nodes.hoops.geometry } material={ materials.hoops } />
        <mesh geometry={ nodes.necklace.geometry } material={ materials.mecklace } />
        <mesh geometry={ nodes.pants.geometry } material={ materials.pants } />
        <mesh geometry={ nodes.shirt.geometry } material={ materials.shirt } />
        <mesh geometry={ nodes.strap.geometry } material={ materials[ 'shirt-laces' ] } />
      </mesh>
    </group>
  )
}

useGLTF.preload( '/models/tarot-scene.glb' )