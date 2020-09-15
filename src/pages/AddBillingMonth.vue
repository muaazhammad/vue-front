<template>
  <card>
    <h4 slot="header" class="card-title">Add new Month</h4>
    <form>

      <div class="row">
        <div class="col-md-8">
          <base-input type="text"
                    label=" Name"
                    placeholder=" Name"
                    v-model="supplier.name">
          </base-input>
        </div>
        <div class="col-md-8">
          <base-input type="text"
                    label="Phone"
                    placeholder="phone"
                    v-model="supplier.phone">
          </base-input>
        </div>
      </div>
        <div class="row">
        <div class="col-md-8">
          <base-input type="text"
                    label=" Products"
                    placeholder=" milk,eggs,bread etc"
                    v-model="supplier.products">
          </base-input>
        </div>
     
      </div>






      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="addMonth">
          Add Month
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>


<script>
  
  export default {
    components: {

    },
    data () {
      return {
        supplier: {
          name: '',
          phone: '',
          products: '',
      
        }
      }
    },
    methods: {
      addMonth () {
    alert('Your data: ' + JSON.stringify(this.supplier));
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
  }
  }

</script>
<style>

</style>
