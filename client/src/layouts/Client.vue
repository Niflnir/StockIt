<template>
  <div class="app">
    <Navbar />
    <div class="mainarea">
      <div class="topbar">
        <div class="title">Overview</div>
        <div class="profile">
          <div class="profilename">Bobbilicious The Third</div>
          <div class="profilepic">

          </div>
        </div>
        <div style="clear:both"></div>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script setup>
import Navbar from '../views/main/Navbar.vue'

</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
// :root {
//   --dark: #363740;
//   --dark-alt: #4d4f5d;
//   --light: #f1f5f9;
//   --sidebar-width: 270px;
// }
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
  }
}
.mainarea {
  margin-left: 290px;
  width: calc(100vw - 330px);
}
.topbar {
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .title {
    font-family: 'Mulish', sans-serif;
    font-weight: 800;
    letter-spacing: 1px;
    font-size: 26px;
    color: #454648;
  }
  .profile {
    .profilename {
      font-family: 'Mulish', sans-serif;
      font-weight: 800;
      letter-spacing: 1px;
      font-size: 15px;
      width: 70vw;
      color: #454648;
    }
  }
}
</style>
