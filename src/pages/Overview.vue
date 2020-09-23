<template>
  <div class="content">
      <div class="container-fluid">
        <div class="row">
        <div class="col-md-10">
          
        <h2>Welcome to <span style="color:red"> Monthly Ledger </span> app</h2>
        <p>You can use this app  to maintain record of daily deals with different suppliears(like milk man etc).</p>
    
        </div>
        </div>
        <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="fa fa-user text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Suppliers</p>
              <h4 class="card-title">{{totalSuppliers}}</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-user"></i>see all Suppliers
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="fa fa-shopping-basket text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Products</p>
              <h4 class="card-title">{{totalProducts}}</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>view all
            </div>
          </stats-card>
        </div>



         <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="fa fa-dollar text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Total payable </p>
              <h4 class="card-title">{{TotalBill}}</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Pay now
            </div>
          </stats-card>
        </div> 

        </div>


       <div class="row">
        <div class="col-md-9 col-sm-12">
          <chart-card
            :chartData="barChart.data"
            :chartOptions="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions"
            chartType="Bar">
            <template slot="header">
              <h4 class="card-title">10 recent transactions </h4>
              <p class="card-category">with different suppliers</p>
            </template>
            <template slot="footer">
            
              <hr>
            </template>
          </chart-card>
        </div>

       
      </div> 

 <div>

  </div>

     </div>
  </div>
</template>


<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import LTable from 'src/components/Table.vue'
    // import Navbar from './components/Navbar.vue';  
  import axios from "axios";

  export default {
    components: {
      LTable,
      ChartCard,
      StatsCard
    },
    data () {

      return {

        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        // pieChart: {
        //   data: {
        //     labels: ['40%', '20%', '40%'],
        //     series: [40, 20, 40]
        //   }
        // },
        // lineChart: {
        //   data: {
        //     labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        //     series: [
        //       [287, 385, 490, 492, 554, 586, 698, 695],
        //       [67, 152, 143, 240, 287, 335, 435, 437],
        //       [23, 113, 67, 108, 190, 239, 307, 308]
        //     ]
        //   },
        //   options: {
        //     low: 0,
        //     high: 800,
        //     showArea: false,
        //     height: '245px',
        //     axisX: {
        //       showGrid: false
        //     },
        //     lineSmooth: true,
        //     showLine: true,
        //     showPoint: true,
        //     fullWidth: true,
        //     chartPadding: {
        //       right: 50
        //     }
        //   },
        //   responsiveOptions: [
        //     ['screen and (max-width: 640px)', {
        //       axisX: {
        //         labelInterpolationFnc (value) {
        //           return value[0]
        //         }
        //       }
        //     }]
        //   ]
        // },
        barChart: {
          data: {
            labels: [],
            series: [],
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
 
        totalProducts:'',
        totalSuppliers:'',
        TotalBill:'',
       
        
      
      }
    },
    methods:{
         
      getTotalProducts() {
      const baseURI = "api/totalProducts";
        axios.get(baseURI).then((response) => {
        this.totalProducts = response.data;
      });
    },

       getTotalSuppliers() {
      const baseURI = "api/totalSuppliers";
        axios.get(baseURI).then((response) => {
        console.log(response.data);
        this.totalSuppliers = response.data;
      });
    },

       getTotalPayable() {
      const baseURI = "api/totalPayable";
        axios.get(baseURI).then((response) => {
        console.log(response.data);
        this.TotalBill = response.data.sum;
        this.barChart.data.labels=response.data.dates;
         this.barChart.data.series[0]=response.data.prices;
      });
    },
           

    },

    created(){
      this.getTotalProducts();
      this.getTotalSuppliers();
      this.getTotalPayable();
          
    }
    


  }


</script>
<style>

</style>
