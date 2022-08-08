import { useFrame } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

function LightBulb(props) {
  const myref = useRef();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  useFrame((state) => {
    if (clicked) {
      state.camera.position.x = 0;
      state.camera.position.y = 2;
      state.camera.position.z = 0;
    }
    if (hovered) {
      myref.current.scale.set(1.1, 1.1, 1.1);
    } else {
      myref.current.scale.set(1, 1, 1);
    }
  });
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);
  return (
    <mesh
      {...props}
      ref={myref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={'yellow'} />
    </mesh>
  );
}

export default LightBulb;
