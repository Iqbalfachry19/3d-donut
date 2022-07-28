import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/mtlloader';

const ObjModel = ({ modelPath, matPath, scale = 1, position = [0, 0, 0] }) => {
  const materials = useLoader(MTLLoader, matPath);
  const obj = useLoader(OBJLoader, modelPath, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });
  const ref = useRef();
  const [hovered, hover] = useState(false);
  return (
    <primitive
      ref={ref}
      position={position}
      scale={scale}
      object={obj}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    />
  );
};

export default ObjModel;
