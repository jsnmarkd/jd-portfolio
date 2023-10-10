import {
  PresentationControls,
  useGLTF,
  Environment,
  Float,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF("./laptop-model.gltf");

  return (
    <>
      <Environment preset="city" />

      <color attach={"background"} args={["#241a1a"]} />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <primitive object={computer.scene} position-y={-1.2} />
        </Float>
      </PresentationControls>
    </>
  );
}
