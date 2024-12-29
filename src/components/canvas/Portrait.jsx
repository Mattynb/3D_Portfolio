import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Portrait = () => {
  const portrait = useGLTF('../portrait.glb');
  
  return (
    <mesh>
        <ambientLight intensity={1}/>
          <primitive
            object={portrait.scene}
            scale={8}
            position-y={-3}
          />
    </mesh>
  )
}

const PortraitCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ antialias:true, preserveDrawingBuffer: false }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          autoRotate={false}
          //autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Portrait />
      </Suspense>
    </Canvas>
  )
}

export default PortraitCanvas