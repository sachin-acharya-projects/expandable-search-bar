<?php
    require './database.php';
    if (isset($_GET['name'])) {
        $name = $_GET['name'];
        $query = "SELECT * FROM `mytable` WHERE fname LIKE '%$name%' OR lname LIKE '%$name%' LIMIT 0, 5";
        $res = mysqli_query($connection, $query);
        $response = mysqli_fetch_all($res);
        header('Content-type: application/json');
        echo json_encode($response);
    }
?>