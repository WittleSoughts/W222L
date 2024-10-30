export default function InfinitePlane() {
    return <>
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial color="#f7f5f5" />
      </mesh>
    </>
  }