/**
 * Created by fang.ye on 8/21/2015.
 */

Ext.define('MyApp.view.Order',{
    extend:'Ext.Container',
    xtype:'orderView',
    requires: [
        'MyApp.view.Home',
    ],
    config:{
        id:'orderViewInfo',
        title: '交易',
        iconCls: 'home',
        layout: 'vbox',
        items: [
            {
                docked:'top',
                flex:'1',
                layout:'hbox',
                items:[
                    {
                        html: '买入',
                        cls :'panel-header',
                        flex: 1,
                        id   :'orderBuy',
                        listeners: {
                            tap : {
                                fn : function() {
                                    Ext.getCmp('orderBuy').addCls("red-line");
                                    Ext.getCmp('orderSell').removeCls("red-line");
                                    Ext.getCmp('orderView').setActiveItem(0);
                                },
                                element : 'element'
                            }
                        }
                    },
                    {
                        html: '卖出',
                        cls:'panel-header',
                        flex: 1,
                        id:'orderSell',
                        listeners: {
                            tap : {
                                fn : function() {
                                    Ext.getCmp('orderSell').addCls("red-line");
                                    Ext.getCmp('orderBuy').removeCls("red-line");
                                    Ext.getCmp('orderView').setActiveItem(1);
                                },
                                element : 'element'
                            }
                        }
                    }
                ],
                listeners: {
                    initialize: function() {
                        Ext.getCmp('orderBuy').addCls("red-line");
                    }
                }
            },
            {
                flex:'9',
                xtype:'carousel',
                id:'orderView',
                indicator: false,
                items: [
                    {
                        xtype: 'formpanel',
                        id:'buy',
                        /*scroll:true,*/
                        /*scrollable:'horizontal',*/
                        items:[
                            {
                                xtype: 'fieldset',
                                items:[
                                    {
                                        xtype: 'selectfield',
                                        label: '市场',
                                        id:'market',
                                        store:'orderStore',
                                        displayField:'market',
                                        valueField:'marketValue'
                                    },
                                    {
                                        xtype: 'selectfield',
                                        label: '账号',
                                        id:'accNum',
                                        displayField:'AccNum',
                                        valueField:'AccNumValue'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id:'security',
                                        name : 'lastName',
                                        clearIcon:true,
                                        label: '证券代号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id:'securityName',
                                        clearIcon:true,
                                        name : 'lastName',
                                        label: '证券名称'
                                    },
                                    {
                                        xtype: 'selectfield',
                                        id:'orderType',
                                        label: '订单类别',
                                        options:[
                                            {text:'限价盘',value:'L'},
                                            {text:'市价盘',value:'M'},
                                            {text:'竞价盘',value:'A'}
                                        ]
                                    },
                                    {
                                        /*xtype: 'spinnerfield',
                                        label     : '价格',
                                        style     : 'border-bottom: 1px solid #ddd;border-radius: 0px;',
                                        minValue  : 0,
                                        maxValue  : 100,
                                        stepValue : 2,
                                        cycle     : true*/
                                        xtype: 'textfield',
                                        id:'orderPrice',
                                        clearIcon:true,
                                        name : 'price',
                                        label: '价格'

                                    },
                                    {
                                        xtype: 'textfield',
                                        id:'ordQty',
                                        clearIcon:true,
                                        name : 'lastName',
                                        label: '数量'
                                    },
                                ]
                            },
                            {
                                layout:'hbox',
                                items:[
                                    {
                                        xtype: 'button',
                                        id:'orderBuySubmit',
                                        text: '买入',
                                        cls:'order-Btn',
                                        ui:'action',
                                        flex:1
                                        /*listeners:{
                                            tap:function(){
                                                Ext.Msg.show(
                                                    {
                                                        title: '确认面板',
                                                        prompt:false,
                                                        width:300,
                                                        //style:'background-color:white;color:red',
                                                        items:[{
                                                            layout:'vbox',
                                                            //style:'color:white;border-top:1px solid black;border-bottom:1px solid black;margin-top:5px;',
                                                            items:[
                                                                {
                                                                    height:20,
                                                                    layout:'hbox',
                                                                    items:[
                                                                        {
                                                                            width: 80,
                                                                            style:'text-align:right;margin-right:15px;',
                                                                            html:'市场'
                                                                        },
                                                                        {
                                                                            width: 200,
                                                                            html:'香港'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    height:20,
                                                                    layout:'hbox',
                                                                    items:[
                                                                        {
                                                                            width: 80,
                                                                            style:'text-align:right;margin-right:15px;',
                                                                            html:'账号'
                                                                        },
                                                                        {
                                                                            width: 200,
                                                                            html:'10000000 cash HKD'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    height:20,
                                                                    layout:'hbox',
                                                                    items:[
                                                                        {
                                                                            width: 80,
                                                                            style:'text-align:right;margin-right:15px;',
                                                                            html:'订单类别'
                                                                        },
                                                                        {
                                                                            width: 200,
                                                                            html:'限价盘'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }],
                                                        buttons:[
                                                            {
                                                                itemId:'ok',
                                                                cls: 'm-but-icon-03 m-margin-02',
                                                                text:'确定'
                                                            },
                                                            {
                                                                itemId:'cancle',
                                                                cls: 'm-but-icon-03 m-margin-02',
                                                                text:'取消'
                                                            }
                                                        ]
                                                    }
                                                )
                                            }
                                        }*/
                                    },
                                    {
                                        xtype: 'button',
                                        text: '清除',
                                        cls:'order-Btn',
                                        ui:'action',
                                        flex:1
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        id:'sell',
                        items:[
                            {
                                xtype: 'fieldset',
                                items:[
                                    {
                                        xtype: 'selectfield',
                                        label: '市场',
                                        options: [
                                            {text:'香港',value:'HK'},
                                            {text:'美国',value:'US'},
                                            {text:'英国',value:'UK'}
                                        ]
                                    },
                                    {
                                        xtype: 'selectfield',
                                        label: '账号',
                                        options:[
                                            {text:'10000000 CASH HKD',value:'10000000 CASH HKD'},
                                            {text:'10000000 CASH HKD',value:'10000000 CASH HKD'},
                                            {text:'10000000 CASH HKD',value:'10000000 CASH HKD'}
                                        ]
                                    },
                                    {
                                        xtype: 'textfield',
                                        name : 'lastName',
                                        label: '证券代号'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name : 'lastName',
                                        label: '证券名称'
                                    },
                                    {
                                        xtype: 'selectfield',
                                        label: '订单类别',
                                        options:[
                                            {text:'限价盘',value:'L'},
                                            {text:'市价盘',value:'M'},
                                            {text:'竞价盘',value:'A'}
                                        ]
                                    },
                                    {
                                        xtype: 'spinnerfield',
                                        label     : '价格',
                                        style     : 'border-bottom: 1px solid #ddd;border-radius: 0px;',
                                        minValue  : 0,
                                        maxValue  : 100,
                                        stepValue : 2,
                                        cycle     : true
                                    },
                                    {
                                        xtype: 'textfield',
                                        name : 'lastName',
                                        label: '数量'
                                    },

                                ]
                            },
                            {
                                flex:'1',
                                layout:'hbox',
                                items:[
                                    {
                                        xtype: 'button',
                                        text: '买入',
                                        cls:'order-Btn',
                                        ui:'decline',
                                        flex:1
                                    },
                                    {
                                        xtype: 'button',
                                        text: '清除',
                                        cls:'order-Btn',
                                        ui:'decline',
                                        flex:1
                                    },
                                ]
                            }
                        ]
                    }
                ],
                listeners:{
                    activeitemchange: function() {
                        var $this = this;
                        var orderMode = $this.getActiveItem().getId();
                        if(orderMode == 'buy'){
                            Ext.getCmp('orderBuy').addCls("red-line");
                            Ext.getCmp('orderSell').removeCls("red-line");
                        }else{
                            Ext.getCmp('orderBuy').removeCls("red-line");
                            Ext.getCmp('orderSell').addCls("red-line");
                        }
                    }
                }
            }
        ]
    }
});