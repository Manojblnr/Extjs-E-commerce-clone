

Ext.define('myapp.view.main.RowSix', {
    extend: 'Ext.container.Container',
    xtype: 'rowSix',

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
        title: 'Under ₹599 | Amazon Brands & more',
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
                src: 'images/assets/table/brand5.PNG',
                mode: 'img',
                padding: '5 2 2 2',
            },{
                xtype:'component',
                html:'Mens Clothing',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/brand6.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Womens Clothing',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/brand7.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Kids Clothing',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/brand8.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'  Footwear',
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
        title: 'Trending headphones & speakers',
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
                src: 'images/assets/table/speaker1.PNG',
                mode: 'img',
                padding: '5 2 2 2',
            },{
                xtype:'component',
                html:'Bluetooth earbuds|Up to 75%',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/speaker2.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Neckbands | starting <br> Rs.499',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/speaker3.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Bluetooth speakers',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/speaker4.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Home Theatre System',
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
        title: 'Starting ₹119 | Amazon Brands & more',
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
                src: 'images/assets/table/brand9.PNG',
                mode: 'img',
                padding: '5 2 2 2',
            },{
                xtype:'component',
                html:'Starting ₹399|Towels',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/brand10.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Starting ₹299 | Kitchen',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/brand11.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Starting ₹119 | Toys',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/brand12.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Under ₹599|Clothing',
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
        title: 'Starting ₹79 | Home, kitchen & outdoors',
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
                src: 'images/assets/table/tool1.PNG',
                mode: 'img',
                padding: '5 2 2 2',
            },{
                xtype:'component',
                html:'Fitness & Sports',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/tool2.PNG',
                mode: 'img',
                padding: '5 2 2 2',
            },{
                xtype:'component',
                html:'Vehicle accessories',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/tool3.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Mosquito repellants',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/tool1.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Industrial tools',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'displayfield',
            value:'<a href="#"style="text-decoration: none;" >See all offers</a>',
        }],
    }
    ],


})
