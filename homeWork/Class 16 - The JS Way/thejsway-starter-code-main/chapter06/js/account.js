/*
Object-oriented bank account
*/

const account = {
    name: "Alex",
    balance: 0,
    
    credit(transaction) {
        return this.balance += transaction
    },

    describe() {
        return `owner: ${this.name}, balance ${this.balance}`
    }
}

console.log(account.describe())
account.credit(170)
console.log(account.describe())