import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "../CanvasErrorBoundary";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("/desktop_pc/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersFallback = ({ isMobile }) => (
    <group position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}>
        {/* Monitor */}
        <mesh position={[0, 1.5, 0]}>
            <boxGeometry args={[4, 2.5, 0.2]} />
            <meshStandardMaterial color="#915eff" wireframe />
        </mesh>
        {/* Screen Content Placeholder */}
        <mesh position={[0, 1.5, 0.11]}>
            <planeGeometry args={[3.8, 2.3]} />
            <meshStandardMaterial color="#5e35b1" transparent opacity={0.5} />
        </mesh>
        {/* Stand */}
        <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.2, 0.5, 1]} />
            <meshStandardMaterial color="#915eff" wireframe />
        </mesh>
        {/* Base */}
        <mesh position={[0, -0.3, 0]}>
            <boxGeometry args={[1.5, 0.1, 1]} />
            <meshStandardMaterial color="#915eff" wireframe />
        </mesh>
        {/* Keyboard */}
        <mesh position={[0, -0.4, 1.5]} rotation={[-0.1, 0, 0]}>
            <boxGeometry args={[3, 0.1, 1.2]} />
            <meshStandardMaterial color="#915eff" wireframe />
        </mesh>
    </group>
);

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <CanvasErrorBoundary fallback={<ComputersFallback isMobile={isMobile} />}>
                    <Suspense fallback={<ComputersFallback isMobile={isMobile} />}>
                        <Computers isMobile={isMobile} />
                    </Suspense>
                </CanvasErrorBoundary>
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
