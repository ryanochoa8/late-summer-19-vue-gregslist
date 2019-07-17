<template>
  <div class="house m-3">
    <h5><b>Price:</b> ${{house.price}}</h5>
    <img :src="house.imgUrl" alt=''>
    <div class="row p-3">
      <h5 class="col-3"><b>Bedrooms:</b> {{house.bedrooms}}</h5>
      <h5 class="col-3"><b>Levels:</b> {{house.levels}}</h5>
      <h5 class="col-3"><b>Bathrooms:</b> {{house.bathrooms}}</h5>
      <h5 class="col-3"><b>Year:</b> {{house.year}}</h5>
      <p class="col-12 justify-content-center"><b>Description:</b> {{house.description}}</p>
    </div>
    <button class="btn btn-danger" @click="deleteHouse()">Delete</button>
  </div>
  </div>
</template>


<script>
  export default {
    name: 'house',
    data() {
      return {}
    },
    mounted() {
      let dataToSend = {
        houseId: this.$route.params.houseId
      }
      this.$store.dispatch('getHouseById', dataToSend)
    },
    computed: {
      house() {
        return this.$store.state.activeHouse
      }
    },
    methods: {
      deleteHouse() {
        this.$store.dispatch('deleteHouse', this.house._id)
      }
    },
    components: {}
  }
</script>


<style scoped>
  img {
    height: 500px;
  }
</style>