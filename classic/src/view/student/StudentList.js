Ext.define('School.view.student.StudentList', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentList',

    title: 'Student List',
    store: {
        type: 'student'
    },

    controller: 'student-list',
    viewModel: { type: 'studentviewmodel' },
    reference:'studentlistgrid',
    selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    
    initComponent: function () {
        Ext.apply(this,
        {
            plugins: [Ext.create('Ext.grid.plugin.RowEditing',
            {
                clicksToEdit: 2
            })],

            columns: [{
                text: "Id",
                dataIndex: 'Id',
                hidden: false,
                width: 35
            },
            {
                text: "First Name",
                flex: 1,
                dataIndex: 'first_name',
                editor:
                {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
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
            tbar: [{
                text: 'Add Student',
                iconCls: 'fa fa-plus',
                handler: 'onAddClick'
            }, {
                itemId: 'removeStudent',
                text: 'Remove Student',
                iconCls: 'fa fa-times',
                reference: 'btnRemoveStudent',
                handler: 'onRemoveClick',
                //disabled: true
            }]
        });

        this.callParent(arguments);
    }
});