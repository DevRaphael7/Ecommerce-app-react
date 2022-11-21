<?php

require dirname(__DIR__) . "..\\database\\users.php";

class TokenService {

    public function validatedToken(array $body) {

        foreach ($users as $key => $val) {
            if ($key != $body["login"] || $val != $body["senha"]) {
                return false;
            }
        }
        
        $datetime = new DateTime();
        $current_time = $datetime->format('m/d/Y g:i A');

        //Data
        $date_request = explode("/", explode(" ", $current_time)[0]);
        //Time
        $time_request = explode(" ", $current_time)[1];

        if((int) explode("/", $body["DATE"])[2] != (int) $date_request[2]) {
            return false;
        } elseif ((int) explode("/", $body["DATE"])[1] > (int) $date_request[1]) {
            return false;
        } elseif ((int) explode("/", $body["DATE"])[0] > (int) $date_request[0]) {
            return false;
        }

        return true;
    }

    public function generateToken(array $body) {
        $datetime = new DateTime();

        $current_time = $datetime->format('m/d/Y g:i A');

        return base64_encode(json_encode([
            "login" => $body["login"],
            "senha" => $body["senha"],
            "DATE" => explode(" ", $current_time)[0]
        ]));
    }
}
?>