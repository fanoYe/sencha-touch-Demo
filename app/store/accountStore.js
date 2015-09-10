/**
 * Created by fang.ye on 9/10/2015.
 */
Ext.define('MyApp.store.accountStore',{
    extend:'Ext.data.Store',
    model: 'MyApp.model.orderAccount',
    config:{
        autoLoad:true
    }
});