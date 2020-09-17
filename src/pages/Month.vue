<template>
  <tr>
    <td scope="row">{{data.id}}</td>
    <td>{{data.name}}</td>
    <td>{{data.start_date}}</td>
    <td>{{data.end_date}}</td>
    <td>
            <button @click="onEdit">Details</button>
        <button @click="onDelete">delete</button> &nbsp;
        <button @click="onEdit">Edit</button>
     
    </td>
  </tr>
</template>

<script>
 import axios from 'axios';
export default {
  
  name: "Month",

  props: ["data"],

  methods:{
   
   onDelete(){
      //  alert('delete the product with id '+ this.data.id );
       this.$emit('idToDelete', this.data.id);
   },
      onEdit(){
       alert('edit the month with id '+ this.data.id);
      //  this.$emit('productToEdit', {id:this.data.id, name:this.data.name , price:this.data.price ,supplier_id:this.data.supplier_id});


   }

  },

  data()
   {

   },
};
</script>

<style>
</style>
