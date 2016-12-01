
import DashboardComponent from './dashboard.component'
/*
export default angular.module("dashboardApp", [])
  .component('dashboardApp', dashboardComponent)
  .name*/

export default angular.module('dashboardApp', [])
  .component('dashboardApp', DashboardComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        component: 'dashboardApp',
        resolve: {
        }
      })
  })
  .name
