/**
 * Created by fang.ye on 8/18/2015.
 */

Ext.define('MyApp.view.OrderBook',{
    extend:'Ext.Container',
    xtype:'orderBookView',
    config:{
        title: '订单',
        id:'orderBookInfo',
        iconCls: 'user',
        layout:'vbox',
        items:[
            {
                flex:10,
                titleBar:{
                    height : 50,
                    defaults :
                    {
                        height : 50
                    }
                },
                title:"订单记录",
                xtype:'grid',
                store:'userStore',
                columns: [
                    {
                        text: 'Name',
                        dataIndex: 'name',
                        sortable:false,
                        width: 200
                    },
                    {
                        text: 'Email',
                        dataIndex: 'email',
                        width: 200
                    },
                    {
                        text: 'Phone',
                        dataIndex: 'phone',
                        width: 200
                    }
                ]
            }
        ]
    }
});