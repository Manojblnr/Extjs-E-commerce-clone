


Ext.define('myapp.view.main.MainTable', {
    extend: 'Ext.container.Container',
    xtype: 'mainTable',

    requires:[
        'myapp.view.main.RowOne',
        'myapp.view.main.RowTwo',
        'myapp.view.main.RowThree',
        'myapp.view.main.RowFour',
        'myapp.view.main.RowFive',
        'myapp.view.main.RowSix',
        'myapp.view.main.Footer',

    ],
    layout:{
        type:'vbox',
    },
    margin:'0 10 0 10',
    defaults:{
        width:1400,
        height:400,
        margin:'30 10 10 10'
    },
    items:[
        {xtype:'rowOne'},
        {xtype:'rowTwo'},
        {xtype:'rowThree'},
        {xtype:'rowFour'},
        {xtype:'rowFive'},
        {xtype:'rowSix'},
        {
            xtype:'footer',
            width:'100%',
            height:600,
        },
    ],
});



