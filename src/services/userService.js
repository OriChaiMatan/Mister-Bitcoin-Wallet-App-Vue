const defaultUser = {
  balance: 100,
  transactions: [],
};

function getUser() {
  return JSON.parse(localStorage.getItem('currentUser')) || defaultUser;
}

function saveUser(user) {
  localStorage.setItem(user.name, JSON.stringify(user));
  localStorage.setItem('currentUser', JSON.stringify(user));
}

function transferFunds(toId, to, amount) {
  const user = getUser();
  
  // Check if user has sufficient balance
  if (user.balance < amount) {
    throw new Error('Insufficient balance');
  }

  // Create a new transaction
  const transaction = {
    toId,
    to,
    at: Date.now(), // Current timestamp
    amount,
  };

  // Update user's balance and transactions
  user.balance -= amount;
  user.transactions.push(transaction);

  // Save updated user data to local storage
  saveUser(user);

  return transaction;
}

function getTransactions() {
  const user = getUser();
  return user.transactions;
}

export const userService = {
  getUser,
  transferFunds,
  getTransactions,
};