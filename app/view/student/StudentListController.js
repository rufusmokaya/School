Ext.define('School.view.student.StudentListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.student-list',

    onAddClick: function (button, record) {
        var grid = button.up('studentList');
        var studentStore = grid.getStore();

        //adding dummy student
        var studentModel = Ext.create('School.model.Student');
        studentModel.set("Id", 0);
        studentModel.set("first_name", "First Name");
        studentModel.set("middle_name", "Middle Name");
        studentModel.set("last_name", "Last Name");
        studentModel.set("dob", "Date Of Birth");
        studentModel.set("city", "City");
        studentModel.set("state", "State");
        studentStore.insert(0, studentModel);
        //var studentGrid = this.getView();
        grid.editingPlugin.startEdit(studentModel, 1);
       
    },

    onLoadClick: function (sender, record) {
        var studentStore = this.getView().getStore();
        studentStore.load();
    },

    onRemoveClick: function (sender, record) {
        var studentGrid = this.getView();
        var studentStore = studentGrid.getStore();

        //delete selected rows if selModel is checkboxmodel
        var selectedRows = studentGrid.getSelectionModel().getSelection();
        studentStore.remove(selectedRows);
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveStudent');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});