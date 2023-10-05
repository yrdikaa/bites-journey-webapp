import React, { useEffect, useState } from 'react';

function UserCard({ user }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Username: {user.username}</p>
        <p className="card-text">Phone: {user.phone}</p>
        <p className="card-text">Address: {user.address}</p>
        <p className="card-text">Email: {user.email}</p>
      </div>
    </div>
  );
}
function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Definisikan token dan API URL Anda di sini
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWRfdXNlcnMiOjEsInVzZXJuYW1lIjoiYWRpMSIsImlhdCI6MTY5NjQxNzYzMywiZXhwIjoxNjk2NDIxMjMzfQ.NYEEN9TFJ10vmlVcIXlHF0sjENxi_GOimE3VWD6NS0Q"; // Ganti dengan token Anda
    const apiUrl = "http://localhost:9000/api/v1/user";

    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': token,
        'x-api-key': 'key',
        'Cookie': `accessToken=${token}`
      },
      redirect: 'follow'
    };

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(result => setUserData(result.data[0]))
      .catch(error => console.log('error', error));
  }, []);


  return (
    <div>
      <h1>User Data</h1>
      {userData ? (
        <UserCard user={userData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
