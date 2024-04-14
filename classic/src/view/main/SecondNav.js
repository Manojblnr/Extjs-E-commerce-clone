

Ext.define('myapp.view.main.SecondNav', {
 extend: 'Ext.panel.Panel',
 height: 20,
 width: '100%',
 xtype: 'secondNav',
 layout: 'fit',
 // style:{
 //  backgroundColor:'#00425A'
 // },
 items: {
  xtype: 'toolbar',
  style:{
   backgroundColor:'#00425A'
  },
  defaults: {
   margin: '0 5 0 0',
   // flex:1,
   // style:{
   //  backgroundColor:'#144272'
   // },
   style:{
    backgroundColor:'#00425A',
    border:'none',
    color:'white '
   }
  },
  items: [{
   xtype: 'button',
   text: 'All'
  }, {
   xtype: 'button',
   text: 'Amazon miniTV'
  }, {
   xtype: 'button',
   text: 'Sell'
  }, {
   xtype: 'button',
   text: 'Best Sellers'
  }, {
   xtype: 'button',
   text: 'Mobiles'
  }, {
   xtype: 'button',
   text: 'Todays Deals'
  }, {
   xtype: 'button',
   text: 'Customer Service'
  }, {
   xtype: 'button',
   text: 'Electronics'
  }, {
   xtype: 'button',
   text: 'New Releases'
  }, {
   xtype: 'button',
   text: 'Prime'
  }, {
   xtype: 'button',
   text: 'Home & Kitchen'
  }, {
   xtype: 'button',
   text: 'Greate Summer Sale | starts 4th May 12PM',
   flex: 2
  }]
 }
}
)

