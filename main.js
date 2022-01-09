

import Block from './block.js';
import BlockChain from './blockChain.js';
import Transaction from './transaction.js';


//let block = new Block(0, 'prueba')
//console.log(JSON.stringify(block, null, 2));

let tuCoin = new BlockChain(2)
//console.log(JSON.stringify(naniCoin.chain, null, 2));
//naniCoin.addBlock('segunda prueba')
//console.log(JSON.stringify(naniCoin.chain, null, 2));
//naniCoin.addBlock('tercera prueba')
tuCoin.addTransaction( new Transaction('yo','tu',20))
tuCoin.addTransaction( new Transaction('juan','tu',50))
tuCoin.miningPendingTransactions('yo')
console.log('Minando --------');
console.log(tuCoin.toString());
console.log('Minando --------');

tuCoin.miningPendingTransactions('yo')
console.log(tuCoin.toString());

console.log('balance yo',tuCoin.getBalanceOfAddress('yo'))
console.log('balance tu',tuCoin.getBalanceOfAddress('tu'))
console.log('balance juan',tuCoin.getBalanceOfAddress('juan'))
//naniCoin.chain[1].data = 'cambio de datos'
console.log(tuCoin.isValidChain());