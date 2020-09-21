<template>
  <tr>
    <td scope="row">{{data.id}}</td>
    <td>{{data.name}}</td>
    <td>{{data.phone_number}}</td>
    <td>
      <router-link :to="{path:'suppliers/edit/'+data.id}" tag="button" class="btn btn-primary">Edit</router-link>&nbsp;
      <button class="btn btn-danger" @click="onDelete">delete</button>
 &nbsp;
    </td>
  </tr>
</template>

<script>
import axios from "axios";
export default {
  name: "Supplier",

  props: ["data"],

  methods: {
    onDelete() {
      this.$emit("idToDelete", this.data.id);
    },
  },

  data() {},
};
</script>

<style>
</style>
