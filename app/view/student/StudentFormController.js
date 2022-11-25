Ext.define('School.view.student.StudentFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.student-form',

    onCreateClick: function (cmp, record) {
        var studentForm = cmp.up('form').getForm();
        if (!studentForm.isDirty()) {
            Ext.Msg.alert('Status', 'No details inserted');
            return;
        }
        else if (!studentForm.isValid()) {
            Ext.Msg.alert('Status', 'Please fill in all the detail.');
            return;
        }
        // Submit the Ajax request and handle the response
        studentForm.submit({
            url: 'http://localhost:8080/School/students/saveStudent',
            waitMsg: 'Saving..',
            headers:
            {
                'Content-Type': 'application/json'
            },
            clientValidation: true,
            submitEmptyText: true,
            success: function (form, action) {

                var student = Ext.create('School.model.Student');
                var resp = Ext.decode(action.response.responseText);

                if (resp.data[0]) {
                    // addstudent returns student model with Id so we can re-load model into form so form will have isDirty false
                    student.set(resp.data[0]);
                    studentForm.loadRecord(student);
                }

                Ext.Msg.alert('Congratulations ', 'Succesfully Added New Student to The School');

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
    // moveToGrid: function()
    onReadClick: function (sender, record) {
        var studentForm = this.getView().getForm();

        //result should contain success=true and data property otherwise it will go to failure even if there is no failure
        studentForm.load({
            waitMsg: 'Loading...',
            method: 'GET',
            params:
            {
                id: 1
            },
            success: function (form, action) {
                try {
                    var resp = Ext.decode(action.response.responseText);

                    if (resp.data.length > 0) {
                        // addstudent returns student model with Id so we can re-load model into form so form will have isDirty false
                        var student = Ext.create('School.model.Student');
                        student.set(resp.data[0]);
                        studentForm.loadRecord(student);
                    }
                }
                catch (ex) {
                    Ext.Msg.alert('Status', 'Exception: ' + ex.Message);

                }
            },
            failure: function (form, action) {
                Ext.Msg.alert("Load failed", action.result.errorMessage);
            }
        });
    },
    

    
    onClearClick: function (sender, record) {
        this.getView().clearForm();
    },
    

});