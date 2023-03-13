<template lang="html">
  <div>
    <iq-card headerClass="flex-wrap" data-aos="fade-up" data-aos-delay="400">
      <template v-slot:headerTitle>
        <h4 class="card-title mb-2">Activity overview</h4>
      </template>
      <template v-slot:body>
        <div v-if="isLoading">
          <spinner className="spinner-border text-primary" role="status">
            <spinnercontent className="visually-hidden">Loading...</spinnercontent>
          </spinner>
        </div>
        <div class=" d-flex profile-media align-items-top mb-2" v-for="activity in activities.slice(0, maxMessageSize)" v-bind:key="activity.id" v-else>
          <div class="profile-dots-pills border-primary mt-1"></div>
          <div class="ms-4">
            <h6 class=" mb-1">{{activity.Title}}</h6>
            <span class="mb-0">{{activity.Date}}</span>
          </div>
        </div>
      </template>
    </iq-card>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  props: {
    maxMessageSize: Number
  },
  data () {
    return {
      activities: [],
      isLoading: true
    }
  },
  async mounted () {
    // query the back-end server for coockie
    const res = await axios.post('https://www.stockit.live/api/auth/login', {
      email: 'vaun890@gmail.com',
      password: 'indigo890'
    })
    console.log(res)
    // query the activity endpoint
    const activities = await axios.get('https://stockit.live/api/activitylogs')
    // assign each activity with unique id for v-for loop
    activities.data.forEach((activity, index) => {
      activity.id = index
    })
    this.activities = activities.data
    this.isLoading = false
  }
}
</script>
<style lang="">

</style>
