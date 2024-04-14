




Ext.define('myapp.view.main.RowOne', {
    extend: 'Ext.container.Container',
    xtype: 'rowOne',

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
        height: 400,
        xtype: 'panel',
        title: 'Smartphones that suits your budget',
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
                src: 'images/assets/table/mobile1.PNG',
                mode: 'img',
                padding: '5 2 2 2',
            },{
                xtype:'component',
                html:'Budget | Below <br>₹10,000',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/mobile2.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Mid range | ₹10,000 - ₹25,000',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/mobile3.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Premium | ₹25,000 - ₹40,000',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/mobile4.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Ultra premium | Above ₹40,000',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'displayfield',
            value:'<a href="#"style="text-decoration: none;" >See all offers</a>',
        }],
    },{
        width: 330,
        height: 400,
        xtype: 'panel',
        title: 'Starting ₹99 | Budget buys in books, toys & more',
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
                src: 'images/assets/table/toys1.PNG',
                mode: 'img',
                padding: '5 2 2 2',
            },{
                xtype:'component',
                html:'Books under ₹199',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/toys2.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Toys under ₹499',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/toys3.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Weighing scales starting ₹299',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'container',
            items:[{
                xtype: 'image',
                width: '100%',
                height: '100%',
                src: 'images/assets/table/toys4.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'component',
                html:'Video game accessories starting ₹199',
                padding:'5 0 0 0'
            }]
        },{
            xtype:'displayfield',
            value:'<a href="#"style="text-decoration: none;" >See all offers</a>',
        }],
    }
    ,{
        width: 330,
        height: 400,
        xtype: 'panel',
        title: 'Great Summer sale',
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
                src: 'images/assets/table/Gadgets.PNG',
                mode: 'img',
                padding: '5 2 2 2'
            },{
                xtype:'displayfield',
                value:'<a href="#"style="text-decoration: none;" >See all</a>',
            }]
        }],

    },
    ,{
        width: 330,
        height: 400,
        xtype: 'panel',
        title: 'Sign in for your best experience',
        layout: {
            type: 'table',
              columns: 1,
            tdAttrs: {
                style: 'padding:5px',
            },
        },defaults: {
            xtype: 'image',
            width: '100%',
            height: '100%',
            mode: 'img',
            padding: '5 2 2 2'
        },
        items: [{
            xtype:'button',
            text:'Sign in Securly',
            margin:'5 0 5 0'
        },{
            src: 'images/assets/table/iphone14.PNG'
        }]

    }],


})