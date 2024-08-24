<template>
  <div class="tradingview-widget-container" ref="container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
      <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        <span class="blue-text">Track all markets on TradingView</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "CRYPTO:BTCUSD",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "withdateranges": true,
        "range": "YTD",
        "allow_symbol_change": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    this.$refs.container.appendChild(script);
  }
}
</script>

<style scoped>
.tradingview-widget-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.tradingview-widget-container__widget {
  height: 100%;
  width: 100%;
}

.tradingview-widget-copyright {
  text-align: center;
  margin-top: 10px;
}

@media (max-width: 600px) {
  .tradingview-widget-container {
    height: 400px; /* Height for small screens */
  }
}

@media (min-width: 601px) and (max-width: 1200px) {
  .tradingview-widget-container {
    height: 700px; /* Height for medium screens */
  }
}

@media (min-width: 1201px) {
  .tradingview-widget-container {
    height: 900px; /* Height for large screens */
  }
}
</style>
