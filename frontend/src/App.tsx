import 'App.css';

import { useEffect, useState } from 'react';

import React from "react";
import { TextField } from '@mui/material'
// import axios
import axios from 'axios';

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
                     lastName
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
         
            <CreateUser />
            <button onClick={getData}>Get Data </button>
         </header>
         {response.map((user: any) => (
            <User key={user.id} user={user} />
         ))}
      </div>
   );
}

export default App;

function User({ user } : { user: any }) {
   return (
      <div
         style={{
            border: '1px solid #eee',
            margin: '1px 20px',
         }}


      >
         <h3>{user.id}</h3>
         <h3>{user.firstName} {user.lastName}</h3>
      </div>
   );
}

function CreateUser() {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const createUser = async () => {
      const result = await axios.post('http://localhost:3000/graphql', {
         query: `
            mutation {
               createUser(firstName: "${firstName}", lastName: "${lastName}", email: "${email}", password: "${password}") {
                  id
                  firstName
                  lastName
               }
            }
         `
      });

      console.log(result);
   }


   return (
      <div
         style={{
            border: '1px solid #eee',
            margin: '1px 20px',
         }}
      >
         <TextField label="First Name" onChange={(e) => setFirstName(e.target.value)} />
         {/* <TextField label="Last Name"  /> */}
         <TextField label="Last Name" onChange={(e) => setLastName(e.target.value)} />
         <TextField label="Email" onChange={(e) => setEmail(e.target.value)} />
         <TextField label="Password" onChange={(e) => setPassword(e.target.value)} />
         <button onClick={createUser}>Create User</button>
      </div>
   );
}