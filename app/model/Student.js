Ext.define('School.model.Student', {
    extend: 'Ext.data.Model',
    idProperty:'id',

    // schema: {
    //     // namespace: 'School.model'
    // },
    fields: [
        { name: 'id', type: 'int', defaultValue: 0},
        { name: 'first_name', type: 'string' },
        { name: 'middle_name', type: 'string' }, 
        { name: 'last_name', type: 'string' },
        { name: 'dob', type: 'date' },
        { name: 'city', type: 'string' },
        { name: 'state', type: 'string' }
    ]

});

