import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center, OrbitControls } from '@react-three/drei'
import CameraRig from './CameraRig'
import HeroSectionModel from './HeroSectionModel'

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 8], fov: 12 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <Environment preset="city" />
      <CameraRig>
        <Center>
          <HeroSectionModel />
        </Center>
      </CameraRig>
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        minDistance={6}
        maxDistance={8}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.5}
        autoRotate={false}
      />
    </Canvas>
  )
}

export default CanvasModel