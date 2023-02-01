<?php
    $host = "localhost"; // name of host for MySQl server
    $user = "root"; // Username of MySQL control panel
    $password = ""; // Password for the given username
    $database = "live-seach"; // Name of the targeted database
    $port = 3306; // Port on which MySQL is listening, default is always 3306

    $connection = mysqli_connect($host, $user, $password, $database, $port);
?>