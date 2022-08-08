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
import Footer from '../components/Footer';
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
            <h1 className="text-5xl">Platform untuk 3D Model</h1>
            <p className="text-xl my-10 ">
              Jasa Kelola 3D assets. Upload 3D assets Anda disini. Tampilkan 3D
              assets Anda dan Download 3D assets.
            </p>
            <div className="space-x-2">
              <button
                onClick={() => router.push('/3d-models/1')}
                className="bg-blue-300 text-black rounded-lg p-2"
              >
                LIHAT CONTOH
              </button>
              <button
                onClick={() => router.push('/search?q=')}
                className="bg-yellow-300 text-black rounded-lg p-2"
              >
                CARI 3D Models
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
                  modelPath={
                    'https://ipfs.infura.io/ipfs/QmPxWzqHnNjYQZb4bcSgv4TsXS5gkLhfTXSWoC6eYirxN2?filename=Donut.glb'
                  }
                  position={[0, 0, 0]}
                />

                <OrbitControls />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
