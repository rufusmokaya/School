Ext.define('School.view.student.StudentListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.student-list',
 
    onStudentEdit: function (editor, e) {
        var studentGrid = e.grid;
        var studentStore = studentGrid.getStore();
        var record = e.record;
        Ext.Ajax.request({
            url: 'http://localhost:8080/School/students/updateStudent',
            method: 'PUT',
            params: {
                id: record.get('id'),
                first_name: record.get('first_name'),
                middle_name: record.get('middle_name'),
                last_name: record.get('last_name'),
                dob: record.get('dob'),
                city: record.get('city'),
                state: record.get('state'),
            },
       
            success: function(response, opts) {
                // var obj = Ext.decode(response.responseText);
                // console.dir(obj);
                studentStore.reload();
                //Ext.getStore('student').reload();
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },

    // onLoadClick: function (sender, record) {
    //     var studentStore = this.getView().getStore();
    //     studentStore.load();
    // },

    onRemoveClick: function () {
        var studentGrid = this.getView();
        var studentStore = studentGrid.getStore();
        var selectedRow = studentGrid.getSelectionModel().getSelection()[0];
        studentGrid.getSelectionModel().deselectAll();
        studentStore.remove(selectedRow);
        console.log(selectedRow);
        Ext.Ajax.request({
            url: 'http://localhost:8080/School/students/deleteStudent',
            method: 'DELETE',
            params: {
                id: selectedRow.get('id')
            },
       
            success: function(response, opts) {
                // var obj = Ext.decode(response.responseText);
                // console.dir(obj);
                studentStore.reload();
                //Ext.getStore('student').reload();
            },
       
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    },
    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveStudent');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});