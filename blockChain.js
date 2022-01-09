
import Block from './block.js';
import Transaction from './transaction.js';

class BlockChain{
    constructor(difficulty=2){
        this.chain = [this.createGenesisBlock('Genesis Block')];
        this.difificulty = difficulty;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock(genesis){ return new Block(0, genesis) }
    getLastBlock(){ return this.chain[this.chain.length-1] }
    
    /*addBlock(data){
        const previusBlock = this.getLastBlock();
        const newBlock = new Block(previusBlock.index+1, data, previusBlock.hash);
        newBlock.mine(this.difificulty);
        console.log(`Block ${newBlock.index} has been mined! ${newBlock.hash} in ${newBlock.nonce}  `);
        this.chain.push(newBlock);
    }*/

    addTransaction(transaction){
        if(!transaction.fromAddress || !transaction.toAddress){
            throw new Error('Transaction must include from and to address');
        }
        if(!this.isValidChain()){
            throw new Error('Cannot add invalid transaction to chain');
        }
        const previusBlock = this.getLastBlock();
        this.pendingTransactions.push(transaction);
    }

    miningPendingTransactions(addressMiner){
        const previusBlock = this.getLastBlock();

        let block = new Block(previusBlock.index+1, this.pendingTransactions,previusBlock.hash);
        block.mine(this.difificulty);
        console.log(`Block ${block.index} has been mined! ${block.hash} in ${block.nonce}  `);
        this.chain.push(block);
        this.pendingTransactions = [
            new Transaction(null, addressMiner, this.miningReward)
        ];
    }

    getBalanceOfAddress(address){
        let balance = 0;
        for(const block of this.chain){
            for(const transation of block.transactions){
                if(transation.fromAddress === address){
                    balance -= transation.amount;
                }
                if(transation.toAddress === address){
                    balance += transation.amount;
                }
            }
        }
        return balance;
    }



    isValidChain(){
        for(let i=1; i<this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previusBlock = this.chain[i-1];
            if(currentBlock.hash !== currentBlock.calculateHash()) return false;
            if(currentBlock.previusHash !== previusBlock.hash) return false;
        }
        return true;
    }

    toString(){
        return JSON.stringify(this.chain, null, 2)
    }
}

export default BlockChain;
