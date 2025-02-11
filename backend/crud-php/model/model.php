<?php

class Database
{
    private $pdo;
    public function __construct()
    {
        $host = "localhost";
        $db_name = "crud_react_php";
        $user = "root"; // Usuário padrão do XAMPP
        $pass = ""; // Senha padrão do XAMPP (vazia)

        // Conectar ao banco de dados
        try {
            $this->pdo = new PDO(
                "mysql:host=$host;dbname=$db_name;charset=utf8",
                $user,
                $pass
            );
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Erro na conexão: " . $e->getMessage());
        }
    }

    public function createUser($name, $email)
    {
        try {
            $sql = "INSERT INTO users (name, email) VALUES (:name, :email)";
            $stm = $this->pdo->prepare($sql);
            $stm->bindParam(':name', $name);
            $stm->bindParam(':email', $email);
            $stm->execute();
        } catch (PDOException $e) {
            die("Erro ao inserir usuário: " . $e->getMessage());
        }
    }


    public function readuser($a)
    {
        try {
            $sql = "SELECT * FROM users"; // Certifique-se de que a tabela esteja correta
            $stm = $this->pdo->prepare($sql);
            $stm->execute();
            $resp = $stm->fetchAll(PDO::FETCH_ASSOC); // Ajuste aqui para usar FETCH_ASSOC
            return $resp;
        } catch (\Exception $e) {
            die($e->getMessage());
        }
    }

    public function updateUser($id, $name, $email)
    {
        try {
            $sql = "UPDATE users SET name = :name, email = :email WHERE id = :id";
            $stm = $this->pdo->prepare($sql);
            $stm->bindParam(':id', $id);
            $stm->bindParam(':name', $name);
            $stm->bindParam(':email', $email);
            $stm->execute();
        } catch (PDOException $e) {
            die("Erro ao atualizar usuário: " . $e->getMessage());
        }
    }


    public function deleteUser($id)
    {
        try {
            $sql = "DELETE FROM users WHERE id = :id";
            $stm = $this->pdo->prepare($sql);
            $stm->bindParam(':id', $id);
            $stm->execute();
        } catch (PDOException $e) {
            die("Erro ao excluir usuário: " . $e->getMessage());
        }
    }
}
