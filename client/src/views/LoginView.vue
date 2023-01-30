<template lang="">
  <div
    class="absolute flex flex-col justify-center items-center w-full h-full bg-purple text-white font-mt"
  >
    <div
      class="flex relative w-2/3 h-2/3 bg-white rounded-r-lg overflow-y-clip"
    >
      <div class="w-[500px]">
        <img src="../assets/images/ModalImage.jpg" />
      </div>
      <div class="flex flex-col w-2/3 items-center py-10 px-36">
        <div
          class="flex text-dpurple items-center space-x-3 mr-5 font-dm text-[3rem] mb-8"
        >
          <div>STOCK</div>
          <img class="w-5/6 h-5/6" src="../assets/images/StockItLogo.svg" />
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
            v-if="!forgotPassword"
            ref="password"
            placeholder="Password"
            class="text-lg rounded-lg px-3 py-3 w-30 bg-gray-100 w-full border-2 border-white focus:border-lpurple outline-none transition"
          />
        </div>
        <div
          @click="toggleForgotPassword"
          class="text-md text-purple mb-14 hover:underline cursor-pointer"
        >
          <div v-if="!forgotPassword">Forgot your password?</div>
          <div v-if="forgotPassword">Already have an account?</div>
        </div>
        <div v-if="!forgotPassword" class="flex space-x-5 w-full">
          <button
            @click="signUpHandler"
            class="text-lg px-4 py-3 rounded-md w-1/2 text-purple bg-white border border-purple transition hover:bg-purple hover:scale-105 hover:text-white duration-150"
          >
            Sign up
          </button>
          <button
            @click="loginHandler"
            class="text-lg px-4 py-3 rounded-md w-1/2 text-white bg-purple border border-purple transition duration-150 hover:scale-105"
          >
            Login
          </button>
        </div>
        <div v-if="forgotPassword" class="flex space-x-5 w-full">
          <button
            @click="forgotPasswordHandler"
            class="text-lg px-4 py-3 rounded-md w-full text-white bg-purple border border-purple transition duration-150 hover:scale-105"
          >
            Send reset password link
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      forgotPassword: false,
    };
  },
  methods: {
    async loginHandler() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      try {
        const res = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
    async signUpHandler() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      try {
        const res = await axios.post("/api/auth/signup", {
          email: email,
          password: password,
        });
        console.log(res.data);
        location.reload();
      } catch (err) {
        console.log(err);
      }
    },
    toggleForgotPassword() {
      this.forgotPassword = !this.forgotPassword;
    },
    async forgotPasswordHandler() {
      const email = this.$refs.email.value;
      try {
        const res = await axios.post("/api/auth/forgot", {
          email: email,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
