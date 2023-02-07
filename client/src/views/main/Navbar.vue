<template lang="">
  <div>
    <aside>
      <div class="logo">
        <img src="../../assets/images/icons/stockit_logo.png" alr="Vue">
        <div>Stock It!</div>
      </div>
      <div class="menu">
        <router-link class="button" to="/default">
          <div class="container">
            <div class="icon">
              <font-awesome-icon icon="fa-fw fa-solid fa-chart-pie" />
            </div>
            <span class="text">Overview</span>
          </div>
        </router-link>
        <router-link class="button" to="/default/import">
          <div class="container">
            <div class="icon">
              <font-awesome-icon icon="fa-fw fa-solid fa-ticket" />
            </div>
            <span class="text">Import / Export</span>
          </div>
        </router-link>
        <router-link class="button" to="/default/products">
          <div class="container">
            <div class="icon">
              <font-awesome-icon icon="fa-fw fa-solid fa-tag" />
            </div>
            <span class="text">Products</span>
          </div>
        </router-link>
        <router-link class="button" to="/default/platforms">
          <div class="container">
            <div class="icon">
              <font-awesome-icon icon="fa-fw fa-solid fa-user-group" />
            </div>
            <span class="text">Platforms</span>
          </div>
        </router-link>
        <router-link class="button" to="/default/support">
          <div class="container">
            <div class="icon">
              <font-awesome-icon icon="fa-fw fa-solid fa-user" />
            </div>
            <span class="text">Support</span>
          </div>
        </router-link>
        <hr class="divider">
        <router-link class="button" to="/default/settings">
          <div class="container">
            <div class="icon">
              <font-awesome-icon icon="fa-fw fa-solid fa-gear" />
            </div>
            <span class="text">Settings</span>
          </div>
        </router-link>
      </div>
    </aside>
  </div>
</template>
<script>
// import { faChartPie, faArrowTurnRight, faTag, faUserGroup, faTicket, faGear } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'Navbar'
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
aside {
  display: flex;
  flex-direction: column;
  width: 270px;
  min-height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 10000;

  background-color: #F5F6FA;
  color: var(--light);

  .logo {
    padding-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 6rem;
    }
    div {
      padding-left: 10px;
      font-family: 'Mulish', sans-serif;
      font-weight: 500;
      letter-spacing: 2px;
      font-size: 22px;
      display: flex;
      align-items: center;
      color: #68696e;
    }
  }
  .divider {
    border-color: #DFE0EB;
    border-width: 1px;
    margin-top: 40px;
  }
  .button {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: 1rem;
    color: #7c7d86;
    .container {
      display: flex;
      flex-direction: row;
      .icon {
        width: 1.1rem;
      }
      span {
        padding-left: 20px;
        font-family: 'Mulish', sans-serif;
        font-size: 18px;
        font-weight: 100;
      }
    }
    &:hover, &.router-link-exact-active{
      background-color: #ffffff;
      .text {
        color: #454648;
      }
      .icon {
        color: #454648;
      }
      transition: 0.2s ease-out;
    }
    &.router-link-exact-active {
      border-left: 3px solid #4b4b4b;
    }
  }
}
</style>
