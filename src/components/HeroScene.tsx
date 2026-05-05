import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function FloatingOrb({ position, color, scale = 1, speed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={meshRef} args={[1, 4]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.2}
          metalness={0.7}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </Icosahedron>
    </Float>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#c084fc"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#a855f7" />
        <pointLight position={[-10, -5, -5]} intensity={1} color="#e879f9" />
        <pointLight position={[0, 5, 0]} intensity={0.6} color="#7c3aed" />

        <ParticleField />

        <FloatingOrb position={[-2.5, 0.5, 0]} color="#a855f7" scale={1.3} speed={1} />
        <FloatingOrb position={[2.8, -0.3, -1]} color="#e879f9" scale={1} speed={1.2} />
        <FloatingOrb position={[0, 1.5, -2]} color="#7c3aed" scale={0.8} speed={0.8} />
        <FloatingOrb position={[1.2, -1.8, 1]} color="#c084fc" scale={0.6} speed={1.4} />
      </Suspense>
    </Canvas>
  );
}
