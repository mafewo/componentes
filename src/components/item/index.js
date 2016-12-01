
import ItemComponent from './item.component'
/*
export default angular.module("itemApp", [])
  .component('itemApp', ItemComponent)
  .name*/

export default angular.module('itemApp', [])
  .component('itemApp', ItemComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('item', {
        url: '/item',
        component: 'itemApp',
        resolve: {
        }
      })
  })
  .name
