const {
  time,
  loadFixture,
} = require('@nomicfoundation/hardhat-network-helpers');
const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('Wisata3D', function () {
  let nft;
  beforeEach(async () => {
    const NFT = await ethers.getContractFactory('Wisata3D');
    nft = await NFT.deploy(
      'https://cloudflare-ipfs.com/ipfs/QmPxWzqHnNjYQZb4bcSgv4TsXS5gkLhfTXSWoC6eYirxN2?filename=Donut.glb',
    );
    await nft.deployed();
  });

  describe('Deployment', function () {
    it('sets baseURI', async function () {
      expect(await nft.baseURI()).to.equal(
        'https://cloudflare-ipfs.com/ipfs/QmPxWzqHnNjYQZb4bcSgv4TsXS5gkLhfTXSWoC6eYirxN2?filename=Donut.glb',
      );
    });
  });
});
