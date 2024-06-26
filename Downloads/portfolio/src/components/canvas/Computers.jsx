import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
  <mesh>
    <hemisphereLight intensity={2} groundColor="violet" />
    <pointLight intensity={2} position={[0, 10, 10]} />
    <spotLight
      position={[50, 10, 100]}
      angle={0.5}
      penumbra={1}
      intensity={2}
    />
    <ambientLight intensity={0.8} />
    <directionalLight 
      intensity={2} 
      position={[10, 10, 10]} 
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      castShadow
    />
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      rotation={[0,0,0]}
    />
  </mesh>
  );
};

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
    <>
      <style>
        {`
          .canvas-container {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          .canvas {
            width: 100%;
            height: 100%;
          }

          /* Small screens */
          @media (max-width: 500px) {
            .canvas-container {
              width: 100%;
              height: 60vh;
              top: 250px;
              left: 0;
            }
            .canvas {
              width: 100%;
              height: 100%;
            }
          }

          /* Medium screens */
          @media (min-width: 501px) and (max-width: 1024px) {
            .canvas-container {
              width: 100%;
              height: 80vh;
              top: 250px;
              left: 0px;
            }
            .canvas {
              width: 100%;
              height: 100%;
            }
          }

          /* Large screens */
          @media (min-width: 1025px) {
            .canvas-container {
              width: 75%;
              height: 70vh;
              top: 250px;
              left: 150px;
            }
            .canvas {
              width: 100%;
              height: 100%;
            }
          }
        `}
      </style>
      <div className="canvas-container">
        <Canvas
          className="canvas"
          frameloop='demand'
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 30, 75], fov: 40 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </>
  );
};

export default ComputersCanvas;
