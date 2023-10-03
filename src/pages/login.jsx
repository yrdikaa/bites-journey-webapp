// pages/index.js

import Main from '../components/main';
import { AuthProvider } from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';

const Login = () => {
  // Data artikel Anda bisa dimuat di sini
  
  return (
    <div>
      <AuthProvider>
      <Navbar />
      <div className="container">
      </div>
      </AuthProvider>
    </div>
  );
};

export default Login;
