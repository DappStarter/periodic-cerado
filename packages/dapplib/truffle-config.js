require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remain hole include arctic bridge gas'; 
let testAccounts = [
"0x02c8938860f5bfc494eeb238e56158e5a7b9894bd3ddba96dad83ea13cae3f27",
"0x5416c7c558ceeb6b15fc776076375b83db31ba2ca0916074e53ee0b341eac9a9",
"0xdad5762d34dee4f827e679bcab396880c60ded753de407afc87365369f8ae0a5",
"0xabfb9ad2f69e5c85e996ebcc22c756fa6c12e9b4bf267357e63939f77b3daa6b",
"0x3ccd56edc17ece07dec6ab06e84b68f12fd4793ff2f93bebfbf276d5efbc45e2",
"0x4a5aa23d3c6575feef3ba1c4d1523aacebd0078c6c204e4db8045608a1894358",
"0x0ef26a97ccb39822d53223b773b44c364871be820d1bd725d2b385298dd672fd",
"0x3995d82c16cd5ace4bb5da9eb39e54a926020cffe12f641029f7938112c79c77",
"0xa26b4c8644dd54ee2d70ef5d9ec16aac9f6f323e7d6811d09773170ee1dcd8f5",
"0x04c39456a240343979b9f53572d4ce5efc4a955ae4825f4383a4e6e05c4084c0"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
