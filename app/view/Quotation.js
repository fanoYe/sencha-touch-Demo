
/**
 * Created by fang.ye on 8/24/2015.
 */
Ext.define('MyApp.view.Quotation',{
    extend:'Ext.Container',
    xtype:'QuotationView',
    fullscreen:true,
    config:{
        title: '行情',
        //iconCls: 'icon-home',
        iconCls: 'home',
        html: 'Contact Screen',
        items:[
            {
                xtype: 'toolbar',
                items: [{
                    xclass: 'Ext.ux.ActionOverFlowMenuButton',
                    text:'menu',
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
                    }, {
                        docked: 'bottom',
                        text: 'Settings',
                        iconCls: 'settings',
                        handler: function() {
                            //do somethin
                        }
                    }]
                }]
            }
        ]
    }
})