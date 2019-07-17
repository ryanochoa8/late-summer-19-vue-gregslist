<template>
  <div class="houses container-fluid">
    <h1>Houses</h1>
    <div class="row justify-content-center">
      <form class="row pb-5 px-2" @submit.prevent="addHouse">
        <div class="form-group col-6 offset-3">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description" placeholder="Enter Description"
            v-model="newHouse.description">
        </div>
        <div class="form-group col-6">
          <label for="price">Price</label>
          <input type="number" name="price" class="form-control" id="price" placeholder="Enter price"
            v-model="newHouse.price">
        </div>
        <div class="form-group col-6">
          <label for="img">Image</label>
          <input type="text" class="form-control" id="img" placeholder="Enter image url" v-model="newHouse.imgUrl">
        </div>
        <div class="form-group col-6">
          <label for="bedrooms">Bedrooms</label>
          <input type="number" class="form-control" id="bedrooms" placeholder="Number of Bedrooms"
            v-model="newHouse.bedrooms">
        </div>
        <div class="form-group col-6">
          <label for="bathrooms">Bathrooms</label>
          <input type="number" class="form-control" id="bathrooms" placeholder="Number of Bathrooms"
            v-model="newHouse.bathrooms">
        </div>
        <div class="form-group col-6">
          <label for="levels">Levels</label>
          <input type="number" class="form-control" id="levels" placeholder="Number of Levels"
            v-model="newHouse.levels">
        </div>
        <div class="form-group col-6">
          <label for="year">Year</label>
          <input type="number" class="form-control" id="year" placeholder="Enter the Year" v-model="newHouse.year">
        </div>
        <button type="submit" class="btn btn-primary offset-4 col-4">Submit</button>
      </form>
    </div>
    <div class="row m-2">
      <div class="car col-6 border rounded border-secondary" v-for="house in houses" @click="viewHouse(house)">
        <h5>${{house.price}}</h5>
        <img :src="house.imgUrl" alt="" class="p-3 border border-dark rounded bg-light">
        <ul class="row list-inline">
          <li class="col-6"><b>Bedrooms:</b> {{house.bedrooms}}</li>
          <li class="col-6"><b>Bathrooms:</b> {{house.bathrooms}}</li>
        </ul>
        <!-- <p><b>Description</b>: {{house.description}}</p> NOTE put this on the house.vue instead of the houses.vue -->
      </div>
    </div>
  </div>
  </div>
</template>


<script>
  export default {
    name: 'houses',
    data() {
      return {
        newHouse: {}
      }
    },
    mounted() {
      this.$store.dispatch('getHouses')
    },
    computed: {
      houses() {
        return this.$store.state.houses
      }
    },
    methods: {
      viewHouse(house) {
        this.$router.push({ name: 'house', params: { houseId: house._id } })
      },
      addHouse() {
        this.$store.dispatch('addHouse', this.newHouse)
      }
    },
    components: {}
  }
</script>


<style scoped>
  img {
    height: 150px;
  }
</style>