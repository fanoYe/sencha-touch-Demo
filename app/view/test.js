/**
 * Created by fang.ye on 9/1/2015.
 */
Ext.define('MyApp.view.test',{
    extend:'Ext.form.Panel',
    xtype:'testView',

    config:{
        layout: 'vbox',
        items:[
            {
                html:'test',
                title:'test'
            }
        ]
    }
});