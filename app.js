/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'School.Application',

    name: 'School',

    requires: [
        // This will automatically load all classes in the School namespace
        // so that application classes do not need to require each other.
        'School.*'
    ],

    // The name of the initial view to create.
    mainView: 'School.view.main.Main'
});
