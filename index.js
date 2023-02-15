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
const newContract = await sdk.deploy({
   template: TEMPLATES.ERC721Mintable,
   params: {
     name: 'Green Papaya Demo',
     symbol: 'GPPYAD',
     contractURI: 'https://greenpapaya.infura-ipfs.io/ipfs/QmdDV7GArHc4VPWaYTcH8Aik4F1vCrYLe423SFDkeqFvAW',
   },
 });
console.log(`Contract address is: ${newContract.contractAddress}`);
