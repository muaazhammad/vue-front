<template>
  <card>
    <h4 slot="header" class="card-title">Add new Supplierr</h4>
    <form>
      <div class="row">
        <div class="col-md-8">
          <base-input type="text" label=" Name" placeholder=" Name" v-model="supplier.name" required></base-input>
        </div>
        <div class="col-md-8">
          <base-input type="text" label="Phone" placeholder="phone" v-model="supplier.phone_number" required></base-input>
        </div>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="addSupplier"
        >Add Supplier</button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      supplier: {
        name: "hghg",
        phone_number: "765765",
        user_id: "",
      },
    };
  },
  methods: {
    addSupplier() {
      const baseURI = "api/suppliers";
      this.$http.post(baseURI, this.supplier).then((response) => {
        console.log(response);
        this.$router.push("/admin/suppliers");
      });
    },
  },
  created() {
    this.supplier.user_id = localStorage.id;
  },
};
</script>
<style>
</style>
