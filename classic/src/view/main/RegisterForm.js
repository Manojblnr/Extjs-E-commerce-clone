Ext.define('myapp.view.main.RegisterForm',{
    extend:'Ext.container.Container',
    xtype:'registerForm',
    width:400,
    height:400,

    layout:{
        type:'center',
    },
    fieldDefaults:{
        labelAlign:'top',
    },
    items:[{
        xtype:'form',
        width:350,
        height:600,
        bodyPadding:15,
        title:'Create Account',
        defaultType:'textfield',

        items:[{
            fieldLabel:'Your name',
            name:'name',
            emptyText:'First and Last name',
            labelAlign:'top',
            width:300,
            height:30,
            allowBlank:false,
        },{
            xtype:'textfield',
            emptyText:'Mobile number',
            fieldLabel:'Mobile number',
            labelAlign:'top',
            width:300,
            height:30,
            allowBlank:false,
            regex: /^\d{3}-\d{3}-\d{4}$/,
            regexText: 'Phone number must be in the format XXX-XXX-XXXX',
            vtype:'number'
        },{
            xtype:'textfield',
            emptyText:'E-mail',
            fieldLabel:'Email(optional)',
            labelAlign:'top',
            width:300,
            height:30,
            vtype:'email'
        },{
            xtype:'textfield',
            emptyText:'At least 6 characters',
            fieldLabel:'Password',
            labelAlign:'top',
            width:300,
            height:30,
            allowBlank:false,
        },{
            xtype:'displayfield',
            value:'By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.'
        },{
            xtype:'button',
            text:'Continue',
            width:300,
            height:30
        },{
            xtype:'displayfield',
            value:'Already have an account? <a href="#"> Sign in</a>'
        },{
            xtype:'displayfield',
            value:'Buying for work<a href="#"> Create a free buiness account</a>'
        }]
    }]
})