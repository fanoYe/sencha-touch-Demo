/**
 * Created by fang.ye on 9/1/2015.
 */
Ext.define('MyApp.controller.UserLogin',{
   extend:'Ext.app.Controller',
   config:{
       refs:{
           mainView:'mainView',
           loginView:'loginView',
           testView:'testView',
           login_btn:'#login_btn',
           userName:'#userName',
           password:'#password'
       },
       control:{
           login_btn:{
             tap:'login_ontap'
           }
       }
   },

    login_ontap:function(){
        var loginInfo= Ext.getCmp('loginForm').getValues();
        var model = Ext.create('MyApp.model.User',loginInfo);
        var errors = model.validate();
        if(errors.isValid()){
            var name = loginInfo.userName;
            var password = loginInfo.password;
            Ext.Ajax.request({
                method: 'POST',
                url:MyApp.app.baseUrl+'/login/submit',
                params:{name:name,password:password},
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                withCredentials:true,
                useDefaultXhrHeader: false,
                scope:this,
                success: function(response){
                    var resText  = Ext.util.JSON.decode(response.responseText);
                    var sysMessage = resText.UserLoginResponse.User.SysCode;
                    if(!sysMessage){
                        localStorage.setItem('userMessage',JSON.stringify(resText));
                        this.redirectTo('loadOrder');
                    }else{
                        Ext.Msg.alert('登录失败');
                    }
                }
            })
        }else{
            var message = "";
            Ext.each(errors.items,function(res){
                message += res.getMessage()+'\n'
            });
            Ext.Msg.alert(message);
        }
    }
});