<?php
    require './database.php';
    if (isset($_GET['name'])) {
        $name = $_GET['name'];
        $query = "SELECT * FROM `mytable` WHERE fname LIKE '%$name%' OR lname LIKE '%$name%' OR CONCAT(fname, ' ', lname) LIKE '%$name%' OR CONCAT(lname, ', ', fname) LIKE '%$name%' ORDER BY `fname` ASC, `lname` ASC";
        $res = mysqli_query($connection, $query);
        $response = mysqli_fetch_all($res);
        header('Content-type: application/json');
        echo json_encode($response);
    }
?>