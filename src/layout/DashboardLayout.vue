<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/transactions">
        <i class="nc-icon nc-paper-2"></i>
        <p>Transactions</p>
      </sidebar-link>
        <sidebar-link to="/admin/months">
        <i class="nc-icon nc-paper-2"></i>
        <p>Billing Months</p>
      </sidebar-link>
      <sidebar-link to="/admin/suppliers">
        <i class="nc-icon nc-notes"></i>
        <p>Suppliers</p>
      </sidebar-link>
      <sidebar-link to="/admin/products">
        <i class="nc-icon nc-paper-2"></i>
        <p>Products</p>
      </sidebar-link>
       <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link> 
    
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar"> </dashboard-content>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
