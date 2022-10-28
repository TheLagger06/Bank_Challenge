const Account = require("./Account");

class Bank{

    constructor(accountObject = new Account()) {
        this.bankID = 1;
        this.accounts = accountObject; 
        this.banks = [{ "bankID": this.bankID, "Accounts": this.accounts }];
    }

 
}

module.exports = Bank;