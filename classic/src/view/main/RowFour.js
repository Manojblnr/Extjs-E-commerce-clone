

Ext.define('myapp.view.main.RowFour', {
    extend: 'Ext.container.Container',
    xtype: 'rowFour',

    width: '100%',
    layout: {
        type: 'table',
        tdAttrs: {
            style: 'padding:10px;'
        }
    },
    defaults: {
        cls: 'my-table-cell',
        flex: 1,
        width: '100%',
    },
    items: [{
        width: 330,
        height: 425,
        xtype: 'panel',
        title: 'Up to 15% off | Travel tickets',
        layout: {
            type: 'table',
            columns: 2,
            tdAttrs: {
                style: 'padding:5px',
            },
        },
        bodyPadding: 10,

        items: [{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/travel1.PNG',
                mode: 'img',
                padding: '5 2 2 2',
            },{
                xtype:'component',
                html:'Get up to 15% offer on flights',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/travel2.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Zero gateway fees on trains',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/travel3.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Get 10% back on bus tickets',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/travel4.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Products for your travel needs',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'displayfield',
            value:'<a href="#"style="text-decoration: none;" >See all offers</a>',
        }],
    },{
        width: 330,
        height: 425,
        xtype: 'panel',
        title: 'Up to 40% off | Summer appliances <br> from local stores',
        layout: {
            type: 'table',
            columns: 2,
            tdAttrs: {
                style: 'padding:5px',
            },
        },
        bodyPadding: 10,

        items: [{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/appliances1.PNG',
                mode: 'img',
                padding: '5 2 2 2',
            },{
                xtype:'component',
                html:'Air condioners',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/appliances2.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Refrigerators',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/appliances3.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Microwaves',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/appliances4.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Washing machine',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'displayfield',
            value:'<a href="#"style="text-decoration: none;" >See all offers</a>',
            style:{
                margin:'40px 0 0 0 '
            }
        }],
    },{
        width: 330,
        height: 425,
        xtype: 'panel',
        title: '50%-80% off | Amazon Brands & more',
        layout: {
            type: 'table',
            columns: 2,
            tdAttrs: {
                style: 'padding:5px',
            },
        },
        bodyPadding: 10,

        items: [{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/brand1.PNG',
                mode: 'img',
                padding: '5 2 2 2',
            },{
                xtype:'component',
                html:'Home decor & furnishing',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/brand2.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'kitchen & dining',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/brand3.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Furniture',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/brand4.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Water bottles, & fans',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'displayfield',
            value:'<a href="#"style="text-decoration: none;" >See all offers</a>',
            style:{
                margin:'55px 0 0 0 '
            }
        }],
    }
    ,{
        width: 330,
        height: 425,
        xtype: 'panel',
        title: 'Up to 70% off | Refurbished Products',
        layout: {
            type: 'table',
            tdAttrs: {
                style: 'padding:5px',
            },
        },
        items:[{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/refurbished.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'displayfield',
                value:'<a href="#"style="text-decoration: none;" >See all</a>',
                style:{
                    margin:'55px 0 0 0 '
                }
            }]
        }],

    },
    ],


})



