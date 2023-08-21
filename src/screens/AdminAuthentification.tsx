import React, { useState } from 'react';
import axios from 'axios';

const AdminAuthentification: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {

      /*
      console.log(username);
      console.log(password);
      */

      
      const body = {
        username: username,
        password: password
      }

      console.log(body);

      //const response = await axios.post('http://localhost:3000/api/login',body);
      let accessToken;

      /* Ce nest pas la bonne fonction 
      await axios.post('http://localhost:3000/api/login', body)
			.then(res => accessToken = res.data.token);
      */
      console.log(accessToken);

      //const { token } = response.data.token;

      console.log('Token:', accessToken); // Attention le stocker pour les prochaines requetes 

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
