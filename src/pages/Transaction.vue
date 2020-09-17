<template>
  <tr>
    <td scope="row">{{data.id}}</td>
    <td>{{data.user_id}}</td>
    <td>{{data.product_id}}</td>
    <td>{{data.supplier_id}}</td>
    <td>{{data.month_id}}</td>
    <td>{{data.date}}</td>
    <td>{{data.quantity}}</td>
     <td>{{data.price}}</td>
    <td>
      <button @click="onDelete">delete</button> &nbsp;
      <button @click="onEdit">Edit</button>
    </td>
  </tr>
</template>

<script>
import axios from "axios";
export default {
  name: "Transaction",

  props: ["data"],

  methods: {
    onDelete() {
      //  alert('delete the product with id '+ this.data.id );
      this.$emit("idToDelete", this.data.id);
    },
    onEdit() {
      alert("edit the product with id " + this.data.id);
      //  this.$emit('productToEdit', {id:this.data.id, name:this.data.name , price:this.data.price ,supplier_id:this.data.supplier_id});
    },
  },

  data() {},
};
</script>

<style>
</style>
