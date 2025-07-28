import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Simplified floating shapes with proper TypeScript typing
function FloatingShapes() {
  const cubeRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (cubeRef.current) {
      cubeRef.current.rotation.x = t * 0.2;
      cubeRef.current.rotation.y = t * 0.3;
      cubeRef.current.position.y = Math.sin(t) * 0.5;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.1;
      sphereRef.current.rotation.z = t * 0.4;
      sphereRef.current.position.y = Math.cos(t * 1.2) * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={cubeRef} position={[-3, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#3b82f6" wireframe />
      </mesh>
      
      <mesh ref={sphereRef} position={[3, 1, -1]}>
        <sphereGeometry args={[1]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </mesh>
      
      <mesh position={[0, -1, 1]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.8, 0.3, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" metalness={0.6} roughness={0.3} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a0a0a', 1);
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
        
        <Stars 
          radius={50} 
          depth={30} 
          count={2000} 
          factor={2} 
          saturation={0} 
          fade 
          speed={0.5} 
        />
        
        <FloatingShapes />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}