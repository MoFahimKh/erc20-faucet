import ethers from "ethers";
import dotenv from "dotenv";
import { tokenAddress, tokenAbi } from "./configs.js";

dotenv.config();
const { RPC, MNEMONIC } = process.env;
let privateKey;
const mnemonicToPrivateKey = async () => {
  privateKey = ethers.Wallet.fromMnemonic(MNEMONIC).privateKey;
};

mnemonicToPrivateKey();
const getFTKNFromFaucet = async () => {
  const provider = new ethers.providers.JsonRpcProvider(RPC);
  const signer = new ethers.Wallet(privateKey, provider);

  const contract = new ethers.Contract(tokenAddress, tokenAbi, signer);

  try {
    const transaction = await contract.getTokens();
    await transaction.wait();
    console.log("Tokens received successfully");
  } catch (error) {
    console.error("Error:", error);
  }
};
getFTKNFromFaucet();
