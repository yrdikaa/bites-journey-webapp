import ProfileMenu from '@/components/ProfilMenu/ProfileMenu';
import {AuthProvider} from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';

const Login = () => {

    return (
        <div>
            <AuthProvider>
                <div className='h-screen'>
                    <Navbar/>
                    <ProfileMenu/>
                </div>
            </AuthProvider>
        </div>
    );
};

export default Login;
