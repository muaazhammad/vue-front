<template>
  <card>
    <h4 slot="header" class="card-title">Add new Product</h4>
    <form>
      <div class="row">
        <div class="col-md-8">
          <base-input type="text" label=" Name" placeholder=" Name" v-model="Product.name"></base-input>
        </div>
        <div class="col-md-8">
          <base-input type="text" label="Price" placeholder="price" v-model="Product.price"></base-input>
        </div>
      </div>
      <div class="row">
       
      </div>
       <div class="form-group">
    <label for="exampleFormControlSelect1">Select Supplier</label>
    <select class="form-control col-md-8" id="exampleFormControlSelect1" v-model="Product.selectedSupplier">
       
      <option  v-for ="supplier in suppliers"  v-bind:key="supplier" :selected="supplier=='Muaz'"> {{supplier}}</option>
      
    
    </select>
  </div>

      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="addProduct"
        >Add Product</button>
      </div>
      <div class="clearfix"></div>
      


    </form>
  </card>
</template>


<script>
export default {
  components: {},
  data() {
    return {
         suppliers: ['Muaz','Ali','Hamaza'],
      Product: {
        name: "",
        price: "",
        selectedSupplier:"Muaz"
      },
    };
  },
  methods: {
    addProduct() {
      alert("Your data: " + JSON.stringify(this.Product));
      //  const baseURI = 'https://jsonplaceholder.typicode.com/users';
      //   this.$http.get(baseURI)
      //   .then((result) => {
      //     console.log(result);
      //   });

      //   axios.post("https://ledgerapp-73bf7.firebaseio.com/suppliers", name=this.supplier.name)
      //     .then(response => console.log(response))
      //     .catch(error => {
      //       this.errorMessage = error.message;
      //       console.error("There was an error!", error);
      //     });
    },
  },
};
</script>
<style>
</style>
