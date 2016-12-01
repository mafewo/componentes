class ItemController {
  constructor(){
    'ngInject'
    this.items = [];
  }
  $onInit(){
    this.coco = "asda"
    this.items = this._getItem()
  }
  
  _getItem(){
    return [{
      'id': '01',
      'tipo': 'img',
      'nombre': 'Domingo de Plaza',
      'descripcion': 'Que Berrinchazo te mandaste hijo.',
      'url': 'img/WP_20161127_19_07_36_Pro.JPG',
    },
    {
      'id': '02',
      'tipo': 'img',
      'nombre': 'Sabado de Verdes',
      'descripcion': 'Hermoso día.',
      'url':'img/WP_20161106_17_37_19_Pro.JPG',
    }]
  }
}