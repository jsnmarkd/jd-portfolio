import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Canvas
      className="canvas"
      camera={{
        fov: 50,
        near: 0.1,
        far: 2000,
        position: [0, 1, 4],
      }}
    >
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
    <Loader />
  </>
);
