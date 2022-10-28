const Bank = require("./Bank");
const Statement = require("./Statement");

class Main {
    
    static main() {
        const account = new Bank();
        account.accounts.statement.printStatement();
    }

}
        Main.main();