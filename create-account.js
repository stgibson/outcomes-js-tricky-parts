function createAccount(pin, amount=0) {
  let currPin = pin;
  let balance = amount;
  return {
    checkBalance(pinGuess) {
      if (pinGuess === currPin) {
        return `$${balance}`;
      }
      return "Invalid PIN.";
    },
    deposit(pinGuess, amt) {
      if (pinGuess === currPin) {
        balance += amt;
        return `Succesfully deposited $${amt}. Current balance: $${balance}.`;
      }
      return "Invalid PIN.";
    },
    withdraw(pinGuess, amt) {
      if (pinGuess === currPin) {
        if (balance >= amt) {
          balance -= amt;
          return `Succesfully withdrew $${amt}. Current balance: $${balance}.`;
        }
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      return "Invalid PIN.";
    },
    changePin(oldPin, newPin) {
      if (oldPin === currPin) {
        currPin = newPin;
        return "PIN successfully changed!";
      }
      return "Invalid PIN.";
    }
  }
}

module.exports = { createAccount };
