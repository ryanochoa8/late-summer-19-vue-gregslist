<template>
  <div class="cars container">
    <h1>Where the Cars Live</h1>
    <div class="row justify-content-center">
      <form class="row pb-5" @submit.prevent="addCar">
        <div class="form-group col-4 offset-4">
          <label for="make">Make</label>
          <input type="text" name="make" class="form-control" id="make" placeholder="Enter make" v-model="newCar.make">
        </div>
        <div class="form-group col-6">
          <label for="model">Model</label>
          <input type="text" class="form-control" id="model" placeholder="Enter Model" v-model="newCar.model">
        </div>
        <div class="form-group col-6">
          <label for="img">Image</label>
          <input type="text" class="form-control" id="img" placeholder="Enter image url" v-model="newCar.imgUrl">
        </div>
        <div class="form-group col-6">
          <label for="price">Price</label>
          <input type="number" class="form-control" id="price" placeholder="Enter the Price" v-model="newCar.price">
        </div>
        <div class="form-group col-6">
          <label for="year">Year</label>
          <input type="number" class="form-control" min="1950" id="year" placeholder="Enter the Year"
            v-model="newCar.year">
        </div>
        <button type="submit" class="btn btn-primary col-4 offset-4">Submit</button>
      </form>
    </div>
    <div class="row justify-content-center">
      <!-- cars in the v-for references the method name of the computed called "cars" -->
      <div class="car col-4 border rounded border-secondary" v-for="car in cars" @click="viewCar(car)">
        <h5>{{car.make}}</h5>
        <img :src="car.imgUrl" alt="">
        <p>{{car.model}}</p>
        <p>{{car.year}}</p>
        <p>{{car.price}}</p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'cars',
    data() {
      return {
        newCar: {}
      }
    },
    mounted() {
      this.$store.dispatch('getCars')
    },
    computed: {
      // this references the collection on our store's state
      cars() {
        return this.$store.state.cars
      }
    },
    methods: {
      viewCar(car) {
        // we could pass the car to the state to set as active, but if we refresh we would lose the data in our state and our car view will break, we will trust the view itself to load the correct car from the server
        this.$router.push({ name: 'car', params: { carId: car._id } })

      },
      addCar() {
        this.$store.dispatch('addCar', this.newCar)
      }
    },
    components: {}
  }
</script>


<style scoped>
  img {
    height: 100px;
  }
</style>