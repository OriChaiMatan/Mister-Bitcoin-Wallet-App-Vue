<template>
  <div class="simple">
    <LineChart
      v-if="marketPriceHistory"
      :data="formattedData(marketPriceHistory)"
    />
  </div>
</template>

<script>
import LineChart from "../cmps/LineChart.vue";
import { bitcoinService } from '../services/bitcoinService'
export default {
  data() {
    return {
      marketPriceHistory: null,
    };
  },
  async created() {
    this.marketPriceHistory = await bitcoinService.getMarketPriceHistory();
  },
  components: {
        LineChart
    },
  computed: {
    formattedData() {
      return (data) => {
        let dataPoints = data.values;
        const dates = [];
        const values = [];
        dataPoints = dataPoints.map((xyObj) => {
          const date = new Date(xyObj.x * 1000);
          const day = String(date.getDay() + 1).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          dates.push(`${day}/${month}`);
          values.push(xyObj.y);
        });
        const dataset = {
          data: values,
          label: data.name,
          borderColor: "#FFFFFF",
          backgroundColor: "rgb(13, 113, 160)",
        };
        return { datasets: [dataset], labels: dates };
      };
    },
  },
};
</script>

<style>
.simple {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 500px);
  grid-auto-rows: 1fr;
  column-gap: 60px;
  justify-content: center;
}
</style>