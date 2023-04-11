<?php

$body = file_get_contents('php://input');
$token = 'your-chatbox-token';


if (isset($_SERVER['X_SIGNATURE']) && $_SERVER['X_SIGNATURE'] != '') {
  $signed = hash_hmac('sha256', $body, $token);
  $signature = $_SERVER['X_SIGNATURE'];

  if (! hash_equals($signed, $signature)) {
    echo 'Invalid signature';
  }
}

var_dump(json_decode($body));
