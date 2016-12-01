window.jQuery = $
window.$ = $
jQuery = $

import angular from 'angular'
import uirouter from 'angular-ui-router'
import components from './components'
import config from './app.config'

import AppComponent from './app.main-component'


angular.module("drive", [components,uirouter])
  .component('driveApp', AppComponent)
  .config(config)