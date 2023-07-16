// npm i ethers
const ethers = require("ethers");
const mnemonic = "YOUR MNEMONICS";
const mnemonicWallet = ethers.Wallet.fromPhrase(mnemonic);
console.log(mnemonicWallet.privateKey);
