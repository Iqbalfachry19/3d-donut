import React from 'react';
import { data } from '../../components/data';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Image from 'next/image';
const Models = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-4">
        {data?.products.map((product) => (
          <div
            key={product.id}
            className=" border-2 mx-5 hover:cursor-pointer"
            onClick={() => {
              router.push(`/3d-models/${product.id}`);
            }}
          >
            <div className="relative w-full h-60">
              <Image alt="" layout="fill" src={product.imgUrl} />
            </div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
