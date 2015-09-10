/**
 * Created by fang.ye on 9/6/2015.
 */
Ext.define('MyApp.view.Home',{
    extend:'Ext.tab.Panel',
    xtype:'homeView',
    requires: [
        'Ext.ux.TabMenuButton',
        'Ext.field.Spinner',
        'Ext.form.FieldSet',
        'Ext.carousel.Carousel',
        'Ext.ux.ActionOverFlowMenuButton',
        'Ext.grid.Grid',
        'Ext.field.Select'
    ],
    config:{
        layout:{
            animation:'flip'
        },
        tabBarPosition: 'bottom',
        tabBar : {
            height:50,
            defaults : {
                flex:1,
                height:50
            }
        },
        items: [
            {
                xtype:'orderView'
            },
            {
                xtype:'orderBookView'
            },
            {
                xtype:'QuotationView'
            },
            {
                xtype:'tendencyView'
            },
            {
                title: '退出',
                iconCls: 'user',
                listeners:{
                    painted:function(){
                        Ext.getCmp('home').setActiveItem(0);
                       // Ext.Viewport.setActiveItem(Ext.create('MyApp.view.Main'));
                    }
                }
            }
        ]
    }
});