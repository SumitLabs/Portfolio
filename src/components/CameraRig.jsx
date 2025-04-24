import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

const CameraRig = ({ children }) => {
  const group = useRef()

  useFrame((state, delta) => {
    // Position the model for desktop
    const isDesktop = window.innerWidth >= 768
    let targetPosition = [0, 0, 6]
    if(isDesktop) {
      targetPosition = [0, 0, 6]
    }

    // Set model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta)

    // Enhanced rotation control
    const targetRotationX = state.pointer.y * 0.5
    const targetRotationY = -state.pointer.x * 0.5

    easing.dampE(
      group.current.rotation,
      [targetRotationX, targetRotationY, 0],
      0.15,
      delta
    )
  })

  return <group ref={group}>{children}</group>
}

export default CameraRig