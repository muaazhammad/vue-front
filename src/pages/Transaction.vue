<template>
  <tr>
    <td scope="row">{{data.id}}</td>
    <td>{{data.product}}</td>
    <td>{{data.supplier}}</td>
    <td>{{data.month}}</td>
    <td>{{data.date}}</td>
    <td>{{data.quantity}}</td>
    <td>{{data.price}}</td>
    <td>
      <router-link :to="{path:'/admin/transactions/edit/'+data.id}" tag="button" class="btn btn-primary">Edit</router-link>&nbsp;
      <button class="btn btn-danger" @click="onDelete">delete</button> &nbsp;

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
