/*
Bank account list
*/

class BankAccount {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    credit(amount) {
        this.balance += amount;
    }
    describe() {
        return `Owner: ${this.name}, balance: ${this.balance}`;
    }
}

const accountList = [
    new BankAccount('Sean'),
    new BankAccount('Brad'),
    new BankAccount('Georges')
]

for (let account of accountList) {
    account.credit(1000)
    console.log(account.describe())
}