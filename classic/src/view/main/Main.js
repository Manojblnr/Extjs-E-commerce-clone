/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('myapp.view.main.Main', {
    extend: 'Ext.container.Container', 
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'myapp.view.main.MainController',
        'myapp.view.main.MainModel',
        'myapp.view.main.List',

        'myapp.view.main.Navbar',
        'myapp.view.main.Banner',
        'myapp.view.main.MainTable',
    ],
    scrollable:true,

    layout: 'border',

    items: [{
        region: 'north',
        height: 100,
        xtype: 'navbar'
    },{
        region: 'center',
        xtype: 'container',
        scrollable:'y',
        layout: {
            type: 'absolute',
        },
        items: [
            {
                xtype: 'banner'
            }
            , {
                xtype: 'mainTable'
                , x: 50
                , y: 250
            }
        ]
    }]
});
