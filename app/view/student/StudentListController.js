Ext.define('School.view.student.StudentListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.student-list',

    // onAddClick: function (button, record) {
    //     var grid = button.up('studentList');
    //     var studentStore = grid.getStore();

    //     var studentModel = Ext.create('School.model.Student');
    //     studentModel.set("Id", 0);
    //     studentModel.set("first_name");
    //     studentModel.set("middle_name");
    //     studentModel.set("last_name",);
    //     studentModel.set("dob",);
    //     studentModel.set("city",);
    //     studentModel.set("state",);
    //     studentStore.insert(0, studentModel);
    //     //var studentGrid = this.getView();
    //     grid.editingPlugin.startEdit(studentModel, 1);

    // },

    onEditClick: function (button, record) {
        var grid = button.up('studentList');
        var studentStore = grid.getStore();

        var studentModel = Ext.create('School.model.Student');
        studentModel.set("Id", 0);
        studentModel.set("first_name");
        studentModel.set("middle_name");
        studentModel.set("last_name",);
        studentModel.set("dob",);
        studentModel.set("city",);
        studentModel.set("state",);
        studentStore.insert(0, studentModel);
        //var studentGrid = this.getView();
        grid.editingPlugin.startEdit(studentModel, 1);

    },

    onLoadClick: function (sender, record) {
        var studentStore = this.getView().getStore();
        studentStore.load();
    },

    

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveStudent');
        if (record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    },
    onStudentSelectionChange: function (sender, record, isSelected) {
        var updateBtn = this.lookupReference('btnUpdateStudent');
        if (record.length)
            updateBtn.setDisabled(false);
        else
            updateBtn.setDisabled(true);
    },
    onUpdateClick: function (sender, record) {
        var studentForm = this.getView().getForm();

        if (!studentForm.isDirty()) {
            Ext.Msg.alert('Status', 'No pending changes to save.');
            return;
        }
        else if (!studentForm.isValid()) {
            Ext.Msg.alert('Status', 'Invalid data.');
            return;
        }

        studentForm.submit({
            url: 'http://localhost:8080/School/students/saveStudent',
            waitMsg: 'Updating..',
            method: 'PUT',
            headers:
            {
                'Content-Type': 'application/json'
            },
            clientValidation: true,
            success: function (form, action) {
                try {
                    var student = Ext.create('School.model.Student');
                    var resp = Ext.decode(action.response.responseText);

                    if (resp.data.length > 0) {
                        // addstudent returns student model with Id so we can re-load model into form so form will have isDirty false
                        student.set(resp.data[0]);
                        studentForm.loadRecord(student);
                    }

                    Ext.Msg.alert('Status', 'Saved successfully.');
                }
                catch (ex) {
                    Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

                }
            },
            failure: function (form, action) {
                if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                    Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                }
                if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                    Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                }
                if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                    Ext.Msg.alert('SERVER_INVALID', action.result.message);
                }
            }
        });
    },

    onRemoveClick: function (sender, record) {
        var studentGrid = this.getView();
        var studentStore = studentGrid.getStore();
        var selectedRows = studentGrid.getSelectionModel().getSelection()[0];
        studentStore.remove(selectedRows);

        //var row = studentGrid.store.indexOf(selectedRows)

        console.log(selectedRows);
        //studentStore.
    },
    
    onDeleteClick: function (sender, record) {
        var me = this,
            studentForm = me.getView();

        if (!studentGrid.getValues(false, false, false, true).Id) {
            Ext.Msg.alert('Status', 'Invalid or No data to delete.');
            return;
        }

        var student = Ext.create('School.model.Student'), data;

        student.set(studentGrid.getValues());
        data = student.getData();

        Ext.Msg.show({
            title: 'Delete',
            msg: 'Do you want to delete this record? ',
            width: 300,
            closable: false,
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (buttonValue, inputText, showConfig) {
                if (buttonValue === 'yes') {

                    studentForm.submit({
                        url: 'http://localhost:8080/School/students/saveStudent',
                        method: 'DELETE',
                        clientValidation: true,
                        waitMsg: 'Deleting..',
                        headers:
                        {
                            'Content-Type': 'application/json'
                        },

                        success: function (form, action) {
                            try {
                                var resp = Ext.decode(action.response.responseText);
                                studentForm.clearForm();

                                Ext.Msg.alert('Success', resp.message);
                            }
                            catch (ex) {
                                Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

                            }
                        },
                        failure: function (form, action) {
                            if (action.failureType === Ext.form.action.Action.CLIENT_INVALID) {
                                Ext.Msg.alert('CLIENT_INVALID', 'Something has been missed. Please check and try again.');
                            }
                            if (action.failureType === Ext.form.action.Action.CONNECT_FAILURE) {
                                Ext.Msg.alert('CONNECT_FAILURE', 'Status: ' + action.response.status + ': ' + action.response.statusText);
                            }
                            if (action.failureType === Ext.form.action.Action.SERVER_INVALID) {
                                Ext.Msg.alert('SERVER_INVALID', action.result.message);
                            }
                        }
                    });
                }
            }

        });
    },
});