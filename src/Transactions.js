const Clients = require("./Clients");
const Statement = require("./Statement");

class Transactions{
    #transactions;
    #transactionID;
    #deposits;
    #withdraws;
    #balance;
    
    constructor(statementObject, balance) { 
        this.#balance = balance;
        this.#transactionID = 1;
        this.#deposits = [];
        this.#withdraws = [];
        this.typeOfTransaction(statementObject[0].transactions)
        this.#transactions = [{ "transactionID": this.#transactionID, "deposits": this.#deposits, "withdraws": this.#withdraws, "balance": this.#balance }];
       
    }
   
    
    typeOfTransaction(transactions) {
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].typeOfTransaction === "Deposit") {
                this.#balance += transactions[i].Amount;
                transactions[i].Balance = this.#balance;
                this.#deposits.push(transactions[i]);
                
            } else if (transactions[i].typeOfTransaction === "Withdraw") {
                this.#balance -= transactions[i].Amount;
                transactions[i].Balance = this.#balance;
                this.#withdraws.push(transactions[i]);
                
            }
        }
    }
     
    get transactions() {
        return this.#transactions;
    }

}

module.exports = Transactions;