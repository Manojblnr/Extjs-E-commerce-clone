// Ext.define('myapp.view.main.Banner',{
//  extend:'Ext.container.Container',
//  xtype:'banner',

//  layout:{
//   type:'fit',
//   width:'100%',
//   height:'100%'
//  },

//  items:[{
//   xtype:'image',
//   itemId:'bannerImage',
//   src:'images/assets/banner/bannerImg1.jpg',
//  }],

//  listeners:{
//   afterrender: function(component){
//    var bannerImage = component.down('#bannerImage'),
//       currentIndex = 1,
//       maxIndex = 5,
//       slideInterval = 5000,
//       slideTask = Ext.TaskManager.start({
//        run:function(){
//         currentIndex = (currentIndex >= maxIndex) ? 1 : currentIndex + 1;
//         bannerImage.setSrc('images/assets/banner/bannerImg'+ currentIndex + '.jpg');
//        },
//        interval:slideInterval
//       })

//       component.add({
//        xtype:'container',
//        layout:{
//         type:'hbox',
//         pack:'center',
//        },

//        defaults:{
//         style:{
//          background:'red',
//         }
//        },

//        items:[{
//         xtype:'button',
//         iconCls: 'fa fa-angle-left',
//         handler:function(){
//          currentIndex = (currentIndex <= 1) ? maxIndex : currentIndex - 1;
//          bannerImage.setSrc('images/assets/banner/bannerImg'+ currentIndex + '.jpg')
//         },
//        },{
//         xtype:'button',
//         iconCls: 'fa fa-angle-right',
//         handler:function(){
//          currentIndex = (currentIndex >= maxIndex) ? 1 : currentIndex + 1;
//          bannerImage.setSrc('images/assets/banner/bannerImg'+ currentIndex + '.jpg')
//         }
//        }]
//       })

//   }
//  }
// })




























// Ext.define('myapp.view.main.Banner',{
//  extend:'Ext.container.Container',
//  xtype:'banner',

//  layout:{
//   type:'fit',
//   width:'100%',
//   height:'100%'
//  },

//  items:[{
//   xtype:'image',
//   itemId:'bannerImage',
//   src:'images/assets/banner/bannerImg1.jpg',
//   style:{
//    position:'absolute',
//   }
//  }],

//  listeners:{
//   afterrender: function(component){
//    var bannerImage = component.down('#bannerImage'),
//       currentIndex = 1,
//       maxIndex = 5,
//       slideInterval = 5000,
//       slideTask = Ext.TaskManager.start({
//        run:function(){
//         currentIndex = (currentIndex >= maxIndex) ? 1 : currentIndex + 1;
//         bannerImage.setSrc('images/assets/banner/bannerImg'+ currentIndex + '.jpg');
//        },
//        interval:slideInterval
//       })

//       component.add({
//        xtype:'container',
//        height:'100%',
//        width:'100%',
//        layout:{
//         type:'hbox',
//         pack:'center',
//        },

//        defaults:{
//         style:{
//          background:'red',
//         }
//        },

//        items:[{
//         xtype:'button',
//         iconCls: 'fa fa-angle-left',
//         handler:function(){
//          currentIndex = (currentIndex <= 1) ? maxIndex : currentIndex - 1;
//          bannerImage.setSrc('images/assets/banner/bannerImg'+ currentIndex + '.jpg')
//         },
//         style:{
//          position:'absolute',
//         }
//        },{
//         xtype:'button',
//         iconCls: 'fa fa-angle-right',
//         handler:function(){
//          currentIndex = (currentIndex >= maxIndex) ? 1 : currentIndex + 1;
//          bannerImage.setSrc('images/assets/banner/bannerImg'+ currentIndex + '.jpg')
//         },
//         style:{
//          position:'absolute',
//          top:'50%',
//          left: 50
//         }
//        }]
//       })

//   }
//  }
// })















Ext.define('myapp.view.main.Banner',{
    extend:'Ext.container.Container',
    xtype:'banner',

    layout:{
        type:'fit',
        width:'100%',
        height:'100%'
    },

    items:[{
        xtype:'image',
        itemId:'bannerImage',
        src:'images/assets/banner/bannerImg1.jpg',
        style:{
            position:'absolute',
        }
    }],

    listeners:{
        afterrender: function(component){
            var bannerImage = component.down('#bannerImage'),
                currentIndex = 1,
                maxIndex = 5,
                slideInterval = 5000,
                slideTask = Ext.TaskManager.start({
                    run:function(){
                        currentIndex = (currentIndex >= maxIndex) ? 1 : currentIndex + 1;
                        bannerImage.setSrc('images/assets/banner/bannerImg'+ currentIndex + '.jpg');
                    },
                    interval:slideInterval
                })

            component.add({
                xtype:'container',
                height:'100%',
                width:'100%',
                layout:{
                    type:'absolute'
                },

                defaults:{
                    style:{
                        // background:'red',
                        fontSize:30,

                    }
                },

                items:[{
                    xtype:'button',
                    iconCls: 'fa fa-angle-left',
                    handler:function(){
                        currentIndex = (currentIndex <= 1) ? maxIndex : currentIndex - 1;
                        bannerImage.setSrc('images/assets/banner/bannerImg'+ currentIndex + '.jpg')
                    },
                    style:{
                        // position:'absolute',
                        // top:'50%',
                        // left: 0,
                        // transform: 'translateY(-50%)'

                        marginLeft:'0',
                        // lineHeight:'50px'
                        marginTop:'15%',
                        // fontSize:'20px'
                    }
                },{
                    xtype:'button',
                    iconCls: 'fa fa-angle-right',
                    handler:function(){
                        currentIndex = (currentIndex >= maxIndex) ? 1 : currentIndex + 1;
                        bannerImage.setSrc('images/assets/banner/bannerImg'+ currentIndex + '.jpg')
                    },
                    style:{
                        // position:'absolute',
                        // top:'50%',
                        // right: 0,
                        // transform: 'translateY(-50%)'

                        marginLeft:'98%',
                        // lineHeight:'50px'
                        marginTop:'15%',
                        width:20,
                        height:30
                    }
                }]
            })

        }
    }
})


// // first try do slidshow after that add forward and backward button


