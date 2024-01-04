import { Canvas } from '@react-three/fiber';
import { React, Suspense, useEffect, useState} from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ampli = (isMobile) => {
    const ampli = useGLTF('./desktop_pc/ampli_block.glb');
    
    return (
      <mesh>
        <hemisphereLight intensity={1.4} 
        groundColor="black" />
        <spotLight 
          position={[-10, -10, -10]}
          angle={.3} 
          penumbra={2}
          intensity={10}
        />
        <pointLight intensity={1} />
        <primitive
          object={ampli.scene}
          scale={.80}
          position={[0, -53, 30]}
          rotation={[0.8, -.1, 0]}
        />
      </mesh>
  
  
    );
  };
  
  const AmpliCanvas = () => {
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
        camera={{position: [0, 0, 0], fov:50}}
        gl = {{ preserveDrawingBuffer: true }}
      > 
       <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false} 
            enableRotate={true}
            maxPolarAngle={Math.PI/2} 
            minPolarAngle={Math.PI/2}
            maxAzimuthAngle={Math.PI/4}
            minAzimuthAngle={-Math.PI/4}
          />
          <Ampli isMobile={isMobile} />
        </Suspense>
  
        <Preload all/>
      </Canvas>
    );
  };
  
  export default AmpliCanvas