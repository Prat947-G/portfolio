import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "../CanvasErrorBoundary";

const Earth = () => {
    const earth = useGLTF("/planet/scene.gltf");

    return (
        <primitive
            object={earth.scene}
            scale={2.5}
            position-y={0}
            rotation-y={0}
        />
    );
};

// Fallback component for when the model isn't loaded yet
const EarthFallback = () => (
    <group>
        <mesh scale={2.5}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial color='#2b3945' wireframe />
        </mesh>
        {/* Planet Rings */}
        <mesh rotation={[-Math.PI / 2, 0.5, 0]}>
            <ringGeometry args={[3, 4.5, 64]} />
            <meshStandardMaterial color='#915eff' wireframe transparent opacity={0.3} side={2} />
        </mesh>
    </group>
);

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <CanvasErrorBoundary fallback={<EarthFallback />}>
                    <Suspense fallback={<EarthFallback />}>
                        <Earth />
                    </Suspense>
                </CanvasErrorBoundary>

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
