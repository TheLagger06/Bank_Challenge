class Clients{

    #clientID;
    #transactions;
    #clients;

    constructor(clientsObject) {
        this.#clientID = clientsObject;
        this.#transactions = [];
        this.addTransactions(this.#transactions)
        this.#clients = [{ "clientID": this.#clientID, "transactions": this.#transactions} ];
    }

    addTransactions() {
        this.transactions.push(
            { date: '10/01/2012', typeOfTransaction: 'Deposit', Amount: 1000 },
            { date: '13/01/2012', typeOfTransaction: 'Deposit', Amount: 2000 },
            { date: '14/01/2012', typeOfTransaction: 'Withdraw', Amount: 500 });
            return this.transactions;
        
    }

 //Getters and Setters
    
    get clients() {
        return this.#clients;
    }    
    get transactions() {
        return this.#transactions;
    }

    set transactions(transactions) {
        this.#transactions = transactions;
    }

}
module.exports = Clients;