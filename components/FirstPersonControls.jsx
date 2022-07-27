import React from 'react';
import { extend, useThree } from '@react-three/fiber';
import { FirstPersonControls } from '@react-three/drei';

extend({ FirstPersonControls });

function Controls(props) {
  const { camera, gl } = useThree();

  return (
    <FirstPersonControls
      attach={'firstPersonControls'}
      args={[camera, gl.domElement]}
      lookVertical={false}
      constrainVertical={true}
      lookSpeed={0.02}
      onClick={(e) => console.log('click')}
    />
  );
}

export default Controls;
