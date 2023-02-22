<template>
    <div>
        <section class="login-content">
         <div class="row m-0 align-items-center bg-white vh-100">
            <div class="col-md-6">
               <div class="row justify-content-center">
                  <div class="col-md-10">
                     <div class="card card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                        <div class="card-body">
                           <router-link  :to="{name: 'default.dashboard'}" class="navbar-brand d-flex align-items-center mb-3">
                              <svg width="30" class="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"/>
                                 <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"/>
                                 <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"/>
                                 <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"/>
                              </svg>
                              <h4 class="logo-title ms-3">Hope UI</h4>
                           </router-link>
                           <h2 class="mb-2 text-center">Sign In</h2>
                           <p class="text-center">Login to stay connected.</p>
                            <div class="row">
                                <div class="col-lg-12">
                                  <div class="form-group">
                                      <label for="email" class="form-label">Email</label>
                                      <input type="email" class="form-control" id="email" aria-describedby="email" placeholder=" ">
                                  </div>
                                </div>
                                <div class="col-lg-12">
                                  <div class="form-group">
                                      <label for="password" class="form-label">Password</label>
                                      <input type="password" class="form-control" id="password" aria-describedby="password" placeholder=" ">
                                  </div>
                                </div>
                                <div class="col-lg-12 d-flex justify-content-between">
                                    <router-link  :to="{name: 'auth.recoverPassword'}">Forgot Password?</router-link>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary" @click="login()">Sign In</button>
                            </div>
                            <div class="alert alert-success alertspec" role="alert" v-if="success">
                              <p>Login Successful</p>
                            </div>
                            <div class="alert alert-danger alertspec2" role="alert" v-if="failed">
                              <p>Login credentials are invalid. Please try again!</p>
                            </div>
                            <p class="mt-3 text-center">
                                Don’t have an account? <router-link :to="{name: 'auth.signup'}">Click here to sign up.</router-link>
                            </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="sign-bg">
                  <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g opacity="0.05">
                     <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF"/>
                     <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF"/>
                     <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF"/>
                     <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF"/>
                     </g>
                  </svg>
               </div>
            </div>
            <div class="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
               <img src="@/assets/images/auth/01.png" class="img-fluid gradient-main animated-scaleX" alt="images">
            </div>
         </div>
      </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'SignIn',
  data () {
    return {
      success: false,
      failed: false
    }
  },
  methods: {
    login: async function (email, password) {
      try {
        const res = await axios.post('https://www.stockit.live/api/auth/login', {
          email: 'vaun890@gmail.com',
          password: 'indigo890'
        })
        console.log(res)
        if (res.status === 200) {
          this.success = true
          setTimeout(() => {
            this.$router.push('/default')
          }, 1500)
        }
      } catch (err) {
        console.log(err)
        this.failed = true
        setTimeout(() => {
          this.failed = false
        }, 3000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.alertspec {
  margin: 1rem;
  height: 3rem;
  display: flex;
  justify-content: center;
}
.alertspec2 {
  margin: 1rem;
  height: 5rem;
  display: flex;
  justify-content: center;
}
</style>
