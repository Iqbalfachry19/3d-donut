import React from 'react';
import { extend, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

extend({ OrbitControls });

function Controls(props) {
  const { camera, gl } = useThree();

  return (
    <OrbitControls
      attach={'orbitControls'}
      makeDefault={true}
      args={[camera, gl.domElement]}
      onClick={(e) => console.log('click')}
    />
  );
}

export default Controls;
