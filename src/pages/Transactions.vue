<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">All Transactions</h4>
              <p class="card-category">you can add more Transactions</p>

              <router-link
                to="transactions/create"
                tag="button"
                class="btn btn-primary btn-fill"
              >Add Transaction</router-link>
            </template>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">user-id</th>
                  <th scope="col">product-id</th>
                  <th scope="col">Supplier-id</th>
                  <th scope="col">month-id</th>
                  <th scope="col">date</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">price</th>

                </tr>
              </thead>
              <tbody>
                <Transaction
                  v-for="transaction in tableData"
                  :key="transaction"
                  :data="transaction"
                  @idToDelete="onDelete"
                  @productToEdit="onEdit"
                ></Transaction>
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
import Transaction from "./Transaction.vue";
import axios from "axios";

export default {
  components: {
    LTable,
    Card,
    Transaction,
  },
  data() {
    return {
      tableData:[],
    };
  },
  methods:{
    getmonths() {
      //implement axios to get customers
      const baseURI = "http://127.0.0.1:8000/api/transactions";
        axios.get(baseURI).then((response) => {
        console.log(response.data);
        this.tableData = response.data;
      });
    },

      onDelete(e) {
      //implement axios to delete product
      const baseURI = "http://127.0.0.1:8000/api/transactions/"+e;
      axios.delete(baseURI)
      .then((response) => {
      this.getmonths();
      console.log(response);
      // this.$router.push('/admin/products');

      });
  }
  },
  created() {
    //call getproducts here
    this.getmonths();
  },
};
</script>
<style>
</style>
