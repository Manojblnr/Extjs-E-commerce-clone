
Ext.define('myapp.view.main.FirstNav', {
  extend: 'Ext.panel.Panel',
  height: '100%',
  width: '100%',
  xtype: 'firstNav',
  layout: 'fit',
  cls:'first-nav',

  requires:[
    'myapp.view.main.LoginForm',
    'myapp.view.main.RegisterForm'
  ],

  items: {
   xtype: 'toolbar',
   style:{
    backgroundColor:'#0F1111',
   },
   defaults: {
    flex:1,
    style:{
     backgroundColor:'#0F1111',
     border:'none',
    }
   },
   items: [{
    xtype: 'button',
    text: '<img src= "images/amazon.png" width="100%" height="50">',
   }, {
    xtype: 'button',
    html:`
       hello
       <br>
       Select your address
   `,
   iconCls:"fas fa-map-marker-alt",
   }, {
    xtype:'panel',
    height:'100%',
    layout:'hbox',
    flex:3,
    style:{
     padding: '10px 8px 10px 8px',
    },

    items:[{
     xtype:'combobox',
     width:40,
     height:'100%',
     store:['option 1', 'option 2', 'option 3'],
     editable:false
    },{
     xtype:'textfield',
     flex:2.5,
     width:800,
     height:'100%',
     triggers:{
      search:{
       cls:'x-form-search-trigger',
      }
     }
    }]
   }, {
    xtype:'button',
    height:'100%',
    width:10,
    flex:.5,
    text:'lang',
    style:{
     backgroundColor:'#0F1111',
     border:'none'
    },
    menu:[{
      text:'India'
    },{
      text:'Russia'
    },{
      text:'Japan'
    }]
   }, {
    xtype:'button',
    width: 150,
    style:{
     padding: '10px 8px 10px 8px',
     backgroundColor:'#0F1111',
     border:'none'
    },
    text:'hello, sign in <br> Accounts &amp; Lists',
    menu:[{
      xtype:'button',
      text:'login',
      handler: function(){
        var loginWindow = Ext.create('Ext.window.Window',{
          title:'login',
          // layout:'fit',
          modal:true,
          items:[{
            xtype:'loginForm'
          }]
        });
        loginWindow.show();
      }
    },{
      xtype:'button',
      text:'signup',
      handler: function(){
        var registerForm = Ext.create('Ext.window.Window',{
          title:'Register Form',
          layout:'fit',
          height:650,
          modal:true,
          items:[{
            xtype:'registerForm'
          }]
        });
        registerForm.show();
      }
    }]
   }, {
    xtype:'button',
    height:'100%',
    flex:.5,
    style:{
     padding:'5px 10px 5px 10px',
     backgroundColor:'#0F1111',
     border:'none'
    },
    width:100,
    html:'Returns <br> & Orders'
   }, {
    xtype:'button',
    height:'100%',
    flex:.5,
    html:`
      Cart
    `,
    iconCls:'fa fa-shopping-cart',

    handler:function(){
      var linkComponent = Ext.ComponentQuery.query()
    }
   }]
  }
 }
 )

