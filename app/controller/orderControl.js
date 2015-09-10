/**
 * Created by fang.ye on 9/1/2015.
 */

Ext.define('MyApp.controller.orderControl',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
             marketSel:'#market',
             accNumSel:'#accNum',
             orderType:'#orderType',
             ordQty:'#ordQty',
             orderPrice:'#orderPrice',
             enterSecurity:'#security',
             securityName:'#securityName',
             orderBuySubmit:'#orderBuySubmit'
        },
        control:{
            enterSecurity:{
                keyup:'SecurityKey',
                blur:'querySecurity'
            },
            orderBuySubmit:{
                tap:'orderBuySubmit_onTap'
            }
        },
        routes:{
            'loadOrder':'loadOrder'
        }
    },
    loadOrder:function(){
        Ext.Viewport.setActiveItem(Ext.create('MyApp.view.Home'));
        var userMessage = localStorage.getItem("userMessage");
        //装载Account
        var resText = Ext.util.JSON.decode(userMessage)
        var account = resText.UserLoginResponse.User.AccProfile.Account;
        var accountInfo = Ext.data.StoreManager.lookup('accountStore');
        for(var i=0;i<account.length;i++){
            var accNum = account[i].AccNum.toString();
            var type = '';
            var currency = account[i].CucyCode;
            var result = ''
            var accType = accNum.substring(9, 10);

            if(accType == '1' || accType == '8'){
                type = 'CASH';
            }else{
                type = 'MARGIN'
            }
            result = accNum + ' '+ type +  ' ' +currency;
            accountInfo.add({AccNum:result,AccNumValue:accNum});
        }
        //装载markets
        var marketInfo =  Ext.data.StoreManager.lookup('orderStore');

        this.getMarketSel().setStore(marketInfo);
        this.getAccNumSel().setStore(accountInfo);
    },

    //查找股票...
    SecurityKey:function(e){
        e = window.event || e;
       if(e.keyCode == 13){
           this.querySecurity();
       }
    },

    querySecurity:function(){
        var userMessage = localStorage.getItem("userMessage");
        var sessId = JSON.parse(userMessage).SessId;
        var market =  this.getMarketSel().getValue();
        var securityNum = this.getEnterSecurity().getValue();

        Ext.Ajax.request({
            method: 'POST',
            url:MyApp.app.baseUrl+'/stock/querySecurityStaticData',
            params:{sessId:sessId,sctyID:securityNum,market:market},
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/x-www-form-urlencoded"
            },
            withCredentials:true,
            useDefaultXhrHeader: false,
            scope:this,
            success: function(response){
                var resText  = Ext.util.JSON.decode(response.responseText);
                if(resText.Security.Static == undefined){
                    this.getSecurityName().setValue('没有找到股票');
                }else{
                    var securityName = resText.Security.Static.SctyName[1].$t;
                    this.getSecurityName().setValue(securityName);
                }
            }
        })
    },

    //提交order数据...
    orderBuySubmit_onTap:function(){
        var userMessage = localStorage.getItem("userMessage");
       // console.log(sessId + '/'+ accNum + '/'+market + '/'+securityNum + '/'+ordType+ '/'+price + '/'+ordQty)
       var param = {
            sessId:JSON.parse(userMessage).SessId,
            sctyID:this.getEnterSecurity().getValue(),
            market:this.getMarketSel().getValue(),
            ordSide:'B',
            ordType: this.getOrderType().getValue(),
            accNum:this.getAccNumSel().getValue(),
            ordQty:this.getOrdQty().getValue(),
            price:this.getOrderPrice().getValue(),
            cucyCode:'HKD'
        }
        Ext.Ajax.request({
            method: 'POST',
            url:MyApp.app.baseUrl+'/stock/newOrder',
            params:param,
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/x-www-form-urlencoded"
            },
            withCredentials:true,
            useDefaultXhrHeader: false,
            scope:this,
            success: function(response){
                var resText  = Ext.util.JSON.decode(response.responseText);
                var message = resText.OrderExecution.Order.SysCode + '--'+resText.OrderExecution.Order.SysMsg;
                if(resText.OrderExecution.Order.SysCode == ""){
                    Ext.Msg.alert('下单成功');
                }else{
                    Ext.Msg.alert(message);
                }
            }
        })
    }
});