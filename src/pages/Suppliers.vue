<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
            
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">All Suppliers</h4>
              <p class="card-category">you can add more suppliers </p>
          
              <router-link to="suppliers/create" tag="button" class="btn btn-primary btn-fill">Add Supplier</router-link>

            </template>
            <!-- <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table> -->
<table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                
                <Supplier 
                v-for="supplier in tableData" 
                :key="supplier" 
                :data="supplier"   
               @idToDelete="onDelete" 
                @productToEdit="onEdit"
               
                ></Supplier>
              
              </tbody>
            </table>


          </card>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  import Supplier from "./Supplier.vue";
 import axios from 'axios';
  
  export default {
    components: {
      LTable,
      Card,
      Supplier
    },
    data () {
      return {
        tableData:[],
       
      }
    },
      methods: {
    getSuppliers() {
      //implement axios to get customers
      const baseURI = "api/suppliers";
        axios.get(baseURI).then((response) => {
        console.log(response.data);
        this.tableData = response.data;
        console.log(this.tableData);
      })
      .catch((error)=>{

        if(error.response.status===422){
                  alert('fdfdf')
                }
      });
    },

      onDelete(e) {
        if (confirm("It will also delete the related products and transactions. are you sure?")) 
          {
            const baseURI = "api/suppliers/"+e;
            axios.delete(baseURI)
            .then((response) => {
            this.getSuppliers();
            console.log(response);
            // this.$router.push('/admin/products');

            });
          }
    },

    // onEdit(e){
    //   alert(e);
    // }
  },
  created() {
    //call getproducts here
    this.getSuppliers();
  },


  }
</script>
<style>
</style>
