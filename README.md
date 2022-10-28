# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  d
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00

0

```


#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is linted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class

#### Extended
- [ ] See a coach!

# Approach

## Jasmine

```
Run the follows commands to be able to start write tests with jasmine:
* npm init -y
* npm i --save-dev jasmine
* npx jasmine init
```
```
On the file package.json change the "scripts" section to:
* "test": "jasmine"
```
```
To test with jasmine now we use the command:
* npm test
```
## Domain Modelling


### Bank Class

| Objects | Properties | Messages    | Output  |
| ------- | ---------- | ----------- | ------- |
| Bank    | #bankID    |             | @number |
|         | #accounts  | new account | @array  |
|         |            |             |         |

### Account Class

| Objects | Properties    | Messages           | Output  |
| ------- | ------------- | ------------------ | ------- |
| Account | #accountID    |                    | @number |
|         | #client       | new Clients()      | @array  |
|         | #transactions | new Transactions() | @array  |
|         | #statement    | new Statement()    | @array  |
|         | #accounts     | accounts[]         | @array  |


### Client Class

| Objects | Properties         | Messages        | Output  |
| ------- | ------------------ | --------------- | ------- |
| Client  | #ClientID          |                 | @number |
|         | this.#transactions | addTransactions | @array  |
|         | #clients           | clients[]       | @array  |

### Transaction Class 

| Objects     | Properties     | Messages       | Output  |
| ----------- | -------------- | -------------- | ------- |
| Transaction | #transactionID |                | @number |
|             | #balance       |                | @number |
|             | #deposits      | deposits[]     | @array  |
|             | #withdraws     | withdraws[]    | @array  |
|             | #transactions  | transactions[] | @array  |


### Statement Class

| Objects   | Properties     | Messages | Output   |
| --------- | -------------- | -------- | -------- |
| Statement | #transactions; |          | @Display |
|           |                |          |          |
|           |                |          |          |



