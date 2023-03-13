<template lang="html">
  <div class="connect">
    <div class="title">Connections</div>
    <div class="subheading">Not selling on a platform yet? Click <u href="#">here</u> to get started</div>
    <div class="white-box">
      <div class="platform-display">
        <div class="display-row">
          <div class="card" @click="shopify_link()" :class="{ green_outline: shopify }">
            <img src="../../assets/images/platforms/shopify.webp" class="card-img-top" alt="...">
          </div>
          <div class="card" @click="lazada_link()" :class="{ green_outline: lazada }">
            <img src="../../assets/images/platforms/lazada.png" class="card-img-top" alt="...">
          </div>
          <div class="card">
            <img src="../../assets/images/platforms/shopee.png" class="card-img-top" alt="...">
          </div>
        </div>
        <div class="display-row">
          <div class="card">
            <img src="../../assets/images/platforms/amazon.png" class="card-img-top" alt="...">
          </div>
          <div class="card">
            <img src="../../assets/images/platforms/ebay.png" class="card-img-top" alt="...">
          </div>
          <div class="card">
            <img src="../../assets/images/platforms/magento.jpg" class="card-img-top" alt="...">
          </div>
        </div>
      </div>
    </div>
    <div class="connection">
      <div class="green-dot"></div>
      <div>Connected</div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      shopify: false,
      lazada: false
    }
  },
  mounted () {
    this.checkShopifyConnection()
    this.checkLazadaConnection()
  },
  methods: {
    async shopify_link () {
      const res = await axios.get('https://www.stockit.live/api/shopify')
      window.open(res.data, '_blank', 'popup=true')
      console.log(res)
    },
    async lazada_link () {
      const res = await axios.get('https://www.stockit.live/api/lazada')
      window.open(res.data, '_blank', 'popup=true')
      console.log(res)
    },
    async checkShopifyConnection () {
      try {
        const res = await axios.get('/api/shopify/checktoken')
        console.log(res)
        if (res.status === 200) {
          this.shopify = true
        }
      } catch (err) {
        console.log(err)
      }
    },
    async checkLazadaConnection () {
      try {
        const res = await axios.get('/api/lazada/checktoken')
        console.log(res)
        if (res.status === 200) {
          this.lazada = true
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="scss">
.connect {
  padding-left: 2rem;
  width: 70vw;
  .title {
    font-family: 'Mulish', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    font-size: 26px;
    color: #454648;
  }
  .subheading {
    font-size: small;
    padding-bottom: 1rem;
  }
  .white-box {
    width: 68vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 10px 30px 0 rgb(17 38 146 / 5%);
    padding: 2rem;
    .platform-display {
      display: flex;
      flex-direction: column;
      .display-row {
        display: flex;
        flex-direction: row;
      }
      .green_outline {
        border-color: #76b17e;
        border-width: 3px;
        pointer-events: none;
      }
      .card {
        display: flex;
        justify-content: center;
        width: 18vw;
        height: 25vh;
        margin: 1vw;
        background-color: #ffffff;
        box-shadow: 0 10px 30px 0 rgb(17 38 146 / 5%);
        img {
          width: 10vw;
          margin: auto;
          height: auto;
        }
        &:hover {
          background-color: #e5e6ed;
          cursor: pointer;
        }
      }
    }
  }
  .connection {
    padding: 0.5rem;
    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;
    .green-dot {
      width: 10px;
      height: 10px;
      background-color: #76b17e;
      border-radius: 10px;
      margin: 10px;
      box-shadow: 0 10px 30px 0 rgb(17 38 146 / 5%);
    }
  }
}
</style>
