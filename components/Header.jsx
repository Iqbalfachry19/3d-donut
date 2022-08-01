import React, { useEffect, useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import WrongNetworkMessage from './WrongNetwork';
import Upload from './Upload';

const Header = () => {
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');
  useEffect(() => {
    connectWallet();
  }, []);
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log('Metamask not detected');
        return;
      }
      let chainId = await ethereum.request({ method: 'eth_chainId' });
      console.log('connected to chain:', chainId);
      const rinkebyChainId = '0x4';
      if (chainId !== rinkebyChainId) {
        alert('you are not connected to the rinkeby testnet!');
        setCorrectNetwork(false);
        return;
      } else {
        setCorrectNetwork(true);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('Found account', accounts[0]);
      setIsUserLoggedIn(true);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const router = useRouter();
  return (
    <div className="flex items-center justify-between bg-white py-2">
      <h1
        onClick={() => router.push(`/`)}
        className="ml-4 cursor-pointer text-xl text-bold "
      >
        Wisata 3D
      </h1>
      <div className="ml-4 cursor-pointer text-xl text-bold flex items-center border-2 p-2 rounded-lg">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              router.push(`/search?q=${event.target.value}`);
            }
          }}
          className="outline-none"
          type="text"
          placeholder="Cari model 3D"
        />
      </div>
      <ul className="flex items-center space-x-2 mr-2">
        {!isUserLoggedIn ? (
          <li
            onClick={() => connectWallet()}
            className="text-white bg-blue-400 p-2 rounded-lg hover:cursor-pointer"
          >
            Connect Wallet
          </li>
        ) : correctNetwork ? (
          <>
            <li>{`${currentAccount.slice(0, 7)}...${currentAccount.slice(
              35,
            )}`}</li>
            <li
              onClick={openModal}
              className="text-white bg-yellow-400 p-2 rounded-lg hover:cursor-pointer"
            >
              UPLOAD
            </li>
            <Upload modalIsOpen={modalIsOpen} closeModal={closeModal} />
          </>
        ) : (
          <WrongNetworkMessage />
        )}
      </ul>
    </div>
  );
};

export default Header;
