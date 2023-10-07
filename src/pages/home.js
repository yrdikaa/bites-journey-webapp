import LandingPage from '@/components/LandingPage/LandingPage';
import {AuthProvider} from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';

const Login = () => {

    return (
        <div>
            <AuthProvider>
                <Navbar/>
                <LandingPage/>
            </AuthProvider>
        </div>
    );
};

export default Login;
