/**
 * Created by fang.ye on 9/9/2015.
 */
/**
 * Created by fang.ye on 9/1/2015.
 */
Ext.define('MyApp.controller.orderBookControl',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            orderBookInfo:'#orderBookInfo'
        },
        control:{
            orderBookInfo:{
                activate:'loadOrderBook'
            }
        }
    },
    loadOrderBook:function(){
        var userMessage = localStorage.getItem("userMessage");
        var sessId = JSON.parse(userMessage).SessId;
        var market = 'HK'
        var accNum = '8000000061011'

        Ext.Ajax.request({
            method: 'POST',
            url:MyApp.app.baseUrl+'/stock/accountOrderHistory',
            params:{sessId:sessId,market:market,accNum:''},
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/x-www-form-urlencoded"
            },
            withCredentials:true,
            useDefaultXhrHeader: false,
            scope:this,
            success: function(response){
                    
            }
        })
    }
});