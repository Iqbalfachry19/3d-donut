import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="bg-blue-500 text-white py-10">
        <div className="mx-auto max-w-6xl flex justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl">About</h1>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Support</p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl">Community</h1>
            <p>Blog</p>
            <p>Forum</p>
            <p>Discord</p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl">Social</h1>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
