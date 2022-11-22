Ext.define('School.view.student.StudentViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.studentviewmodel',
    stores: {
        StudentListStore: {
            model: 'School.model.Student',
            autoLoad: true,
            autoSync: true,
            proxy:
            {
                type: 'rest',
                reader:
                {
                    rootProperty: 'data',
                    type: 'json'
                },
                url: 'http://localhost:8080/School/students/getStudent',
                writer: {
                    type: 'json',
                    dateFormat: 'd/m/Y',
                    writeAllFields: true
                }
            }
        },
        StudentListPagingStore: {
            model: 'School.model.Student',
            autoLoad: true,
            pageSize: 5,
            proxy:
           {
               type: 'rest',
               reader:
               {
                   rootProperty: 'data',
                   type: 'json',
                   totalProperty: 'TotalCount'
               },
               url: 'http://localhost:8080/School/students/getStudent'
           }
        }

    }
});