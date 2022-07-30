import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Header from '../components/Header';

import Loader from '../components/Loader';
import OrbitControls from '../components/OrbitControls';
import { Environment, Text } from '@react-three/drei';
import GltfModel from '../components/GltfModel';
import Head from 'next/head';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
const Index = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Wisata 3D</title>
      </Head>
      <Header />
      <main className="  bg-blue-500 h-screen text-white">
        <div className="mx-auto max-w-6xl flex pt-20">
          <div className="">
            <h1 className="text-5xl">The leading platform for 3D on the web</h1>
            <p className="text-xl my-10 ">
              Manage your 3D assets. Distribute 3D. Collaborate with others.
              Showcase your work. Buy & sell 3D models.
            </p>
            <div className="space-x-2">
              <button
                onClick={() => router.push('/3d-models/1')}
                className="bg-blue-300 text-black rounded-lg p-2"
              >
                SEE EXAMPLES
              </button>
              <button
                onClick={() => router.push('/search?q=')}
                className="bg-yellow-300 text-black rounded-lg p-2"
              >
                SEARCH 3D Models
              </button>
            </div>
          </div>
          <div style={{ height: '60vh', width: '80vw' }}>
            <Canvas
              shadows={true}
              className={{ background: 'black' }}
              camera={{
                position: [0, 2, 5],
                rotation: [0, 0, 0],
              }}
            >
              {' '}
              <Suspense fallback={<Loader />}>
                <ambientLight color={'white'} intensity={0.6} />

                <GltfModel
                  scale="40"
                  modelPath={'/Donut.glb'}
                  position={[0, 0, 0]}
                />

                <OrbitControls />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Index;
