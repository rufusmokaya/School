Ext.define('School.view.student.StudentGridForm', {
    extend: "Ext.window.Window",
    alias: 'widget.StudentGridForm',
    // height: 200,
    // width: 400,
    // layout: 'fit',
    // items: {
    //     xtype: 'grid',
    //     broder: false,
    //     columns: [{ header: 'Name' }, { header: 'email' }],
    //     store: []
    // },
    controller: 'student-form',
    initComponent: function () {
        Ext.apply(this,
            {

                //resizable: false,
                collapsible: false,
                bodyPadding: '5',
                buttonAlign: 'center',
                border: false,
                trackResetOnLoad: true,
                modal: true,


                items: [{
                    xtype: 'form',
                    scrollable: true,
                    jsonSubmit: true,
                    width: 500,
                    height: 320,
                    url: 'http://localhost:8080/School/students/saveStudent',
                    layout: {
                        type: 'vbox'
                    },
                    fieldDefaults:
                    {
                        xtype: 'textfield',
                        msgTarget: 'side',
                        labelAlign: 'top',
                        labelStyle: 'font-weight:bold'
                    },
                    defaultType: 'textfield',
                    items: [{
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        defaultType: 'textfield',
                        width: '100%',
                        fieldDefaults:
                        {
                            labelAlign: 'top',
                            labelStyle: 'font-weight:bold'
                        },
                        items: [{
                            fieldLabel: 'Id',
                            name: 'Id',
                            readOnly: true,
                            width: 55
                        },
                        {
                            fieldLabel: 'First Name',
                            flex: 1,
                            name: 'first_name',
                            margin: '0 0 0 5',
                            allowBlank: false
                        },
                        {
                            name: 'middle_name',
                            width: 150,
                            margin: '0 0 0 5',
                            fieldLabel: 'Middle Name:',
                            allowBlank: false
                        },
                        {
                            fieldLabel: 'Last Name',
                            flex: 1,
                            margin: '0 0 0 5',
                            name: 'last_name',
                            allowBlank: false
                        }]
                    },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Date of Birth',
                        name: 'dob',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'City',
                        width: '100%',
                        name: 'city',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'State',
                        width: '100%',
                        name: 'state',
                        allowBlank: false
                    }
                    ],
                    buttons: [{
                        text: 'Create',
                        //id: 'btnCreate',
                        itemId: 'btnCreate',
                        //formBind: true,
                        handler: 'onCreateClick',
                        tooltip: 'Make sure you have filled all the details'

                    },
                    // {
                    //     text: 'Read',
                    //     itemId: 'btnLoad',
                    //     //handler: 'onReadClick'
                    //     handler: 'moveToGrid'

                    // },

                    // {
                    //     text: 'Update',
                    //     itemId: 'btnUpdate',
                    //     formBind: true,
                    //     handler: 'onUpdateClick'
                    // },
                    // {
                    //     text: 'Delete',
                    //     itemId: 'btnDelete',
                    //     formBind: true,
                    //     handler: 'onDeleteClick'
                    // },
                    // {
                    //     text: 'Reset',
                    //     itemId: 'btnReset',
                    //     handler: 'onResetClick'
                    // },
                    {
                        text: 'Clear Form',
                        itemId: 'btnClear',
                        handler: 'onClearClick'
                    }]

                }],

            });

        this.callParent(arguments);

    },
    clearForm: function () {
        this.getForm().getFields().each(function (field) {
            field.validateOnChange = false;
            field.setValue('');
            field.resetOriginalValue();
        });
    }
})