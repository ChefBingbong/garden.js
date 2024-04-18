const e = {
  ethereum_sepolia: "ethereum_sepolia",
  ethereum: "ethereum",
  bitcoin: "bitcoin",
  bitcoin_testnet: "bitcoin_testnet",
  bitcoin_regtest: "bitcoin_regtest",
  ethereum_arbitrum: "ethereum_arbitrum"
}, o = {
  ethereum: {
    WBTC: {
      name: "Wrapped Bitcoin",
      symbol: "WBTC",
      decimals: 8,
      chain: e.ethereum,
      isToken: !0,
      thumbnail: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg?v=029",
      address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
    }
  },
  ethereum_sepolia: {
    WBTC: {
      name: "Wrapped Bitcoin",
      symbol: "WBTC",
      decimals: 8,
      chain: e.ethereum_sepolia,
      isToken: !0,
      thumbnail: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg",
      address: "0x3D1e56247033FE191DC789b5838E366dC04b1b73"
    }
  },
  bitcoin: {
    BTC: {
      name: "Bitcoin",
      symbol: "BTC",
      decimals: 8,
      thumbnail: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
      chain: e.bitcoin,
      isToken: !1
    }
  },
  bitcoin_testnet: {
    BTC: {
      name: "Bitcoin Testnet",
      symbol: "BTC",
      decimals: 8,
      thumbnail: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
      chain: e.bitcoin_testnet,
      isToken: !1
    }
  },
  ethereum_arbitrum: {
    WBTC: {
      name: "Wrapped Bitcoin",
      symbol: "WBTC",
      decimals: 8,
      chain: e.ethereum_arbitrum,
      isToken: !0,
      thumbnail: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg?v=029",
      address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f"
    }
  }
}, i = {
  bitcoin: {
    nativeAsset: o.bitcoin.BTC
  },
  bitcoin_testnet: {
    nativeAsset: o.bitcoin_testnet.BTC
  },
  bitcoin_regtest: {
    nativeAsset: {
      name: "Bitcoin Regtest",
      symbol: "rBTC",
      decimals: 8,
      chain: e.bitcoin_regtest,
      isToken: !1,
      thumbnail: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg"
    }
  },
  ethereum: {
    nativeAsset: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
      chain: e.ethereum,
      isToken: !1,
      thumbnail: "https://cryptologos.cc/logos/ethereum-eth-logo.svg"
    }
  },
  ethereum_sepolia: {
    nativeAsset: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
      chain: e.ethereum_sepolia,
      isToken: !1,
      thumbnail: "https://cryptologos.cc/logos/ethereum-eth-logo.svg"
    }
  },
  ethereum_arbitrum: {
    nativeAsset: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
      chain: e.ethereum_arbitrum,
      isToken: !1,
      thumbnail: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg"
    }
  }
}, s = (t) => !(t === e.ethereum_sepolia || t === e.bitcoin_testnet || t === e.bitcoin_regtest);
export {
  o as Assets,
  e as Chains,
  i as ChainsData,
  s as isMainnet
};
