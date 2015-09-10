/**
 * Created by fang.ye on 8/21/2015.
 */

Ext.define('MyApp.view.Login',{
   extend:'Ext.form.Panel',
   xtype:'loginView',
   fullscreen:true,
   requires:[
     'Ext.field.Password'
   ],
   config:{
       layout: 'vbox',
       id:'loginForm',
       items:[
           {
               flex:'1',
               docked:'top',
               cls :'panel-header',
               html: '登入'
           },
           {
               flex:'9',
               style:'margin-top:35px;',
               layout: 'hbox',
               items:[
                   {
                       flex:'1'
                   },
                   {
                       flex:'8',
                       items: [
                           {
                               xtype:'panel',
                               defaults:{
                                   labelWidth :'8%'
                               },
                               items:[
                                   {
                                       xtype: 'textfield',
                                       label: '&nbsp;',
                                       id:'userName',
                                       name: 'userName',
                                       placeHolder:'请输入账号',
                                       style:'border: 1px solid #ddd;border-radius: 4px;',
                                       labelCls:'loginAccountImg'
                                   },
                                   {
                                       xtype: 'passwordfield',
                                       label: '&nbsp;',
                                       id:'password',
                                       name: 'password',
                                       style:'border: 1px solid #ddd;border-top:none;border-radius: 4px;',
                                       placeHolder:'请输入密码',
                                       labelCls:'loginPwdImg'
                                   }
                               ]
                           },
                           {
                               id:'login_btn',
                               xtype:'button',
                               text:'登录',
                               ui:'action',
                               height:32,
                               style:'margin-top:35px;'
                           }
                       ]
                   },
                   {
                       flex:'1'
                   }
               ]
           }
       ]
   }
});

