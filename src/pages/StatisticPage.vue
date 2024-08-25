<template>
<section class="statistic-page">
    <h1>Bitcoin Market Data:</h1>
    <MasterChart />
</section>
</template>

<script>
import MasterChart from '../cmps/MasterChart.vue'
export default {
    components: {
       MasterChart
    }
}
</script>

<style lang="scss">
.statistic-page{
    height: 600px;
    align-items: center;

    h1{
        color: #fff;
    }
}
</style>
