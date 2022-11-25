Ext.define('School.view.student.StudentList', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentList',

    title: 'Student List',
    store: {
        type: 'student'
    },

    controller: 'student-list',
    viewModel: { type: 'studentviewmodel' },
    reference: 'studentlistgrid',
    //selType: 'rowmodel',
    id: 'studentGrid',

    viewConfig:
    {
        stripeRows: true
    },
    // selModel: {
    //     mode: 'SINGLE'
    // },
    listeners: {
        selectionchange: 'onSelectionChange',
        edit: 'onStudentEdit'
    },
    buttons: [
        {
            text:'Add New Student',
            handler:function()
            {
                pop=Ext.create('School.view.student.StudentGridForm');
                pop.show();
                console.log("are we getting here")
            }
        },
        {
            text: 'Select All Students',
            handler: function () {
                Ext.getCmp('studentGrid').getSelectionModel().selectAll();
            }
        },
        {
            text: 'Deselect',
            handler: function () {
                Ext.getCmp('studentGrid').getSelectionModel().deselectAll();
            }
        },
        {
            text: 'Get Selected Students Data',
            handler: function () {
                var data = Ext.getCmp('studentGrid').getSelectionModel().getSelection();
                console.warn("data", data)
            }
        },
    ],

    initComponent: function () {
        Ext.apply(this,
            {
                plugins: [Ext.create('Ext.grid.plugin.RowEditing',
                    {
                        clicksToEdit: 2
                    })],

                bbar: {
                    xtype: 'pagingtoolbar',
                    displayInfo: true,
                },

                columns: [{
                    text: "ID",
                    dataIndex: 'id',
                    hidden: false,
                    width: 35,
                    // filter:{
                    //     type:'number',
                    // }
                    filter: 'number'

                },
                {
                    text: "First Name",
                    flex: 1,
                    dataIndex: 'first_name',
                    editor:
                    {
                        // defaults to textfield if no xtype is supplied
                        allowBlank: false
                    },
                    filter: {
                        type: 'string',
                    }
                },
                {
                    text: "Middle Name",
                    flex: 1,
                    dataIndex: 'middle_name',
                    editor:
                    {
                        allowBlank: true
                    }
                },
                {
                    text: "Last Name",
                    flex: 1,
                    dataIndex: 'last_name',
                    editor:
                    {
                        allowBlank: true
                    }
                },
                {
                    xtype: 'datecolumn',
                    header: "Birth Date",
                    width: 135,
                    dataIndex: 'dob',
                    editor:
                    {
                        xtype: 'datefield',
                        allowBlank: true
                    },
                    renderer: Ext.util.Format.dateRenderer('d/m/Y')
                },
                {
                    text: "City",
                    flex: 1,
                    dataIndex: 'city',
                    editor:
                    {
                        allowBlank: true
                    }
                },
                {
                    text: "State",
                    flex: 1,
                    dataIndex: 'state',
                    editor:
                    {
                        allowBlank: true
                    }
                }],
                //plugins: 'gridfilters',
                selModel:
                {
                    injectCheckbox: 'first',
                    checkOnly: true,
                    model: 'SIMPLE',
                    selType: 'checkboxmodel'
                },
                tbar: [
                    // {
                    //     itemId: 'updateStudent',
                    //     text: 'Edit Student Details',
                    //     iconCls: 'fa fa-plus',
                    //     handler: 'onEditClick',
                    //     reference: 'btnUpdateStudent',
                    //     //disabled: true
                    // }, 
                    // {
                    //     text: 'Add Student',
                    //     iconCls: 'fa fa-plus',
                    //     handler: 'onAddClick'
                    // },
                    {
                        itemId: 'removeStudent',
                        text: 'Delete Student Details',
                        iconCls: 'fa fa-times',
                        reference: 'btnRemoveStudent',
                        handler: 'onRemoveClick',
                        disabled: true,
                        tooltip: 'Select a record first'
                    }],

            });

        this.callParent(arguments);
    }
});