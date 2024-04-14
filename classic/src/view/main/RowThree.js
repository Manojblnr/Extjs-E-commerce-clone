// Ext.define('myapp.view.main.RowThree',{
//  extend:'Ext.container.Container',
//  xtype:'rowThree',

//  width:'100%',
//  layout: {
//   type: 'table',
//   tdAttrs: {
//       style: 'padding:10px;'
//   }
// },
// defaults: {
//   flex:1,
//   width:'100%',
// },
// items: [{
//   width: 330,
//   height: 400,
//   xtype: 'panel',
//   title: 'Great Summer Sale',
//   layout: {
//       type: 'table',
//       columns: 2,
//       tdAttrs: {
//           style: 'padding:5px',
//       },
//   },
//   defaults: {
//       width: 130,
//       height: 130,
//   },
//   items: [
//       { html:'1'},
//       { html:'2'},
//       { html:'3'},
//       { html:'4'},
//   ],
// }, {
//   width: 330,
//   height: 400,
//   xtype: 'panel',
//   title: 'Great Summer Sale',
//   layout: {
//       type: 'table',
//       columns: 2,
//       tdAttrs: {
//           style: 'padding:5px',
//       },
//   },
//   defaults: {
//       width: 130,
//       height: 130,
//   },
//   items: [
//       { html:'1'},
//       { html:'2'},
//       { html:'3'},
//       { html:'4'},
//   ],
// }, {
//   width: 330,
//   height: 400,
//   xtype: 'panel',
//   title: 'Great Summer Sale',
//   layout: {
//       type: 'table',
//       columns: 2,
//       tdAttrs: {
//           style: 'padding:5px',
//       },
//   },
//   defaults: {
//       width: 130,
//       height: 130,
//   },
//   items: [
//       { html:'1'},
//       { html:'2'},
//       { html:'3'},
//       { html:'4'},
//   ],
// },{
//   width: 330,
//   height: 400,
//   xtype: 'panel',
//   title: 'Great Summer Sale',
//   layout: {
//       type: 'table',
//       columns: 2,
//       tdAttrs: {
//           style: 'padding:5px',
//       },
//   },
//   defaults: {
//       width: 130,
//       height: 130,
//   },
//   items: [
//       { html:'1'},
//       { html:'2'},
//       { html:'3'},
//       { html:'4'},
//   ],
// }]

// })











Ext.define('myapp.view.main.RowThree',{
 extend:'Ext.container.Container',
 xtype:'rowThree',

 items:[{
  xtype:'panel',
  title:'Starting ₹899 + ₹100 cashback on UPI payments | Smartwatches  <a href="#" style="text-decoration: none;" >see all</a>',
  scrollable:'x',
  layout:{
   type:'hbox',
   align:'stretch',
   pack:'center'
  },
  bodyPadding:40,
 // padding:'10 5 10 5',
  defaults:{
     xtype: 'image',
     width: 195,
     height: 195,
     margin: '0 10 0 10',

  },
  items:[
     {
         src: 'images/assets/watches/watch1.jpg'
     },
     {
         src: 'images/assets/watches/watch2.jpg'
     },
     {
         src: 'images/assets/watches/watch3.jpg'
     },
     {
         src: 'images/assets/watches/watch4.jpg'
     },
     {
         src: 'images/assets/watches/watch5.jpg'
     },
     {
         src: 'images/assets/watches/watch6.jpg'
     },
     {
         src: 'images/assets/watches/watch7.jpg'
     },
     {
         src: 'images/assets/watches/watch8.jpg'
     },
     {
         src: 'images/assets/watches/watch9.jpg'
     },
     {
         src: 'images/assets/watches/watch10.jpg'
     },
     {
         src: 'images/assets/watches/watch11.jpg'
     },
     {
         src: 'images/assets/watches/watch12.jpg'
     },
  ]
 }]

})