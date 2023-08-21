import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';


const AdminAuthentification: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Création de l'objet 'body' avec les informations d'identification de l'utilisateur.
      const body_token = {
        username: 'user',
        password: 'user'
      }

      // Déclaration de la variable 'accessToken'.
      let accessToken;

      // Effectue une requête POST pour se connecter et obtenir un jeton d'accès.
      await axios.post('http://localhost:3000/api/login', body_token)
        .then(res => accessToken = res.data.token);

      // Création des en-têtes de la requête GET avec le jeton d'accès obtenu.
      const headers = {
        authorization: `${accessToken}`,
      };
      
      //console.log(headers);
    

      let crypted_password = await bcrypt.hash(password, 9);

      //console.log(crypted_password); 

      const body = {login: username,
        password: password
      }

      let idUser;
 
      await axios.post('http://localhost:3000/api/admin/login', body, {headers})
			.then(res => idUser = res.data.id);
      
      console.log(idUser);

     

      //const { token } = response.data.token;

      console.log('Id user:', idUser); // Attention le stocker pour les prochaines requetes 

      // Redirection à mettre en place 
      
    } catch (error) {
      console.log(error);
      setErrorMessage('Identifiants incorrects');
    }
  };

  return (
    <div>
      <h1>Page d'administration</h1>
      <form>
        <div>
          <label>Nom d'utilisateur:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin}>Se connecter</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AdminAuthentification;
