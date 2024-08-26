<template>
  <div class="transfer-funds">
    <h3>Transfer Funds</h3>
    <form @submit.prevent="handleTransfer">
      <div class="form-group">
        <label for="amount">Amount</label>
        <input
          type="number"
          id="amount"
          v-model.number="amount"
          placeholder="Enter amount"
          min="0.01"
          step="0.01"
          required
        />
      </div>
      <button type="submit" class="transfer-button">Transfer</button>
      <p v-if="message" :class="messageClass">{{ message }}</p>
    </form>
  </div>
</template>

<script>
import { userService } from '../services/userService';
import { showErrorMsg, showSuccessMsg } from "../services/eventBusService.js";

export default {
  data() {
    return {
      amount: 0,
      message: '',
      messageClass: '',
    };
  },
  props: {
    contactId: {
      type: String,
      required: true,
    },
    contactName: {
      type: String,
      required: true,
    },
  },
  methods: {
    async handleTransfer() {
      try {
        const transaction = userService.transferFunds(this.contactId, this.contactName, this.amount);
        this.message = `Successfully transferred ${this.amount} Coins.`;
        this.messageClass = 'success';
        showSuccessMsg(`Successfully transferred ${this.amount} Coins to: ${this.contactName}`);
      } catch (error) {
        this.message = error.message;
        this.messageClass = 'error';
        showErrorMsg("Error in transferred")
      }
    },
  },
};
</script>

<style scoped>
.transfer-funds {
  margin-top: 20px;
  padding: 20px;
  background-color: #181420;
  border: 1px solid #654bc1;
  border-radius: 10px;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  color: #fff;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="number"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.transfer-button {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  background-color: #2d2935;
  border: 1px solid #654bc1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.transfer-button:hover {
  background-color: #444;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>
