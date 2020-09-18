<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">All Products</h4>
              <p class="card-category">you can add more products</p>

              <router-link
                to="products/create"
                tag="button"
                class="btn btn-primary btn-fill"
              >Add Product</router-link>
            </template>

            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Supplier name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <Product 
                v-for="product in tableData" 
                :key="product" 
                :data="product"   
                @idToDelete="onDelete" 
                @productToEdit="onEdit"
                ></Product>
              </tbody>
            </table>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";
import Product from "./Product.vue";
 import axios from 'axios';

export default {

  components: {
    LTable,
    Card,
    Product,
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    getProducts() {
      //implement axios to get customers
      const baseURI = "http://127.0.0.1:8000/api/products";
        axios.get(baseURI).then((response) => {
        console.log(response.data);
        this.tableData = response.data;
      }); 
    },
      onDelete(e) {
      //implement axios to delete product
      const baseURI = "http://127.0.0.1:8000/api/products/"+e;
      axios.delete(baseURI)
      .then((response) => {
      this.getProducts();
      console.log(response);
      // this.$router.push('/admin/products');

      });
    },

    // onEdit(e){
    //   alert(e);
    // }
  },
  created() {
    //call getproducts here
    this.getProducts();
   
  },

};
</script>
<style>
</style>
