<template>
<section class="statistic-page">
    <h1>Bitcoin Market Data:</h1>
    <Chart />
</section>
</template>

<script>
import Chart from '../cmps/Chart.vue'
export default {
    components: {
       Chart
    }
}
</script>

<style lang="scss">
.statistic-page{
    height: 600px;
}
</style>
