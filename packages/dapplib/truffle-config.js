require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind huge good clog swift toss'; 
let testAccounts = [
"0x5c2730a6eb2af7c0b98f9a339173b3e03468ab4d625d2da446672b2756d749db",
"0x46a88660be7296c44f11817883daf4b8350f638a811e2342ebc8e456971c82a3",
"0x6094211f6758a8a9b0e3e0be57e900389840b0c1febe7555e48cded0450a2675",
"0x46a28e1d03f0023dd1350499ce225ebb5b25aa937a1bcf8195140d8068fa5a93",
"0xd356010dfed1ff9fd339fd75a377080e805fc9adc7729b15893597f87a919428",
"0x83009d812aa820703fc0d0b54efc271ca069b5cb3744b7f4cc796333a8d98c26",
"0x3806c628c92c889fb65be8bca86fd9a54c358c610044baa73a1d66e65ffa1282",
"0x24b8a6701521f99baa9163a67964e4e27a7f303a31b91d5022048280f87b6b45",
"0xaae1a8e1e869fc463b2b62f3c72ba5eb3a880cb4c2f808bd792311f51514e153",
"0x241827185d2a027e1734569e18251aa43ad99a596716362216b68d856f1b7b0b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

