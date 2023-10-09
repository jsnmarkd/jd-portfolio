import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF("./laptop-model.gltf");

  return (
    <>
      <Environment preset="city" />
      <color attach={"background"} args={["#241a1a"]} />
      <OrbitControls makeDefault />

      <Float rotationIntensity={0.4}>
        <primitive object={computer.scene} position-y={-1.2} />
      </Float>
    </>
  );
}
