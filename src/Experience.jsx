import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF("./laptop-model.gltf");

  return (
    <>
      <color attach={"background"} args={["#241a1a"]} />
      <OrbitControls makeDefault />

      <primitive object={computer.scene} />
    </>
  );
}
