<?php
    error_reporting(E_ALL);

    if (function_exists('date_default_timezone_set') && function_exists('date_default_timezone_get')) {
        date_default_timezone_set(@date_default_timezone_get());
    }

    //Require the initial bootstrap.php file
    require_once __DIR__ . "/../index.php";

    //Require the test bootstrap.php file
    require_once __DIR__ . '/WWW/TestCase.php';