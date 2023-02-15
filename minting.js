import { config as loadEnv } from 'dotenv';
import { SDK, Auth, TEMPLATES, Metadata } from '@infura/sdk';
loadEnv();
const auth = new Auth({
      projectId: process.env.INFURA_API_KEY,
      secretId: process.env.INFURA_API_KEY_SECRET,
      privateKey: process.env.WALLET_PRIVATE_KEY,
      chainId: 43113,
    });
const sdk = new SDK(auth);
const existing = await sdk.loadContract({
  template: TEMPLATES.ERC721Mintable,
  contractAddress: "0xbC87DB14562E7468885DcBe4EF1113419166677e",
});
console.log(`Contract address is: ${existing.contractAddress}`);
const mint1 = await existing.mint({
   publicAddress: process.env.WALLET_PUBLIC_ADDRESS,
   tokenURI: 'https://greenpapaya.infura-ipfs.io/ipfs/QmQQZVxnYV4jsrVcmRSwCRFZa28LYh4AcYgf5vWd3RT8fn',
 }
);
const minted = await mint1.wait();
console.log(`Status: ${minted.status}\n NFT minted on ${minted.blockHash} with ${minted.confirmations} confirmation!`);
