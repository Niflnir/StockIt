<template lang="">
  <div
    class="absolute flex flex-col justify-center items-center w-full h-full bg-purple text-white font-mt"
  >
    <div
      class="flex relative w-2/3 h-2/3 bg-white rounded-r-lg overflow-y-clip"
    >
      <div class="w-[500px]">
        <img src="../assets/ModalImage.jpg" />
      </div>
      <div class="flex flex-col w-2/3 items-center py-10 px-36">
        <div
          class="flex text-dpurple items-center space-x-3 mr-5 font-dm text-[3rem] mb-8"
        >
          <div>STOCK</div>
          <img class="w-5/6 h-5/6" src="../assets/StockIt Logo.svg" />
          <div>IT</div>
        </div>
        <div class="text-dpurple text-lg mb-20">
          Your Personal Ecommerce Inventory Manager
        </div>
        <hr class="bg-purple outline-purple border w-1 h-1" />
        <div
          class="flex flex-col text-dpurple self-start space-y-2 w-full mb-10"
        >
          <input
            ref="email"
            placeholder="Email"
            class="text-lg rounded-lg px-3 py-3 w-30 bg-gray-100 w-full outline-none border-2 border-white focus:border-lpurple transition"
          />
          <input
            ref="password"
            placeholder="New Password"
            class="text-lg rounded-lg px-3 py-3 w-30 bg-gray-100 w-full border-2 border-white focus:border-lpurple outline-none transition"
          />
        </div>
        <div class="flex space-x-5 w-full">
          <button
            @click="resetPasswordHandler"
            class="text-lg px-4 py-3 rounded-md w-full text-white bg-purple border border-purple transition duration-150 hover:scale-105"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    async resetPasswordHandler() {
      window.location.assign("/login");
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      try {
        const res = await axios.post("/api/auth/reset", {
          email: email,
          password: password,
        });
        router.push({ path: "/login" });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
