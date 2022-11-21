var saveStudent_url = 'http://localhost:8080/School/students/saveStudent';
var getStudent_url = 'http://localhost:8080/School/students/getStudent';

Ext.define('School.store.Student', {
    
    extend: 'Ext.data.Store',

    requires: [
        'School.model.Student',
    ],

    
    alias: 'store.student',
    storeId: 'student',
    autoLoad: true,

    model: 'School.model.Student',

    proxy: {
        type: 'ajax',
        url: getStudent_url,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    
});


