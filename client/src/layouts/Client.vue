<template>
  <div class="app">
    <Navbar />
    <div class="mainarea">
      <div class="topbar">
        <div class="title">{{ currentPathName }}</div>
        <div class="profile">
          <div class="profilename">Bobbilicious The Third</div>
          <div class="dropdown">
            <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="../assets/images/avatars/avtar_1.png" class="profilepic" alt="Avatar">
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
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
    width: 67vw;
  }
  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    .profilename {
      font-family: 'Mulish', sans-serif;
      font-weight: 800;
      letter-spacing: 1px;
      font-size: 15px;
      color: #454648;
      max-width: 10vw;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .dropdown {
      .dropdown-toggle {
        border: 0px;
        background-color: #F5F6FA;
      }
    }
    img {
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }
  }
}
</style>
