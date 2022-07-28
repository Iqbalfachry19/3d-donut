import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const FbxModel = ({ modelPath, scale = 1, position = [0, 0, 0] }) => {
  const fbx = useLoader(FBXLoader, modelPath);
  const ref = useRef();
  const [hovered, hover] = useState(false);
  return (
    <primitive
      ref={ref}
      position={position}
      scale={scale}
      object={fbx}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    />
  );
};

export default FbxModel;
