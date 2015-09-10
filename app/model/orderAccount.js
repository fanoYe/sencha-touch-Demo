/**
 * Created by fang.ye on 9/7/2015.
 */
Ext.define('MyApp.model.orderAccount',{
    extend:'Ext.data.Model',
    config:{
        fields: [
            {name:'AccNum',type:'string'},
            {name:'AccNumValue',type:'string'},
        ]
    }
});