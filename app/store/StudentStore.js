Ext.define('School.store.StudentStore',
{
    extend: 'Ext.data.Store',
    model: 'School.model.StudentModel',
    autoLoad: false,
    storeId: 'studentstore'
});