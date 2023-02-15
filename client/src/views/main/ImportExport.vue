<template lang="">
  <div class="connect">
    <div class="title">Connections</div>
    <div class="subheading">Not selling on a platform yet? Click <u href="#">here</u> to get started</div>
    <div class="white-box">
      <div class="platform-display">
        <div class="display-row">
          <div class="card">
            <img src="../../assets/images/platforms/shopify.webp" class="card-img-top" alt="...">
          </div>
          <div class="card">
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
      background-color: #25ff42;
      border-radius: 10px;
      margin: 10px;
      box-shadow: 0 10px 30px 0 rgb(17 38 146 / 5%);
    }
  }
}
</style>
