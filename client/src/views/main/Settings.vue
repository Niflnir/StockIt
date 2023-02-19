<template lang="">
  <div class="settings">
    <div class="personalinfo">
      <div class="profilepic">
        <img src="../../assets/images/avatars/avtar_1.png" alr="ProfilePicture">
      </div>
      <div class="infohead">Name</div>
      <div class="inforow">
        <div class="infotext">Bobbilicious the Third</div>
        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
      </div>
      <div class="infohead">Email</div>
      <div class="inforow">
        <div class="infotext">bobby.the.third@gmail.com</div>
        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
      </div>
      <div class="infohead">Password</div>
      <div class="inforow">
        <input type="password" id="pass" name="password" minlength="8" readonly="true" required value="11111111111">
        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
      </div>
      <div class="infohead">Phone No.</div>
      <div class="inforow">
        <div class="infotext">+65 8200 4123</div>
        <font-awesome-icon icon="fa-solid fa-pen-to-square" />
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="scss">
.settings {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .profilepic {
    height: 10vw;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 10vw;
      border-radius: 10vw;
      margin-bottom: 3rem;
    }
  }
  .inforow {
    display: flex;
    flex-direction: row;
    align-items: center;
    .infohead {
      cursor: default;
    }
    .infotext {
      font-family: 'Mulish', sans-serif;
      font-weight: 800;
      letter-spacing: 1px;
      font-size: 18px;
      color: #454648;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-right: 2rem;
      cursor: default;
    }
    input {
      background-color: transparent;
      border-width: 0px;
      cursor: default;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-right: 2rem;
      // text-align: center;
    }
  }
}
</style>
