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

    public function generateToken(string $token) {

        $datetime = new DateTime();

        $current_time = $datetime->format('m/d/Y g:i A');

        $hash_value = hash_hmac(
            "sha256", 
            $token,
            $_ENV["SECRET_KEY"],
            false
        );

        return base64_encode($hash_value);
    }
}
?>