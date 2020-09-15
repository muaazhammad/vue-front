<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
            
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">All Billing Months</h4>
              <p class="card-category">you can add more Billing Months </p>
          
              <router-link to="months/create" tag="button" class="btn btn-primary btn-fill">Add Month</router-link>

            </template>
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>

        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  const tableColumns = ['Id', 'Name', 'phone', 'add_by', 'products']
  const tableData = [{
    id: 1,
    name: 'Dakota Rice',
    phone: '123456789',
    add_by: 'Niger',
    products: 'Oud Turnhout'
  },
  {
    id: 2,
    name: 'Minerva Hooper',
    phone: '123456789',
    add_by: 'Curaçao',
    products: 'Sinaai Waas'
  },
  {
    id: 3,
    name: 'Sage Rodriguez',
    phone: '123456789',
    add_by: 'Netherlands',
    products: 'Baileux'
  },
  {
    id: 4,
    name: 'Philip Chaney',
    phone: '123456789',
    add_by: 'Korea',
    products: 'Overland Park'
  },
  ]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>
</style>
