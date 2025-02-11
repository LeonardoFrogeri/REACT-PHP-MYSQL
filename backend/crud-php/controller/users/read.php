<?php
header('Access-Control-Allow-Origin: *'); // Permite qualquer origem
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Métodos permitidos
header('Access-Control-Allow-Headers: Content-Type'); // Cabeçalhos permitidos

// Incluindo a classe Database (Model)
include($_SERVER['DOCUMENT_ROOT']. '/crud-php/model/model.php');

// Criando uma instância da classe Database
$model = new Database();

// Chamando o método readuser no Model
$read = $model->readuser($a);

// Retornando os dados em formato JSON
header('Content-Type: application/json'); // Definindo o tipo de conteúdo
echo json_encode($read); // Transformando o array PHP em JSON e retornando
?>
