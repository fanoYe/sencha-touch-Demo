/**
 * Created by fang.ye on 8/24/2015.
 */
Ext.define('MyApp.view.Tendency',{
    extend:'Ext.Container',
    xtype:'tendencyView',
    fullscreen:true,
    config:{
        title: '走势',
        iconCls: 'user',
        html: 'Contact Screen',
        items:[
            {
                xtype: 'toolbar',
                items: [{
                    xclass: 'Ext.ux.TabMenuButton',
                    text: '菜单',
                    menuItems: [{
                        text: 'Chats',
                        iconCls: 'chats',
                        handler: function() {
                            // do something
                        }
                    }, {
                        text: 'Contacts',
                        iconCls: 'contacts',
                        handler: function() {
                            // do something
                        }
                    }]
                }]
            }
        ]
    }
})