/**
 * Created by fang.ye on 9/1/2015.
 */

Ext.define('AppReaderMarket', {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.appReaderMarket',
    getResponseData: function (response) {
        var data = this.callParent([response]);
        var result = [];
        for(var i= 0;i<data.length ;i++){
            result.push({
                market:data[i],
                marketValue:data[i]
            });
        }
        return result;
    }
});

Ext.define("MyApp.store.orderStore",{
    extend:'Ext.data.Store',
    model:'MyApp.model.orderModel',
    config:{
        autoLoad:true,
        params:{sessId:JSON.parse(localStorage.getItem("userMessage")).SessId},
        proxy:{
            type:'ajax',
            actionMethods : 'POST',
            url:'http://192.168.1.7:3030/system/orderMarkets',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/x-www-form-urlencoded"
            },
            withCredentials:true,
            useDefaultXhrHeader:false,
            reader:{
                type:'appReaderMarket'
            }
        }
    }
});
