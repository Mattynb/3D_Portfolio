import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Portrait = () => {
  const portrait = useGLTF('../portrait.glb');

  return (
    <mesh>
        <hemisphereLight intensity={1.4} 
        groundColor="white" />
    
        <pointLight intensity={1} />
            <primitive
            object={portrait.scene}
            scale={8}
            position-y={-3}
            rotation-y={0}
            position-x={0}
            />
    </mesh>
  )
}

const PortraitCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      className='w-full h-full'
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          autoRotate={false}
          autoRotateSpeed={0.5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Portrait />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default PortraitCanvas