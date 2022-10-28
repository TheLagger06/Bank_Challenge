const Account = require('../src/Account');
const Transactions = require('../src/Transactions');

describe(`Test 1`, () => {
	it(`Check the date of the first deposit`, () => {
		//arrange
		const account = new Account();
		expected = "10/01/2012";

		//act
		actual = account.transactions[0].deposits[0].date;

		//assert
		expect(actual).toBe(expected);
    });

    it(`Test the type of the first deposit`, () => {
		//arrange
		const account = new Account();
		expected = "Deposit";

		//act
		actual = account.transactions[0].deposits[0].typeOfTransaction;

		//assert
		expect(actual).toBe(expected);
    });

    it(`Test the amount of the first deposit`, () => {
	//arrange
	const account = new Account();
	expected = 1000;

	//act
	actual = account.transactions[0].deposits[0].Amount;

	//assert
	expect(actual).toBe(expected);
    });
    
    it(`Test the balance after first deposit`, () => {
	//arrange
	const account = new Account();
	expected = 1000;

	//act
	actual = account.transactions[0].deposits[0].Balance;

	//assert
	expect(actual).toBe(expected);
    });
    
     it(`Test the balance after second deposit`, () => {
	//arrange
	const account = new Account();
	expected = 1000 +2000;

	//act
	actual = account.transactions[0].deposits[1].Balance;

	//assert
	expect(actual).toBe(expected);
     });
    
    it(`Test the type of the first withdraw`, () => {
	//arrange
	const account = new Account();
	expected = "Withdraw";

	//act
	actual = account.transactions[0].withdraws[0].typeOfTransaction;

	//assert
	expect(actual).toBe(expected);
    });
    
     it(`Test the balance after third transaction`, () => {
	//arrange
	const account = new Account();
	expected = 1000 +2000 -500;

	//act
	actual = account.transactions[0].withdraws[0].Balance;

	//assert
	expect(actual).toBe(expected);
    });


});
