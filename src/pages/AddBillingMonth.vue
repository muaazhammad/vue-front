<template>
  <card>
    <h4 slot="header" class="card-title">Start New Billing Month</h4>
    <form>
      <div class="row">
        <div class="col-md-8">
          <base-input
            type="text"
            label=" Name"
            placeholder=" Name"
            v-model="Month.name"
          ></base-input>
        </div>

        <div class="col-md-8">
          <label for="exampleFormControlSelect1">Start Date</label>
          <b-form-datepicker
            v-model="start_date"
            :min="min"
            locale="en"
          ></b-form-datepicker>
        </div>

        <div class="col-md-8">
          <label for="exampleFormControlSelect1">End Date</label>
          <b-form-datepicker
            v-model="Month.end_date"
            :min="min"
            :max="max"
            locale="en"
          ></b-form-datepicker>
        </div>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="addMonth"
        >
          Add Month
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>


<script>
// import Datepicker from 'vuejs-datepicker';
import Datepicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import axios from "axios";
export default {
  components: {
    Datepicker,
  },
  data() {
    const now = new Date(); //date object
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //get current date
    const minDate = new Date(today); //dateobject of current date

    return {
      min: minDate,
      max: "", //comming from watcher
      start_date: "", //outside because have to watch it
      Month: {
        name: "",
        start_date: "",
        end_date: "",
        user_id: "",
      },
    };
  },
  methods: {
    addMonth() {
      const baseURI = "api/months";
      axios.post(baseURI, this.Month).then((response) => {
        console.log(response);
        this.$router.push("/admin/months");
      })
      .catch((error) => {
          alert("Please fill the form properly");
        });
    },
  },
  created() {
    this.Month.user_id = localStorage.id;
  },
  watch: {
    start_date: function (val) {
      this.Month.start_date = val;
      const maxDate = new Date(val);
      maxDate.setMonth(maxDate.getMonth() + 1);
      this.max = maxDate;
    },
  },
};
</script>
<style>
</style>
