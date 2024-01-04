import { Canvas } from '@react-three/fiber';
import { React, Suspense, useEffect, useState} from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Computers = (isMobile) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  return (
    <mesh>
      <hemisphereLight intensity={1} 
      groundColor="black" />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.3} 
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile? 0.40 : .75 }
        position={isMobile? [0, -20, 20.5] : [-90, -40, 0]}  // x, y, z
        rotation={[.5, .5, -0.4]}
      />
    </mesh>


  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  } ,[]);


  return (
    <Canvas
      frameloop = 'demand'
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl = {{ preserveDrawingBuffer: true }}
    > 
     <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 2} 
          //maxPosition={[0, 10, 10]}
          //minPosition={[0, -10, -10]}

        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all/>
    </Canvas>
  );
};

export default ComputersCanvas