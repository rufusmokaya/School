<!DOCTYPE HTML>
<html manifest="">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">

    <title>School</title>


    <script type="text/javascript">
        var BASE_URL = <?php echo json_encode(url('/')); ?>;
        var Ext = Ext || {}; // Ext namespace won't be defined yet...

        // This function is called by the Microloader after it has performed basic
        // device detection. The results are provided in the "tags" object. You can
        // use these tags here or even add custom tags. These can be used by platform
        // filters in your manifest or by platformConfig expressions in your app.
        //
        Ext.beforeLoad = function (tags) {
            var s = location.search,  // the query string (ex "?foo=1&bar")
                profile;

            // For testing look for "?classic" or "?modern" in the URL to override
            // device detection default.
            //
            if (s.match(/\bclassic\b/)) {
                profile = 'classic';
            }
            else if (s.match(/\bmodern\b/)) {
                profile = 'modern';
            }
            else {
                profile = tags.desktop ? 'classic' : 'modern';
                //profile = tags.phone ? 'modern' : 'classic';
            }

            Ext.manifest = profile; // this name must match a build profile name

            // This function is called once the manifest is available but before
            // any data is pulled from it.
            //
            //return function (manifest) {
                // peek at / modify the manifest object
            //};
        };
    </script>

    <!-- The line below must be kept intact for Sencha Cmd to build your application -->
    <script id="microloader" data-app="cf5a9567-52cc-4b0d-8ff6-b554179e1b0d" type="text/javascript" src="bootstrap.js"></script>

</head>
<body>
    @foreach($students as $student)
    <div>
	{{$student['id'] }} - {{$student['first_name'] }} - {{$student['middle_name'] }} - {{$student['last_name'] }} - {{$student['dob'] }} - {{$student['city'] }} - {{$student['state'] }}
    </div>
    @endforeach
</body>
</html>