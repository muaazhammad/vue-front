<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">All Billing Months</h4>
              <p class="card-category">you can add more Billing Months</p>

              <router-link
                to="months/create"
                tag="button"
                class="btn btn-primary btn-fill"
              >Add Month</router-link>
            </template>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <Month
                  v-for="month in tableData"
                  :key="month"
                  :data="month"
                  @idToDelete="onDelete"
                  @productToEdit="onEdit"
                ></Month>
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
import Month from "./Month.vue";
import axios from "axios";

export default {
  components: {
    LTable,
    Card,
    Month,
  },
  data() {
    return {
      tableData:[],
    };
  },
  methods:{
    getmonths() {
      //implement axios to get customers
      const baseURI = "http://127.0.0.1:8000/api/months";
        axios.get(baseURI).then((response) => {
        console.log(response.data);
        this.tableData = response.data;
      });
    },

      onDelete(e) {
      //implement axios to delete product
      const baseURI = "http://127.0.0.1:8000/api/months/"+e;
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
