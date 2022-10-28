const Account = require("../src/Account");
const Clients = require("../src/Clients");

describe(`Test 1`, () => {

	it(`Test if the clients transactions were add to the array `, () => {
		//arrange
		const account = new Account();
		
		expected = 3;

		//act
		actual = account.client[0].transactions.length;

		//assert
		expect(actual).toBe(expected);
	});
    
});