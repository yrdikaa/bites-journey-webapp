import { AuthProvider } from '../../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';
import CreateArticleLayout from '@/components/CreateArticleForm/CreateArticleLayout';
import { checkPage } from '../../../utils/auth.utils';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        checkPage(router);
    }, [router]);

    return (
        <div>
            <AuthProvider>
                <Navbar/>
                <CreateArticleLayout />
            </AuthProvider>
        </div>
    );
};

export default Login;
