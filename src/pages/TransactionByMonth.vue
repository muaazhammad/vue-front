<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Transactions by Month</h4>
            
              <!-- <router-link
                to="transactions/create"
                tag="button"
                class="btn btn-primary btn-fill"
              >Add Transaction</router-link> -->
            </template>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Supplier</th>
                  <th scope="col">Billing Month</th>
                  <th scope="col">Date</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Actions</th>

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
          <h3>Total of the Month : <span style="color:red">{{total}}</span>  PKR</h3>
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
      currentMonth:this.$route.params.id,
      total:'',
    };
  },
  methods:{
    getTransactionsByMonth() {
      //implement axios to get customers
      const baseURI = "api/transactionsbymonth/"+this.currentMonth;
        axios.get(baseURI).then((response) => {
        console.log(response.data);
        this.tableData = response.data;
      });
    },
     getMonthTotal() {
      //implement axios to get customers
      const baseURI = "api/totalbymonth/"+this.currentMonth;
        axios.get(baseURI).then((response) => {
        
        this.total = response.data;
        
      });
    },

      onDelete(e) {
      //implement axios to delete product
      const baseURI = "api/transactions/"+e;
      axios.delete(baseURI)
      .then((response) => {
       
      this.getTransactionsByMonth();
       this.getMonthTotal();
       
      console.log(response);
      // this.$router.push('/admin/products');

      });
  }
  },
   watch: {
    total:function() {
      console.log(this.total)
    },
    
  },
  created() {
    //call getproducts here
    this.getTransactionsByMonth();
    this.getMonthTotal();
  },
};
</script>
<style>
</style>
