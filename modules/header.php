<?php

require dirname(__DIR__) . "\\vendor\autoload.php";

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

header('Content-Type: application/json; charset=utf-8');

ini_set("display_errors", "On");

?>