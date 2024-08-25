<template>
    <section class="contact-filter">
        <input @input="onFilterBy" v-model="filterBy.txt" type="text" placeholder="Search">
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: { txt: '' }
        }
    },
    methods: {
        onFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">
.contact-filter {
  padding: 1rem;
  border-radius: 8px;
  width: 90%;

  input {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #654bc1;
    border-radius: 4px;
    font-size: 1rem;
    background-color: #2d2935;
    color: #fff;

    &::placeholder {
      color: #aaa;
    }

    &:focus {
      border-color: #7d63ca;
      outline: none;
    }
  }
}
</style>