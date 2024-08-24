<template>
  <div class="tradingview-widget-container" ref="container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright">
      <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
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
        "withdateranges": true,
        "range": "YTD",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "hotlist": true,
        "calendar": false,
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

</style>
