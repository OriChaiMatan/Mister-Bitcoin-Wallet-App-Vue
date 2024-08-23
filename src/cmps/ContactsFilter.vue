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

</style>