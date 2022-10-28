class Statement{

 #transactions;
    
    constructor(StatementObject) {
        this.#transactions = StatementObject[0].transactions.reverse();
    }
    get transactions() {
        return this.#transactions;
    }

    printStatement() {
      console.log("date       || credit   || debit  || balance");
            for (let i = 0; i < this.#transactions.length; i++) {
                if (this.#transactions[i].typeOfTransaction === "Withdraw") {
                    console.log(`${this.#transactions[i].date} ||          || ${this.#transactions[i].Amount.toFixed(2)} || ${this.#transactions[i].Balance.toFixed(2)}`)
                } else {
                    console.log(`${this.#transactions[i].date} || ${this.#transactions[i].Amount.toFixed(2)}  ||        || ${this.#transactions[i].Balance.toFixed(2)}`)
                }
            }
    }
    
       
    

    

    

}

module.exports = Statement;