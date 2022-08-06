import React, { useState } from 'react';
import Modal from 'react-modal';
import { XIcon } from '@heroicons/react/outline';
import { create } from 'ipfs-http-client';
Modal.setAppElement('#__next');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0a0b0d',
    padding: 20,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 11, 13, 0.75)',
  },
};

const Upload = ({ modalIsOpen, closeModal }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  const uploadIPFS = async (e) => {
    e.preventDefault();

    const reader = new window.FileReader();
    reader?.readAsArrayBuffer(selectedFile);
    reader.onloadend = async () => {
      const buffer = Buffer.from(reader.result);
      console.log(buffer);
      const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });
      const result = await ipfs.add(buffer);
      console.log(result);
      closeModal();
      if (
        window.confirm(
          'If you click "ok" you would be redirected . Cancel will load this website ',
        )
      ) {
        window.location.href = `https://ipfs.infura.io/ipfs/${result.cid}?filename=${selectedFile.name}`;
      }
    };
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button className="text-white" onClick={closeModal}>
        <XIcon className="h-6 w-6" />
      </button>
      <div className="text-white">Upload your 3D model</div>
      <form className="flex text-white flex-col pt-10">
        <label className="text-white">Model Name</label>
        <input className="text-black" />
        <label className="text-white">Model Description</label>
        <input className="text-black" />
        <label className="text-white">Model Image Url</label>
        <input
          type="file"
          name="file"
          onChange={changeHandler}
          className="text-black"
        />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <label className="text-white">Model Url</label>

        <input className="text-black" />
        <button
          onClick={(e) => uploadIPFS(e)}
          className="bg-yellow-400 mt-2 p-2"
        >
          Upload
        </button>
      </form>
    </Modal>
  );
};

export default Upload;
