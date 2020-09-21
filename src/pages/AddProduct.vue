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
      <div class="row"></div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Select Supplier</label>
        <select
          class="form-control col-md-8"
          id="exampleFormControlSelect1"
          v-model="Product.supplier_id"
        >
          <option
            v-for="supplier in suppliers"
            v-bind:key="supplier.id"
            :selected="supplier.id=='1'"
            v-bind:value="supplier.id"
          >{{supplier.name}}</option>
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
      userid:'',
      suppliers: [],
      Product: {
        name: "",
        price: "",
        supplier_id: "",
        user_id: '',
      },
    };
  },
  methods: {
    addProduct() {
      //  alert('Your data: ' + JSON.stringify(this.supplier));
      const baseURI = "http://127.0.0.1:8000/api/products";
      this.$http.post(baseURI, this.Product).then((response) => {
        console.log(response);

        this.$router.push("/admin/products");
      });
    },
    getSuppliers() {
      const baseURI = "http://127.0.0.1:8000/api/suppliers";
      this.$http.get(baseURI).then((response) => {
        console.log(response);
        this.suppliers = response.data;
      });
    },
  },
  created() {
    this.getSuppliers();
    this.Product.user_id=localStorage.id;
  },
};
</script>
<style>
</style>
