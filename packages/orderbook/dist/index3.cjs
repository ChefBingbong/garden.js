"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("./index4.cjs"),c=require("./index5.cjs"),o=require("./index9.cjs"),s=(i,e)=>{if(i.chain===e.chain)throw new Error(o.OrderpairErrors.SAME_ASSET);if(i.chain===n.Chains.bitcoin||i.chain===n.Chains.bitcoin_testnet||i.chain===n.Chains.bitcoin_regtest){const t=r[e.chain];return`${n.Chains[i.chain]}-${n.Chains[e.chain]}:${c.CONTRACT_ADDRESS[t].AtomicSwap}`}else{const t=r[i.chain];return`${n.Chains[i.chain]}:${c.CONTRACT_ADDRESS[t].AtomicSwap}-${n.Chains[e.chain]}`}},r={ethereum:1,ethereum_sepolia:11155111,ethereum_arbitrum:42161},h=Object.entries(r).reduce((i,[e,a])=>(i[a]=e,i),{});exports.chainToId=r;exports.idToChain=h;exports.orderPairGenerator=s;
