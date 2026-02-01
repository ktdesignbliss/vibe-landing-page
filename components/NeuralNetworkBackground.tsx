"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// =============================================================================
// CONFIGURATION
// =============================================================================
const CONFIG = {
  // Node settings
  nodeCount: 80,
  nodeSize: 0.04,
  nodeSpread: { x: 8, y: 5, z: 4 },

  // Connection settings
  connectionDistance: 2.2,
  connectionOpacity: 0.35,

  // Colors (from globals.css Volt palette)
  colors: {
    volt: "#CEFF00",
    voltMuted: "#9ECC00",
    void: "#000000",
  },

  // Animation
  floatSpeed: 0.15,
  mouseInfluence: 0.8,
  pulseSpeed: 1.5,
};

// =============================================================================
// TYPES
// =============================================================================
interface NeuralNetworkBackgroundProps {
  className?: string;
  opacity?: number;
  interactive?: boolean;
}

interface NodeData {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  basePosition: THREE.Vector3;
  phase: number;
}

// =============================================================================
// NEURAL NODES (Neurons)
// =============================================================================
function NeuralNodes({
  nodes,
  mousePosition,
  reducedMotion,
}: {
  nodes: NodeData[];
  mousePosition: React.MutableRefObject<{ x: number; y: number }>;
  reducedMotion: boolean;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  // Create shared geometry and material
  const geometry = useMemo(() => new THREE.SphereGeometry(CONFIG.nodeSize, 8, 8), []);
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: CONFIG.colors.volt,
        transparent: true,
        opacity: 0.9,
      }),
    []
  );

  // Dummy object for matrix calculations
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = reducedMotion ? 0 : state.clock.elapsedTime;

    nodes.forEach((node, i) => {
      // Organic floating motion
      const floatX = Math.sin(time * CONFIG.floatSpeed + node.phase) * 0.3;
      const floatY = Math.cos(time * CONFIG.floatSpeed * 0.8 + node.phase * 1.3) * 0.2;
      const floatZ = Math.sin(time * CONFIG.floatSpeed * 0.6 + node.phase * 0.7) * 0.15;

      // Mouse influence (normalized to viewport)
      const mouseInfluenceX = mousePosition.current.x * viewport.width * CONFIG.mouseInfluence;
      const mouseInfluenceY = mousePosition.current.y * viewport.height * CONFIG.mouseInfluence;

      // Distance from mouse for attraction effect
      const dx = mouseInfluenceX - node.basePosition.x;
      const dy = mouseInfluenceY - node.basePosition.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const attraction = Math.max(0, 1 - dist / 5) * 0.5;

      // Update position
      node.position.x = node.basePosition.x + floatX + dx * attraction * 0.1;
      node.position.y = node.basePosition.y + floatY + dy * attraction * 0.1;
      node.position.z = node.basePosition.z + floatZ;

      // Pulsing scale
      const pulse = reducedMotion ? 1 : 1 + Math.sin(time * CONFIG.pulseSpeed + node.phase) * 0.2;

      dummy.position.copy(node.position);
      dummy.scale.setScalar(pulse);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[geometry, material, nodes.length]} frustumCulled={false} />
  );
}

// =============================================================================
// NEURAL CONNECTIONS (Synapses)
// =============================================================================
function NeuralConnections({
  nodes,
  reducedMotion,
}: {
  nodes: NodeData[];
  reducedMotion: boolean;
}) {
  const lineRef = useRef<THREE.LineSegments>(null);

  // Pre-calculate static connections for performance
  const connections = useMemo(() => {
    const pairs: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].basePosition.distanceTo(nodes[j].basePosition);
        if (dist < CONFIG.connectionDistance) {
          pairs.push([i, j]);
        }
      }
    }
    return pairs;
  }, [nodes]);

  // Create line geometry
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(connections.length * 6);
    const colors = new Float32Array(connections.length * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [connections.length]);

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: CONFIG.connectionOpacity,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  // Volt color in RGB (normalized)
  const voltColor = useMemo(() => new THREE.Color(CONFIG.colors.volt), []);

  useFrame((state) => {
    if (!lineRef.current) return;

    const positions = geometry.attributes.position.array as Float32Array;
    const colors = geometry.attributes.color.array as Float32Array;
    const time = reducedMotion ? 0 : state.clock.elapsedTime;

    connections.forEach(([i, j], idx) => {
      const nodeA = nodes[i];
      const nodeB = nodes[j];

      // Update positions
      const baseIdx = idx * 6;
      positions[baseIdx] = nodeA.position.x;
      positions[baseIdx + 1] = nodeA.position.y;
      positions[baseIdx + 2] = nodeA.position.z;
      positions[baseIdx + 3] = nodeB.position.x;
      positions[baseIdx + 4] = nodeB.position.y;
      positions[baseIdx + 5] = nodeB.position.z;

      // Pulsing opacity via color intensity
      const dist = nodeA.position.distanceTo(nodeB.position);
      const distFactor = 1 - dist / CONFIG.connectionDistance;
      const pulse = reducedMotion ? 1 : 0.5 + Math.sin(time * 2 + idx * 0.1) * 0.5;
      const intensity = distFactor * pulse;

      // Set colors for both vertices
      colors[baseIdx] = voltColor.r * intensity;
      colors[baseIdx + 1] = voltColor.g * intensity;
      colors[baseIdx + 2] = voltColor.b * intensity;
      colors[baseIdx + 3] = voltColor.r * intensity;
      colors[baseIdx + 4] = voltColor.g * intensity;
      colors[baseIdx + 5] = voltColor.b * intensity;
    });

    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
  });

  return <lineSegments ref={lineRef} geometry={geometry} material={material} />;
}

// =============================================================================
// NEURAL NETWORK SCENE
// =============================================================================
function NeuralNetworkScene({ reducedMotion }: { reducedMotion: boolean }) {
  const mousePosition = useRef({ x: 0, y: 0 });

  // Generate nodes
  const nodes = useMemo<NodeData[]>(() => {
    const nodeArray: NodeData[] = [];
    for (let i = 0; i < CONFIG.nodeCount; i++) {
      const x = (Math.random() - 0.5) * CONFIG.nodeSpread.x;
      const y = (Math.random() - 0.5) * CONFIG.nodeSpread.y;
      const z = (Math.random() - 0.5) * CONFIG.nodeSpread.z;

      nodeArray.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(),
        basePosition: new THREE.Vector3(x, y, z),
        phase: Math.random() * Math.PI * 2,
      });
    }
    return nodeArray;
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -0.5 to 0.5
      mousePosition.current.x = (e.clientX / window.innerWidth - 0.5);
      mousePosition.current.y = -(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <NeuralNodes nodes={nodes} mousePosition={mousePosition} reducedMotion={reducedMotion} />
      <NeuralConnections nodes={nodes} reducedMotion={reducedMotion} />
    </>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export function NeuralNetworkBackground({
  className = "",
  opacity = 1,
  interactive = true,
}: NeuralNetworkBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Defer render to client to avoid hydration mismatch from Math.random()
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]} // Limit pixel ratio for performance
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: false,
          }}
          style={{
            pointerEvents: interactive ? "auto" : "none",
            background: "transparent",
          }}
        >
          <NeuralNetworkScene reducedMotion={reducedMotion} />
        </Canvas>
      )}
    </div>
  );
}

// =============================================================================
// WRAPPER COMPONENT (for wrapping content)
// =============================================================================
export function NeuralNetworkWrapper({
  children,
  className = "",
  backgroundOpacity = 1,
}: {
  children: React.ReactNode;
  className?: string;
  backgroundOpacity?: number;
}) {
  return (
    <div className={`relative ${className}`}>
      <NeuralNetworkBackground opacity={backgroundOpacity} interactive />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default NeuralNetworkBackground;
