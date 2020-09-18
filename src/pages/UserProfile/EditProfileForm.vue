<template>
  <card>
    
    <h3 slot="header" class="card-title">User Details</h3>
    <!-- <form>
      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="First Name"
                    placeholder="First Name"
                    v-model="user.name">
          </base-input>
        </div>
      
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="Email"
                    placeholder="Hemail"
                    v-model="user.email">
          </base-input>
        </div>
      </div>


      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Update Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form> -->
     
     <h4>Name : {{user.name}}</h4>
     <h4>Email : {{user.email}}</h4>
     
     </card>
 
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'
   import axios from 'axios';

  export default {
    components: {
      Card
    },
    data () {
      return {
        user: {
          name: '',
          email: '',
        }
      }
    },
    methods: {
      getuser() {
      //implement axios to get customers
      const baseURI = "http://127.0.0.1:8000/api/user";
        axios.get(baseURI).then((response) => {
        console.log(response.data.user.name);
        this.user.name = response.data.user.name;
         this.user.email = response.data.user.email;
      });
    },

      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    },
     created() {
    this.getuser();
   
  },
  }

</script>
<style>

</style>
