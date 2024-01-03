import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'
import CanvasLoader from '../Loader';
import { tripguide } from '../../assets';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={1.4}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color={'#fff8eb'}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading/> 
        <Decal  
          position={[0,0,1]}
          rotation={[2*Math.PI, 0, 6.25]}
          flatShading
          map={decal}
          />       
      </mesh>    
    </Float>
  )
}

const BallCanvas = ({ icon, name }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='w-full h-full transition duration-500 ease-in-out' onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
      <Canvas
        frameLoop = 'demand'
        gl = {{ preserveDrawingBuffer: true }}> 
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false}/>
          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all/>
      </Canvas>
      {toggle ? 
        <p className='transition duration-350 ease-in-out text-white text-[14px] font-semibold text-center'>
          {name}
        </p> :<p/> }
    </div>
    
  )
}
export default BallCanvas