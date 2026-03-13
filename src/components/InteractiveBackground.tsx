"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function DataPoints({ count = 2000, color = "#ff6e1a", radius = 2.5 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random points in a sphere that looks like a data cluster
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius + Math.random() * 1.5; // Spread
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count, radius]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Slow rotation for ambient "tech" feel
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    pointsRef.current.rotation.z = state.clock.elapsedTime * 0.02;

    // React slightly to mouse movements
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;
    
    // Smoothly interpolate to target rotation
    pointsRef.current.rotation.x += (mouseY - pointsRef.current.rotation.x) * 0.05;
    pointsRef.current.rotation.y += (mouseX - pointsRef.current.rotation.y) * 0.05;
  });

  return (
    <group rotation={[10, 10, 5]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={color}
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <DataPoints count={2000} color="#ff6e1a" radius={2} />
        <DataPoints count={1500} color="#06aed4" radius={3.5} />
      </Canvas>
    </div>
  );
}
