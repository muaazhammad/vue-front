<template>
  <card>
    <h4 slot="header" class="card-title">Add new Transaction</h4>
    <form>
      <div class="row">
        <div class="form-group col-md-8">
          <label for="exampleFormControlSelect1">Select Supplier</label>
          <select
            class="form-control col-md-8"
            id="exampleFormControlSelect1"
            v-model="transaction.supplier_id"
          >
            <option
              v-for="supplier in suppliers"
              v-bind:key="supplier.id"
              :selected="supplier.id=='1'"
              v-bind:value="supplier.id"
            >{{supplier.name}}</option>
          </select>
        </div>

        <div class="form-group col-md-8">
          <label for="exampleFormControlSelect1">Select Product</label>
          <select
            class="form-control col-md-8"
            id="exampleFormControlSelect1"
            v-model="transaction.product_id"
          >
            <option
              v-for="product in products"
              v-bind:key="product.id"
              :selected="product.id=='1'"
              v-bind:value="product.id"
            >{{product.name}}</option>
          </select>
        </div>

        <div class="form-group col-md-8">
          <label for="exampleFormControlSelect1">Select Month</label>
          <select class="form-control col-md-8" id="exampleFormControlSelect1" v-model="month_id">
            <option
              v-for="month in billingMonths"
              v-bind:key="month.id"
              :selected="month.id=='1'"
              v-bind:value="month.id"
            >{{month.name}}</option>
          </select>
        </div>

        <div class="col-md-8">
          <label for="exampleFormControlSelect1">Select Date</label>
          <b-form-datepicker v-model="transaction.date" :min="min" :max="max" locale="en"></b-form-datepicker>
        </div>

        <div class="row col-md-8">
          <div class="col-md-8">
            <base-input
              type="text"
              label=" Quantity"
              placeholder=" Quantity"
              v-model="quantity"
            ></base-input>
          </div>
        </div>

        <div class="row col-md-8">
          <div class="col-md-8">
            <base-input type="text" label=" Price" placeholder=" Price" v-model="transaction.price"></base-input>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="addMonth"
        >Add Transaction</button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>


<script>
import Datepicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "axios";
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      suppliers: [],
      products: [],
      billingMonths: [],
      min: "",
      max: "",
      month_id: "",      //it is outside 
      quantity: "",
      transaction: {
        user_id: "",
        product_id: "",
        supplier_id: "",
        month_id: "",
        date: "",
        quantity: "",
        price: "",
      },
    };
  },
  methods: {
  
    addMonth() {
      const baseURI = "api/transactions";
      axios
        .post(baseURI, this.transaction)
        .then((response) => {
          console.log(response);
          this.$router.push("/admin/transactions");
        })
        .catch((error) => {
          alert("Please fill the form properly");
        });
    },
    getSuppliers() {
      const baseURI = "api/suppliers";
      this.$http.get(baseURI).then((response) => {
        console.log(response);
        this.suppliers = response.data;
      });
    },
    getProducts() {
      const baseURI = "api/products";
      this.$http.get(baseURI).then((response) => {
        console.log(response);
        this.products = response.data;
      });
    },
    getMonths() {
      const baseURI = "api/months";
      this.$http.get(baseURI).then((response) => {
        console.log(response);
        this.billingMonths = response.data;
      });
    },
  },
  watch: {                              // a watcher on month selection to selcete date accordingly
    month_id: function (val) {
      this.transaction.month_id = val;
      this.$http.get("api/months/" + val).then((response) => {
        this.min = response.data.start_date;
        this.max = response.data.end_date;
      });
    },
      quantity: function (val) {       // a watcher to calculate price automatically
      this.transaction.quantity = val;
      this.$http.get("api/products/" +this.transaction.product_id).then((response) => {
        this.transaction.price = response.data.price * val;
     
      });
    },
  },
  created() {
    this.getSuppliers();
    this.getProducts();
    this.getMonths();
  },
};
</script>
<style>
</style>
