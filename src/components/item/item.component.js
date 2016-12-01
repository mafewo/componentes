import controller from './item.controller'
import template from './item.html'

const ItemComponent = {
  bindings: {
  },
  require: {
    parent: '^^driveApp'
  },
  controller,
  template
}

export default ItemComponent
