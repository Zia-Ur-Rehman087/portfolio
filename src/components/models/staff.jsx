import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Staff(props) {
  const { nodes, materials } = useGLTF('/models/models/staff-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_1.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_2.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff3_Wizard_Staff3_0_3.geometry}
        material={materials.Wizard_Staff3}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wizard_Staff2_Wizard_Staff2_0.geometry}
        material={materials.Wizard_Staff2}
        position={[-0.041, 0.983, 0.768]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      />
    </group>
  )
}

useGLTF.preload('/models/models/staff-transformed.glb')


rembrandt

city
