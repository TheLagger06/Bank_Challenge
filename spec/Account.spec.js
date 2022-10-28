const Account = require('../src/Account');
const Transactions = require('../src/Transactions');


describe(`Test 1`, () => {
	it(`Test if the client ID was created `, () => {
		//arrange
		const account = new Account();
		
		expected = 12;

		//act
		actual = account.client[0].clientID;

		//assert
		expect(actual).toBe(expected);
	});


	it(`Test if the transactions ID was created`, () => {
		//arrange
		const account = new Account();

		expected = 1;

		//act
		actual = account.accounts[0].accountID;

		//assert
		expect(actual).toBe(expected);
	});
});

