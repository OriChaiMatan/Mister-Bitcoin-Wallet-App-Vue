<template>
  <div class="transaction-list">
    <h3>Transaction History</h3>
    <ul>
      <li v-if="filteredTransactions.length === 0">No transactions found.</li>
      <li v-for="transaction in filteredTransactions" :key="transaction.at">
        <div class="transaction-item">
          <span>To: {{ transaction.to }}</span>
          <span>Amount: {{ transaction.amount }} BTC</span>
          <span>Date: {{ new Date(transaction.at).toLocaleString() }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { userService } from '../services/userService';

export default {
  props: {
    contactId: {
      type: String,
      default: '',
    },
    limit: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    this.loadTransactions();
  },
  computed: {
    filteredTransactions() {
      if (this.contactId) {
        const transactionsToContact = this.transactions.filter(transaction => transaction.toId === this.contactId);
        return this.limit ? transactionsToContact.slice(-this.limit).reverse() : transactionsToContact;
      } else {
        return this.limit ? this.transactions.slice(-this.limit).reverse() : this.transactions;
      }
    },
  },
  methods: {
    loadTransactions() {
      const user = userService.getUser();
      this.transactions = user.transactions;
    },
  },
};
</script>

<style scoped>
.transaction-list {
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #181420;
  border: 1px solid #654bc1;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #fff;
}

ul {
  list-style: none;
  padding: 0;
}
li {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  color: #fff;
}

.transaction-item {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.transaction-item:last-child {
  border-bottom: none;
}

span {
  display: block;
  margin-bottom: 5px;
}
</style>
