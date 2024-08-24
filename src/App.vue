<template>
  Mr.BitCoin
  <main>
    <RouterView />
  </main>
  <UserMsg />
</template>

<script >
import UserMsg from "./cmps/UserMsg.vue";

export default {
  components: {
    UserMsg,
  },
};
</script>

<style scoped>
</style>
