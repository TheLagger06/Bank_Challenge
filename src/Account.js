const Clients = require("./Clients");
const Statement = require("./Statement");
const Transactions = require("./Transactions");

class Account {


    constructor(clientObject = new Clients(12), transactionsObject = new Transactions(clientObject.clients, this.balance = 0), statementObject = new Statement(clientObject.clients)) {
        this.accountID = 1;
        this.client = clientObject.clients;
        // this.balance = transactionsObject.transactions[0].balance;
        this.transactions = transactionsObject.transactions;
        this.statement = statementObject;
        this.accounts = [{ "accountID": this.accountID, "Clients": this.client, "Transactions": this.transactions, "Statement": this.statement }];
        
    }
}


module.exports = Account;