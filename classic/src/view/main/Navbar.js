


Ext.define('myapp.view.main.Navbar',{
 extend: 'Ext.container.Container',
 xtype:'navbar',

 requires:[
  'myapp.view.main.FirstNav',
  'myapp.view.main.SecondNav'
 ],

 layout:'vbox',

 items:[{
  // html: 'navbar first',
  xtype:'firstNav',
  flex:3,

 },{
  // html: 'second navbar',
  xtype:'secondNav',
  flex:2
 }]
})
