/**
 * Created by fang.ye on 9/2/2015.
 */
Ext.define('MyApp.model.orderModel',{
    extend:'Ext.data.Model',
    config:{
        fields: [
            {name:'id',type:'string'},
            {name:'market',type:'string'},
            {name:'marketValue',type:'string'}
        ]
    }
})