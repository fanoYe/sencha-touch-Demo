
Ext.define('MyApp.view.Main', {
    extend:'Ext.Panel',
    xtype:'mainView',
    config:{
        id:'home',
        layout:'card',
        fullscreen:true,
        items:[
            {
                xtype: 'loginView'
            },
            {
                xtype:'testView'
            }
        ]
    }
});
