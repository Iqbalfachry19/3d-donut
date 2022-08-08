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
  const [selectedImage, setSelectedImage] = useState();
  const [isImagePicked, setIsImagePicked] = useState(false);
  const [selectedModel, setSelectedModel] = useState();
  const [isModelPicked, setIsModelPicked] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const changeImageHandler = (event) => {
    setSelectedImage(event.target.files[0]);
    setIsImagePicked(true);
  };
  const changeModelHandler = (event) => {
    setSelectedModel(event.target.files[0]);
    setIsModelPicked(true);
  };
  const uploadIPFS = async (e) => {
    if (!name) return;
    e.preventDefault();
    setIsLoading(true);
    const reader = new window.FileReader();
    reader?.readAsArrayBuffer(selectedImage);
    reader.onloadend = async () => {
      const buffer = Buffer.from(reader.result);
      console.log(buffer);
      const ipfs = create({ url: 'https://ipfs.infura.io:5001/api/v0' });
      const result = await ipfs.add(buffer);
      console.log(result);
      setIsLoading(false);
      closeModal();
      if (
        window.confirm(
          `If you click "ok" you would be redirected . Cancel will load this website https://ipfs.infura.io/ipfs/${result.cid}?filename=${selectedImage.name}`,
        )
      ) {
        window.location.href = `https://ipfs.infura.io/ipfs/${result.cid}?filename=${selectedImage.name}`;
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
        <input
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="text-black"
        />
        <label
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="text-white"
        >
          Model Description
        </label>
        <input className="text-black" />
        <label className="text-white">Model Image Url</label>
        <input
          type="file"
          name="file"
          accept="image/*"
          required
          onChange={changeImageHandler}
          className="text-black"
        />
        {isImagePicked ? (
          <div>
            <p>Filename: {selectedImage.name}</p>
            <p>Filetype: {selectedImage.type}</p>
            <p>Size in bytes: {selectedImage.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedImage.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <label className="text-white">Model Url</label>

        <input
          type="file"
          name="file"
          required
          accept=".glb .gltf .fbx .obj"
          onChange={changeModelHandler}
          className="text-black"
        />
        {isModelPicked ? (
          <div>
            <p>Filename: {selectedModel.name}</p>
            <p>Filetype: {selectedModel.type}</p>
            <p>Size in bytes: {selectedModel.size}</p>
            <p>
              lastModifiedDate:{' '}
              {selectedModel.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <button
          onClick={(e) => uploadIPFS(e)}
          className="bg-yellow-400 mt-2 p-2"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Upload'}
        </button>
      </form>
    </Modal>
  );
};

export default Upload;
