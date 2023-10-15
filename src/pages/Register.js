import {AuthProvider} from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';
import RegisterComponent from '@/components/Register/RegisterComponent';
import {checkTokenAndRedirect} from '../../utils/auth.utils';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        checkTokenAndRedirect(router);
    }, [router]);

    return (
        <div>
            <AuthProvider>
                <Navbar/>
               <RegisterComponent />
            </AuthProvider>
        </div>
    );
};

export default Login;
