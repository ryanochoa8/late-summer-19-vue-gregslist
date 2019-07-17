<template>
  <div class="jobs container-fluid">
    <h1>Jobs</h1>
    <div class="row justify-content-center">
      <form class="row pb-5 px-2" @submit.prevent="addJob">
        <div class="form-group col-4 offset-4">
          <label for="company">Company</label>
          <input type="text" name="company" class="form-control" id="company" placeholder="Enter a company"
            v-model="newJob.company">
        </div>
        <div class="form-group col-6">
          <label for="jobTitle">Job Title</label>
          <input type="text" class="form-control" id="jobTitle" placeholder="Enter Job Title" v-model="newJob.jobTitle">
        </div>
        <div class="form-group col-6">
          <label for="hours">Hours per Week</label>
          <input type="number" class="form-control" id="hours" placeholder="Enter Hours per Week"
            v-model="newJob.hours">
        </div>
        <div class="form-group col-6">
          <label for="rate">Annual Salary or $/hr</label>
          <input type="number" class="form-control" id="rate" placeholder="Enter a Wage" v-model="newJob.rate">
        </div>
        <div class="form-group col-6">
          <label for="description">Job Description</label>
          <input type="text" class="form-control" min="1950" id="description" placeholder="Enter the Description"
            v-model="newJob.description">
        </div>
        <button type="submit" class="btn btn-primary col-4 offset-4">Submit</button>
      </form>
    </div>
    <div class="row justify-content-center">
      <div class="job col-3 m-3 pt-2 border rounded border-secondary bg-light" v-for="job in jobs"
        @click="viewJob(job)">
        <h5><b>{{job.company}}</b></h5>
        <h6>{{job.jobTitle}}</h6>
        <p>${{job.rate}}/Hr</p>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'jobs',
    data() {
      return {
        newJob: {}
      }
    },
    mounted() {
      this.$store.dispatch('getJobs')
    },
    computed: {
      jobs() {
        return this.$store.state.jobs
      }
    },
    methods: {
      viewJob(job) {
        this.$router.push({ name: 'job', params: { jobId: job._id } })
      },
      addJob() {
        this.$store.dispatch('addJob', this.newJob)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>