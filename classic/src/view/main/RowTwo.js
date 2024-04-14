





Ext.define('myapp.view.main.RowTwo',{
    extend:'Ext.container.Container',
    xtype:'rowTwo',

    items:[{
     xtype:'panel',
     title:'Blockbuster deals',
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
            src: 'images/assets/table/offer1.PNG'
        },
        {
            src: 'images/assets/table/offer2.PNG'
        },
        {
            src: 'images/assets/table/offer3.PNG'
        },
        {
            src: 'images/assets/table/offer4.PNG'
        },
        {
            src: 'images/assets/table/offer5.PNG'
        },
        {
            src: 'images/assets/table/offer6.PNG'
        },
        {
            src: 'images/assets/table/offer7.PNG'
        },
        {
            src: 'images/assets/table/offer8.PNG'
        },
        {
            src: 'images/assets/table/offer9.PNG'
        },
        {
            src: 'images/assets/table/offer10.PNG'
        },
        {
            src: 'images/assets/table/offer11.PNG'
        },
        {
            src: 'images/assets/table/offer12.PNG'
        },
        {
            src: 'images/assets/table/offer13.PNG'
        },
        {
            src: 'images/assets/table/offer14.PNG'
        },
        {
            src: 'images/assets/table/offer15.PNG'
        },
     ]
    }]


   })