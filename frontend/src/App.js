import './App.css';

import { useEffect, useState } from 'react';

// import axios
import axios from 'axios';
import logo from './logo.svg';

function App() {
   const [response, setResponse] = useState([]);
   
   // axios get graphql query
   
   const getData = async () => {
      const result = await axios.get('http://localhost:3000/graphql', {
         params: {
            query: `
               query test2 {
                  getAllUsers{
                     id
                     firstName
                  }
               }
            `
         }
      });
      setResponse(result.data.data.getAllUsers);
   }


   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
         
            
            <button onClick={getData}>Get Data </button>
         </header>
         {response.map(user => (
            <User key={user.id} user={user} />
         ))}
      </div>
   );
}

export default App;

function User({ user }) {
   return (
      <div
         style={{
            border: '1px solid #eee',
            margin: '1px 20px',
         }}
      >
         {user.firstName}
         
      </div>
   );
}