

Ext.define('myapp.view.main.LoginForm',{
 extend:'Ext.container.Container',
 xtype:'loginForm',
 layout:{
     type:'center',
 },
 fieldDefaults:{
     labelAlign:'top',
 },
 items:[{
     xtype:'form',
     width:350,
     height:350,
     bodyPadding:25,
     title:'Sign in',
     defaultType:'textfield',

     items:[{
         xtype:'textfield',
         emptyText:'Mobile number',
         fieldLabel:'Email or mobile phone number',
         labelAlign:'top',
         width:300,
         height:30,
         allowBlank:false,
         regex: /^\d{3}-\d{3}-\d{4}$/,
         regexText: 'Phone number must be in the format XXX-XXX-XXXX',
         vtype:'number'
     },{
         xtype:'button',
         text:'Continue',
         width:300,
         height:30
     },{
         xtype:'displayfield',
         value:'By continuing, you agree to Amazon <a href="#"> Conditions of Use </a> and <a href="#"> Privacy Notice </a>.'
     },{
         xtype:'fieldset',
         title:'New to amazon?',
         titleAlign:'center',
         items:[{
             xtype:'button',
             width:300,
             height:30,
             text:'Create your Amazon account'
         }]
     }]
 }]
})
