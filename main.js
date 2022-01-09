

import Block from './block.js';
import BlockChain from './blockChain.js';
import Transaction from './transaction.js';


let tuCoin = new BlockChain(2)

tuCoin.addTransaction( new Transaction('yo','tu',20))
tuCoin.addTransaction( new Transaction('el','tu',50))

console.log('Mining.........');
tuCoin.miningPendingTransactions('yo')
console.log(tuCoin.toString());

console.log('Mining.........');
tuCoin.miningPendingTransactions('yo')
console.log(tuCoin.toString());

console.log('balance yo',tuCoin.getBalanceOfAddress('yo'))
console.log('balance tu',tuCoin.getBalanceOfAddress('tu'))
console.log('balance el',tuCoin.getBalanceOfAddress('juan'))

console.log("Chain valid? ",tuCoin.isValidChain());