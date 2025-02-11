<?php
header('Access-Control-Allow-Origin: *'); // Permite qualquer origem
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Métodos permitidos
header('Access-Control-Allow-Headers: Content-Type'); // Cabeçalhos permitidos

include($_SERVER['DOCUMENT_ROOT']. '/crud-php/model/model.php');

// Receber os dados do React (POST)
$data = json_decode(file_get_contents("php://input"));
$name = $data->name;
$email = $data->email;

// Criar instância da classe Database
$db = new Database();

// Chamar o método para criar o usuário
$response = $db->createUser($name, $email);

// Retornar a resposta em formato JSON
echo json_encode(["message" => $response]);
?>
