// utils/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Cek apakah pengguna sudah login saat aplikasi dimuat
  //   checkUserLoggedIn();
  // }, []);

  // // Fungsi untuk memeriksa apakah pengguna sudah login dengan JWT
  // const checkUserLoggedIn = async () => {
  //   try {
  //     const response = await axios.get('/api/check-auth'); // Ganti dengan endpoint yang sesuai
  //     const userData = response.data;

  //     if (userData) {
  //       setUser(userData);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }

  //   setLoading(false);
  // };

  // Fungsi untuk login
  const login = async (formData) => {
    try {
      const response = await axios.post('http://localhost:9000/api/v1/auth/login', formData); // Ganti dengan endpoint yang sesuai
      const userData = response.data;

      if (userData) {
        setUser(userData);
        console.log(userData);
        // Simpan token JWT di local storage jika Anda memerlukannya
        localStorage.setItem('token', userData.data.token);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Fungsi untuk logout
  const logout = () => {
    setUser(null);
    // Hapus token JWT dari local storage jika Anda menggunakannya
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
