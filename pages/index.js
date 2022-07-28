import css from '../styles/Home.module.css';
import { Canvas } from '@react-three/fiber';
import Box from '../components/Box';
import FirstPersonControls from '../components/FirstPersonControls';
import Light from '../components/Light';
import Floor from '../components/Floor';
import Draggable from '../components/Draggable';
import { Suspense } from 'react';
import GltfModel from '../components/GltfModel';
import { Environment, Text } from '@react-three/drei';
import Head from 'next/head';
import FbxModel from '../components/FbxModel';
import Loader from '../components/Loader';
export default function Home({ scale = 40, position = [0, 0, 0] }) {
  return (
    <div className={css.scene}>
      <Head>
        <title>3d donut</title>
      </Head>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [0, 2, 5],
          rotation: [0, 0, 0],
        }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight color={'white'} intensity={0.2} />
          <Light position={[0, 3, 0]} />
          <Text
            color={'#EC2D2D'}
            fontSize={0.2}
            maxWidth={20}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'left'}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle"
            position={[1.5, 2, 2]}
          >
            Muhammad Iqbal Fachry Krisbudiana
          </Text>

          <FbxModel
            scale="0.02"
            modelPath={'/room.fbx'}
            position={[-11, 0, 5]}
          />

          <Environment preset="sunset" background />
        </Suspense>

        <FirstPersonControls />
      </Canvas>
    </div>
  );
}
