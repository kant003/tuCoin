import SHA256 from 'crypto-js/sha256.js';


class Block{
    constructor(index, transactions, previusHash=''){
        this.index = index;
        this.date = new Date();
        this.transactions=transactions;
        this.previusHash = previusHash;
        this.hash = this.calculateHash();
        this.nonce = 0
    }

    calculateHash(){
        return SHA256(this.index + this.date + JSON.stringify(this.transactions) + this.previusHash + this.nonce).toString();
    }
    
    mine(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
    }
}

export default Block;
