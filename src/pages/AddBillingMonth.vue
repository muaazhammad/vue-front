<template>
  <card>
    <h4 slot="header" class="card-title">Start New Billing Month</h4>
    <form>
      <div class="row">
        <div class="col-md-8">
          <base-input type="text" label=" Name" placeholder=" Name" v-model="Month.name"></base-input>
        </div>

         <div class="col-md-8">
          <base-input type="date" label=" Start Date" placeholder=" Name" v-model="Month.start_date"></base-input>
        </div>
         <div class="col-md-8">
          <base-input type="date" label=" End Date" placeholder=" Name" v-model="Month.end_date"></base-input>
        </div>




        <!-- <div class="col-md-8"> -->
       <!-- <label for="start_date">Start Date</label> -->
         <!-- <Datepicker   v-model="Month.start_dat" type="date" format="YYYY-MM-DD"></Datepicker> -->
          <!-- <base-input type="text" label="kj" placeholder="price" v-model="Product.price"></base-input> -->
        <!-- </div> -->

          <!-- <div class="col-md-8"> -->
       <!-- <label for="start_date">End Date</label> -->
         <!-- <Datepicker  v-model="Month.end_dat"></Datepicker> -->
          <!-- <base-input type="text" label="kj" placeholder="price" v-model="Product.price"></base-input> -->
        <!-- </div> -->
      </div>
     

      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="addMonth"
        >Add Month</button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>


<script>

// import Datepicker from 'vuejs-datepicker';
  import Datepicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

 import axios from 'axios';
export default {
  components: {
    Datepicker
  },
  data() {
    return {
    
      Month: {
        name: "",
        start_date: "",
        end_date: "",
        user_id: "",
      },
    };
  },
  methods: {
     customFormatter(date) {
      return moment(date).format('YYYY MM DD');
    },
    addMonth() {
      //  alert('Your data: ' + JSON.stringify(this.Month));
      const baseURI = "api/months";
      axios.post(baseURI, this.Month)
      .then((response) => {
      console.log(response);
      this.$router.push("/admin/months");
      });
     
    },
  },
  created() {
    // this.getSuppliers();
     this.Month.user_id=localStorage.id;
  },
};
</script>
<style>
</style>
