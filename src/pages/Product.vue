<template>
  <tr>
    <td scope="row">{{data.id}}</td>
    <td>{{data.name}}</td>
    <td>{{data.price}}</td>
    <td>{{data.supplier_id}}</td>
    <td>
        <button @click="onDelete">delete</button> &nbsp;
       
         <button @click="onEdit">Edit</button>
     
    </td>
  </tr>
</template>

<script>
 import axios from 'axios';
export default {
  
  name: "Product",

  props: ["data"],

  methods:{
   
   onDelete(){
      //  alert('delete the product with id '+ this.data.id );
       this.$emit('idToDelete', this.data.id);
     
       

   }

  },

  data()
   {

   },
};
</script>

<style>
</style>
