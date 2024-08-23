<template>
  <section class="home-page">
    <h1>Welcome {{ user.name }}</h1>
    <p>Your balance: {{ user.balance }} USD</p>
    <p>Current Bitcoin Rate: 1 USD = {{ bitcoinRate }} BTC</p>
  </section>
</template>

<script>
import { userService } from "@/services/userService.js";
import { bitcoinService } from "@/services/bitcoinService.js";

export default {
  data() {
    return {
      user: null,
      bitcoinRate: null,
    };
  },
  async created() {
    this.loadUserData();
    await this.loadBitcoinRate();
  },
  methods: {
    loadUserData() {
      this.user = userService.getUser();
    },
    async loadBitcoinRate() {
      try {
        this.bitcoinRate = await bitcoinService.getRate();
      } catch (error) {
        console.error("Failed to load Bitcoin rate:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  text-align: center;
  margin-top: 20px;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    color: #555;
  }

  @media (max-width: 600px) {
    padding: 1rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
}
</style>