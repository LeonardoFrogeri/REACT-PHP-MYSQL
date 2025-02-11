import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost/crud-php/controller/users/";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Carregar usuários
  useEffect(() => {
    axios.get(`${API_URL}read.php`)
      .then((response) => {
        setUsers(response.data);
        console.log(response.data); // Aqui você pode verificar novamente
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  // Criar ou Atualizar usuário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      axios.post(`${API_URL}update.php`, { id: editingId, name, email })
        .then(() => {
          // Atualizando o estado local dos usuários
          setUsers(users.map(u => (u.ID === editingId ? { ID: editingId, NAME: name, EMAIL: email } : u)));
          setEditingId(null);
          setName("");
          setEmail("");
        });
    } else {
      axios.post(`${API_URL}create.php`, { name, email })
        .then((response) => {
          setUsers([...users, { ID: response.data.ID, NAME: name, EMAIL: email }]); // Assume que o ID é retornado ao criar
          setName("");
          setEmail("");
        });
    }
  };

  // Editar usuário
  const handleEdit = (user) => {
    setEditingId(user.ID); // Usando o ID com letras maiúsculas
    setName(user.NAME);
    setEmail(user.EMAIL);
  };

  // Excluir usuário
  const handleDelete = (id) => {
    axios.post(`${API_URL}delete.php`, { id })
      .then(() => {
        setUsers(users.filter((user) => user.ID !== id)); // Usando o ID correto aqui também
      });
  };

  return (
    <div>
      <h2>CRUD React + PHP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{editingId ? "Atualizar" : "Adicionar"}</button>
      </form>

      <h3>Usuários</h3>
      <ul>
        {users.map((user) => (
          <li key={user.ID}>
            {user.NAME} - {user.EMAIL}
            <button onClick={() => handleEdit(user)}>Editar</button>
            <button onClick={() => handleDelete(user.ID)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
