// Prompt for Lemonade Change
// You are running a lemonade stand and decide to sell lemonade for $5 per cup.
// Customers will be paying with either a $5 bill, a $10 bill, or a $20 bill.
// You need to provide the correct change to each customer.
// Return true if you can provide change to every customer, otherwise return false.

function canProvideChange(bills) {
    let fiveDollarCount = 0;
    let tenDollarCount = 0;
    
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
        fiveDollarCount++;
        } else if (bills[i] === 10) {
        if (fiveDollarCount > 0) {
            fiveDollarCount--;
            tenDollarCount++;
        } else {
            return false;
        }
        } else if (bills[i] === 20) {
        if (tenDollarCount > 0 && fiveDollarCount > 0) {
            tenDollarCount--;
            fiveDollarCount--;
        } else if (fiveDollarCount >= 3) {
            fiveDollarCount -= 3;
        } else {
            return false;
        }
        }
    }
    return true;
}

console.log(canProvideChange([5, 5, 5, 10, 20])); // true

module.exports = canProvideChange;
