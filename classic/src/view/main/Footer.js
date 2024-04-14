Ext.define('myapp.view.main.Footer',{
 extend:'Ext.container.Container',
 xtype:'footer',
 width:'100%',
 height:'100%',

 layout:{
  type:'vbox',
  align:'center'
 },
 defaults:{
  margin:'10 0 10 0'
 },
 items:[{
  xtype: 'button',
  width:'100%',
  text:'Back to top',
  scale:'medium'
 },{
  xtype:'container',

  layout:{
   type:'table',
   columns:4
  },

  defaults:{
   width:200,
   height:400,
   // labelAlign:'top',
   margin:'0 50 10 0'
  },

  items:[
   {
    xtype:'panel',
    title:'Get to Know Us',
    // margin:'10 0 10 0',
    bodyPadding:10,
    layout:{
     type:'vbox',
    },
    defaults:{
     margin:'10 0 10 0',
    },
    items:[
     {html:'About Us'},
     {html:'Careers'},
     {html:'Press Releases'},
     {html:'Amazon Science'},
    ]
   },
   {
    xtype:'panel',
    title:'Connect with Us',
    // margin:'10 0 10 0',
    bodyPadding:10,
    layout:{
     type:'vbox',
    },
    defaults:{
     margin:'10 0 10 0'
    },
    items:[
     {html:'Facebook'},
     {html:'Twitter'},
     {html:'Instagram'},
    ]
   },
   {
    xtype:'panel',
    title:'Make Money with Us',
    // margin:'10 0 10 0',
    bodyPadding:10,
    layout:{
     type:'vbox',
    },
    defaults:{
     margin:'10 0 10 0'
    },
    items:[
     {html:'Sell on Amazon'},
     {html:'Sell under Amazon Accelerator'},
     {html:'Protect and Build Your Brand'},
     {html:'Amazon Global Selling'},
     {html:'Become an Affiliate'},
     {html:'Fulfilment by Amazon'},
     {html:'Advertise Your Products'},
     {html:'Amazon Pay on Merchants'},
    ]
   },
   {
    xtype:'panel',
    title:'Let Us Help You',
    // margin:'10 0 10 0',
    bodyPadding:10,
    layout:{
     type:'vbox',
    },
    defaults:{
     margin:'10 0 10 0'
    },
    items:[
     {html:'COVID-19 and Amazon'},
     {html:'Your Account'},
     {html:'Returns Centre'},
     {html:'100% Purchase Protection'},
     {html:'Amazon App Download'},
     {html:'Help'},
    ]
   },
  ]
 }]
})

