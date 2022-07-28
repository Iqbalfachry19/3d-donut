import { useFrame } from '@react-three/fiber';
import React, { useState } from 'react';

function LightBulb(props) {
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (clicked) {
      state.camera.position.x = 0;
      state.camera.position.y = 2;
      state.camera.position.z = 0;
    }
  });
  return (
    <mesh {...props} onClick={() => setClicked(!clicked)}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={'yellow'} />
    </mesh>
  );
}

export default LightBulb;
