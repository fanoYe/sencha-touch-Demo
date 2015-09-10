/**
 * Created by fang.ye on 8/31/2015.
 */
Ext.define('MyApp.model.User',{
    extend:'Ext.data.Model',
    config:{
        fields:[
          'userName',
          'password',
        ],
        validations:[
            {type:'presence',field:'userName',message:'请输入用户名'},
            {type:'presence',field:'password',message:'请输入密码'},
            //{type:'format',filed:'userName',matcher:/^[a-zA-Z0-9]{6,12}$/,message:'密码必须是6-12位数字或字母'}
        ]
    }
})