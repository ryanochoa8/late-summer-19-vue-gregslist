<template>
  <div class="job">
    <h3>{{job.company}}</h3>
    <h4>{{job.jobTitle}}</h4>
    <p>Hours: {{job.hours}}</p>
    <p>${{job.rate}}/hr</p>
    <p><b>Job Description:</b> {{job.description}}</p>
    <button class="btn btn-danger" @click="deleteJob()">Delete</button>
  </div>
</template>


<script>
  export default {
    name: 'job',
    data() {
      return {}
    },
    mounted() {
      let dataToSend = {
        jobId: this.$route.params.jobId
      }
      this.$store.dispatch('getJobById', dataToSend)
    },
    computed: {
      job() {
        return this.$store.state.activeJob
      }
    },
    methods: {
      deleteJob() {
        this.$store.dispatch('deleteJob', this.job._id)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>