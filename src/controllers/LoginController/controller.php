<?php

require dirname(__DIR__) . "..\..\\services\\token_service.php";

class LoginController {

    private array $users;
    private TokenService $tokenService;

    function __construct(array $users) {
        $this->users = $users;
        $this->tokenService = new TokenService();
    }

    public function processRequest(string $method) {
        switch ($method) {
            case "POST":

                if(!$_SERVER["HTTP_AUTHORIZATION"]) {
                    http_response_code(401);
                    echo json_encode([
                        "message" => "Nothing informed"
                    ]);
                    exit;
                }

                // Vai transformar o código de base64 em array associativo.                

                $body = json_decode(base64_decode(str_replace("Bearer", "", $_SERVER["HTTP_AUTHORIZATION"])), true);

                foreach ($this->users as $key => $val) {
                    if ($key == $body["login"] && $val == $body["senha"]) {
                        http_response_code(200);
                        echo json_encode([
                            "message" => "User logged",
                            "access_token" => $this->tokenService->generateToken($body)
                        ]);
                        exit;
                    }
                }

                http_response_code(401);
                echo json_encode([
                    "message" => "User not loggeed"
                ]);
                exit;
            break;
        }
    }
}

?>