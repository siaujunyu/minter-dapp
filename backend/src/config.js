require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Sam’s Diary X DPIM Special Collection";
const description = "Web 3.0 story surfers";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 20,
    layersOrder: [
      { name: "EP1 DPIM Background" },
      { name: "EP1 DPIM Skin Colour" },
      { name: "EP1 DPIM Frame" },
      { name: "EP1 DPIM Face" },
      { name: "EP1 DPIM Headwear" },
      { name: "EP1 DPIM Outfit" },
      { name: "EP1 Left Logo" },
      { name: "EP1 Right Logo" },
    ],
  },{
    growEditionSizeTo: 40,
    layersOrder: [
      { name: "EP2 DPIM Background" },
      { name: "EP2 DPIM Skin Colour" },
      { name: "EP2 DPIM Frame" },
      { name: "EP2 DPIM Face" },
      { name: "EP2 DPIM Headwear" },
      { name: "EP2 DPIM Outfit" },
      { name: "EP2 Left Logo" },
      { name: "EP2 Right Logo" },
    ],
  },{
    growEditionSizeTo: 60,
    layersOrder: [
      { name: "EP3 DPIM Background" },
      { name: "EP3 DPIM Skin Colour" },
      { name: "EP3 DPIM Frame" },
      { name: "EP3 DPIM Face" },
      { name: "EP3 DPIM Headwear" },
      { name: "EP3 DPIM Outfit" },
      { name: "EP3 Left Logo" },
      { name: "EP3 Right Logo" },
    ],
  },{
    growEditionSizeTo: 80,
    layersOrder: [
      { name: "EP4 DPIM Background" },
      { name: "EP4 DPIM Skin Colour" },
      { name: "EP4 DPIM Frame" },
      { name: "EP4 DPIM Face" },
      { name: "EP4 DPIM Headwear" },
      { name: "EP4 DPIM Outfit" },
      { name: "EP4 Left Logo" },
      { name: "EP4 Right Logo" },
    ],
  },{
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "EP5 DPIM Background" },
      { name: "EP5 DPIM Skin Colour" },
      { name: "EP5 DPIM Frame" },
      { name: "EP5 DPIM Face" },
      { name: "EP5 DPIM Headwear" },
      { name: "EP5 DPIM Outfit" },
      { name: "EP5 Left Logo" },
      { name: "EP5 Right Logo" },
    ],
  },{
    growEditionSizeTo: 120,
    layersOrder: [
      { name: "EP6 DPIM Background" },
      { name: "EP6 DPIM Skin Colour" },
      { name: "EP6 DPIM Frame" },
      { name: "EP6 DPIM Face" },
      { name: "EP6 DPIM Headwear" },
      { name: "EP6 DPIM Outfit" },
      { name: "EP6 Left Logo" },
      { name: "EP6 Right Logo" },
    ],
  },{
    growEditionSizeTo: 140,
    layersOrder: [
      { name: "EP7 DPIM Background" },
      { name: "EP7 DPIM Skin Colour" },
      { name: "EP7 DPIM Frame" },
      { name: "EP7 DPIM Face" },
      { name: "EP7 DPIM Headwear" },
      { name: "EP7 DPIM Outfit" },
      { name: "EP7 Left Logo" },
      { name: "EP7 Right Logo" },
    ],
  },{
    growEditionSizeTo: 160,
    layersOrder: [
      { name: "EP8 DPIM Background" },
      { name: "EP8 DPIM Skin Colour" },
      { name: "EP8 DPIM Frame" },
      { name: "EP8 DPIM Face" },
      { name: "EP8 DPIM Headwear" },
      { name: "EP8 DPIM Outfit" },
      { name: "EP8 Left Logo" },
      { name: "EP8 Right Logo" },
    ],
  },{
    growEditionSizeTo: 180,
    layersOrder: [
      { name: "EP9 DPIM Background" },
      { name: "EP9 DPIM Skin Colour" },
      { name: "EP9 DPIM Frame" },
      { name: "EP9 DPIM Face" },
      { name: "EP9 DPIM Headwear" },
      { name: "EP9 DPIM Outfit" },
      { name: "EP9 Left Logo" },
      { name: "EP9 Right Logo" },
    ],
  },{
    growEditionSizeTo: 200,
    layersOrder: [
      { name: "EP10 DPIM Background" },
      { name: "EP10 DPIM Skin Colour" },
      { name: "EP10 DPIM Frame" },
      { name: "EP10 DPIM Face" },
      { name: "EP10 DPIM Headwear" },
      { name: "EP10 DPIM Outfit" },
      { name: "EP10 Left Logo" },
      { name: "EP10 Right Logo" },
    ],
  },{
    growEditionSizeTo: 220,
    layersOrder: [
      { name: "EP11 DPIM Background" },
      { name: "EP11 DPIM Skin Colour" },
      { name: "EP11 DPIM Frame" },
      { name: "EP11 DPIM Face" },
      { name: "EP11 DPIM Headwear" },
      { name: "EP11 DPIM Outfit" },
      { name: "EP11 Left Logo" },
      { name: "EP11 Right Logo" },
    ],
  },{
    growEditionSizeTo: 240,
    layersOrder: [
      { name: "EP12 DPIM Background" },
      { name: "EP12 DPIM Skin Colour" },
      { name: "EP12 DPIM Frame" },
      { name: "EP12 DPIM Face" },
      { name: "EP12 DPIM Headwear" },
      { name: "EP12 DPIM Outfit" },
      { name: "EP12 Left Logo" },
      { name: "EP12 Right Logo" },
    ],
  },{
    growEditionSizeTo: 260,
    layersOrder: [
      { name: "EP13 DPIM Background" },
      { name: "EP13 DPIM Skin Colour" },
      { name: "EP13 DPIM Frame" },
      { name: "EP13 DPIM Face" },
      { name: "EP13 DPIM Headwear" },
      { name: "EP13 DPIM Outfit" },
      { name: "EP13 Left Logo" },
      { name: "EP13 Right Logo" },
    ],
  },{
    growEditionSizeTo: 280,
    layersOrder: [
      { name: "EP14 DPIM Background" },
      { name: "EP14 DPIM Skin Colour" },
      { name: "EP14 DPIM Frame" },
      { name: "EP14 DPIM Face" },
      { name: "EP14 DPIM Headwear" },
      { name: "EP14 DPIM Outfit" },
      { name: "EP14 Left Logo" },
      { name: "EP14 Right Logo" },
    ],
  },{
    growEditionSizeTo: 300,
    layersOrder: [
      { name: "EP15 DPIM Background" },
      { name: "EP15 DPIM Skin Colour" },
      { name: "EP15 DPIM Frame" },
      { name: "EP15 DPIM Face" },
      { name: "EP15 DPIM Headwear" },
      { name: "EP15 DPIM Outfit" },
      { name: "EP15 Left Logo" },
      { name: "EP15 Right Logo" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1350,
  height: 1350,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://samsdiarynft.com/", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'SAMS DIARY';
const CONTRACT_SYMBOL = 'SD';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x783855888c8A114490a69D7697139dA166389f7c';
const TREASURY_ADDRESS = '0x783855888c8A114490a69D7697139dA166389f7c';
const MAX_SUPPLY = 300; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 3; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-03-20T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 500; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x783855888c8A114490a69D7697139dA166389f7c"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = "ipfs://bafkreidvnnemkgvcfzw66wa7nffgmgzgnpn7437qerpnt6lr65zrdfhcr4"; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x783855888c8A114490a69D7697139dA166389f7c, 0xB48C56b861909bdcD65a74f60F6b422D985025A6"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0x392c99E2bB46D6B81fD81F36136Eb2452B4ff3e7"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "WHO IS SAM"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeiffrqk6shpk5lrirx47fnwmzil67aotwqu4zqnhddnk3jkt2ydatq"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
