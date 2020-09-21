import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import Suppliers from 'src/pages/Suppliers.vue'
import AddSupplier from 'src/pages/AddSupplier.vue'
import EditSupplier from 'src/pages/EditSupplier.vue'
import Products from 'src/pages/Products.vue'
import Login from 'src/pages/Login.vue'
import Signup from 'src/pages/Signup.vue'
import Logout from 'src/pages/Logout.vue'
import Home from 'src/pages/Home.vue'
import AddProduct from 'src/pages/AddProduct.vue'
import BillingMonths from 'src/pages/BillingMonths.vue'
import AddBillingMonth from 'src/pages/AddBillingMonth.vue'
import TransactionByMonth from 'src/pages/TransactionByMonth.vue'
import Transactions from 'src/pages/Transactions.vue'
import Addtransaction from 'src/pages/AddTransaction.vue'
import EditTransaction from 'src/pages/EditTransaction.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'

const routes = [
  {
    path: '/login',
    name:'login',
    component: Login,
    // redirect: '/admin/overview'
  },
  {
    path: '/signup',
    name:'signup',
    component: Signup,
    // redirect: '/admin/overview'
  },
  {
    path: '/',
    name:'home',
    component: Home,
    // redirect: '/admin/overview'
  },
 
  {
    path: '/admin',
    component: DashboardLayout,
    meta:{dashboardRoutes:true},
    redirect: '/admin/overview',
    
    children: [
      // {
        // path: 'logout',
        // name:'logout',
        // component: Logout,
        // redirect: '/admin/overview'
      // },
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'suppliers',
        name: 'Suppliers',
        component: Suppliers,
      },
      {
        path: 'suppliers/create',
        name: 'create',
        component: AddSupplier
      },
      {
        path: 'suppliers/edit/:id',
        name: 'suppliers/edit',
        component: EditSupplier
      },
      {
        path: 'products',
        name: 'products',
        component: Products
      },
      {
        path: 'products/create',
        name: 'product/create',
        component: AddProduct
      },
      {
        path: 'months',
        name: 'months',
        component: BillingMonths,
      },
      {
        path: 'months/create',
        name: 'months/create',
        component: AddBillingMonth
      },
      {
        path: 'months/details/:id',
        name: 'months/details',
        component: TransactionByMonth
      },
      {
        path: 'transactions',
        name: 'transactions',
        component: Transactions,
      },
      {
        path: 'transactions/create',
        name: 'transactions/create',
        component: Addtransaction
      },
      {
        path: 'transactions/edit/:id',
        name: 'transactions/edit',
        component: EditTransaction
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
