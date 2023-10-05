// pages/index.js

import { AuthProvider } from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';
import Logincomponent from '@/components/Login/Logincomponent';

const Login = () => {
  // Data artikel Anda bisa dimuat di sini

  return (
    <div>
    <AuthProvider>
        <Navbar />
       <Logincomponent />
       </AuthProvider>
    </div>
  );
};

export default Login;
