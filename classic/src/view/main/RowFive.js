

Ext.define('myapp.view.main.RowFive',{
 extend:'Ext.container.Container',
 xtype:'rowFive',

 items:[{
  xtype:'panel',
  title:'No cost EMI',
  layout:{
   type:'fit',

  },
  defaults: {
   xtype: 'image',
   width: '100%',
   height: '100%',
   mode: 'img',
   padding: '5 2 2 2'
},
items: [{
   src: 'images/assets/No cost EMI.PNG'
 }]
}]
})