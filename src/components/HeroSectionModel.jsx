import React, { useEffect } from 'react'

import { useGLTF } from '@react-three/drei'

const HeroSectionModel = () => {
  const { scene, nodes, materials } = useGLTF('/SumitKumarSharma_PC.glb')

  useEffect(() => {
    console.log('Loaded Model:', { scene, nodes, materials })
  }, [scene, nodes, materials])

  return (
    <group>
      <primitive 
        object={scene} 
        scale={0.17}
        position={[0.27, -0.1, 0]}
        rotation={[0, -Math.PI / 4, 0]}

        enableZoom={true}
        enablePan={true}
        enableRotate={true}
      />
    </group>
  )
}

useGLTF.preload('/SumitKumarSharma_PC.glb')
export default HeroSectionModel