<?php

require dirname(__DIR__) . "\src\controllers\LoginController\controller.php";
require dirname(__DIR__) . "\src\database\\users.php";
require dirname(__DIR__) . "\modules\header.php";


$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

$parts = explode("/", $path);

$login_controller = new LoginController($users_list);

if($parts[4] == "login") {                
    $login_controller->processRequest($_SERVER["REQUEST_METHOD"]);
} else {
    echo json_encode([
        "message" => "Welcome to api!"
    ]);
}

?>