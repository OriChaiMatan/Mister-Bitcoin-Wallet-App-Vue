<template>
  <div class="app">
      <AppHeader />
    <main>
      <RouterView />
    </main>
      <AppFooter />
    <UserMsg />
  </div>
</template>

<script >
import UserMsg from "./cmps/UserMsg.vue"
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'

export default {
  components: {
    UserMsg,
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss" scoped>
main {
    min-height: calc(90vh - 1rem);
    padding: .5em;
}
</style>
