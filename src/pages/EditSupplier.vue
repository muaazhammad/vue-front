<template>
  <card>
    <h4 slot="header" class="card-title">Edit Supplier details</h4>
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
                    v-model="supplier.phone_number">
          </base-input>
        </div>
      </div>
      

      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateSupplier">
          Update Supplier
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>


<script>
  
     import axios from 'axios';
  export default {
    components: {

    },
    data () {
      return {
        currentSupplierId:this.$route.params.id,
        supplier: {
          name: '',
          phone_number: '',
          user_id: '',
      
        }
      }
    },
    methods: {
        getSupplier() {
      //implement axios to get customers
      const baseURI = "api/suppliers/"+this.currentSupplierId;
        axios.get(baseURI).then((response) => {
       this.tableData = response.data;
       this.supplier.name = response.data.name;
       this.supplier.phone_number = response.data.phone_number;
      });
    },

      updateSupplier () {
      
        let datainJSON = JSON.stringify(this.supplier);
      const baseURI = 'api/suppliers/'+this.currentSupplierId;
      this.$http.put(baseURI,datainJSON ,{
        headers: {
            'Content-Type': 'application/json',
        }
    })
      .then((response) => {
        console.log(response);

        this.$router.push('/admin/suppliers');

      });
    },
  },
  created(){
       this.supplier.user_id=localStorage.id;
       this.getSupplier();
  }
  }

</script>
<style>

</style>
