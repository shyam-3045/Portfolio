
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

const TechIcon = ({ position, text, color }: { position: [number, number, number], text: string, color: string }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Text
        position={[position[0], position[1] - 1, position[2]]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Float>
  );
};

const TechIcons3D = () => {
  const techs = [
    { name: "React", color: "#61DAFB", position: [-3, 2, 0] as [number, number, number] },
    { name: "Next.js", color: "#000000", position: [0, 2, 0] as [number, number, number] },
    { name: "TypeScript", color: "#3178C6", position: [3, 2, 0] as [number, number, number] },
    { name: "Node.js", color: "#339933", position: [-3, 0, 0] as [number, number, number] },
    { name: "MongoDB", color: "#47A248", position: [0, 0, 0] as [number, number, number] },
    { name: "AWS", color: "#FF9900", position: [3, 0, 0] as [number, number, number] },
  ];

  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} color="#667eea" />
        
        {techs.map((tech, index) => (
          <TechIcon
            key={tech.name}
            position={tech.position}
            text={tech.name}
            color={tech.color}
          />
        ))}
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default TechIcons3D;
