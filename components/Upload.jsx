import React from 'react';
import Modal from 'react-modal';
import { XIcon } from '@heroicons/react/outline';
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
const upload = (e) => {
  e.preventDefault();
};
const Upload = ({ modalIsOpen, closeModal }) => {
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
        <input className="text-black" />
        <button onClick={(e) => upload(e)} className="bg-yellow-400 mt-2 p-2">
          Upload
        </button>
      </form>
    </Modal>
  );
};

export default Upload;
