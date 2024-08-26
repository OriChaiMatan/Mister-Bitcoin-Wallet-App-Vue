<template>
  <div class="signup-page">
    <div class="signup-form-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <button type="submit" class="signup-button">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    handleSubmit() {
      if (!this.username) return;

      // Check if the user exists in localStorage
      const storedUser = JSON.parse(localStorage.getItem(this.username));

      if (storedUser) {
        // User exists, log them in with their stored data
        localStorage.setItem('currentUser', JSON.stringify(storedUser));
      } else {
        // New user, create and store user with 100 Bitcoin balance
        const newUser = {
          name: this.username,
          balance: 100,
          transactions: [],
        };
        localStorage.setItem(this.username, JSON.stringify(newUser));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
      }

      // Redirect to home page
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-form-container {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.signup-button {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  background-color: #181420;
  border: 1px solid #654bc1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup-button:hover {
  background-color: #444;
}
</style>
