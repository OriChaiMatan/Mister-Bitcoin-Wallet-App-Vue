<template>
<section class="statistic-page">
    <div class="content">
      <h2>Statistics</h2>
      <p>
        The <strong>Bitcoin-Statistics</strong> page offers key metrics like market price, market cap, trading volume, hash rate, and transaction data to help users track Bitcoin’s performance and blockchain activity.<br />
        For better visualization, you can choose between a simple chart for quick insights or a detailed master chart for in-depth analysis, allowing for a customizable experience based on your needs.
      </p>
    </div>
    <div class="chart-links">
        <RouterLink to="/statistic/simple-chart" class="chart-link">Simple Chart</RouterLink>
        <RouterLink to="/statistic/master-chart" class="chart-link">Master Chart</RouterLink>
      </div>

      <RouterView />
</section>
</template>

<script>
</script>

<style lang="scss">
.statistic-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  gap: 15px;
  
  .content {
    text-align: center;
    max-width: 800px;
    padding: 20px;
    background-color: #2d2935;
    border-radius: 8px;
    margin: 15px;
  }

  h2 {
    margin-bottom: 16px;
    font-size: 28px;
  }

  p {
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .chart-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
    align-items: center;

    .chart-link {
      padding: 10px 20px;
      background: #181420;

    border: 1px solid #654bc1;
      color: white;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #444;
      }
    }
  }
}
</style>
