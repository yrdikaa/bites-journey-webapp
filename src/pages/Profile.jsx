import ProfileMenu from '@/components/ProfilMenu/ProfileMenu';
import {AuthProvider} from '../../utils/AuthContext';
import Navbar from '@/components/Navbar/Navbar';

const Profile= () => {

    return (
        <div>
            <AuthProvider>
                <div className='bg-white h-screen'>
                    <Navbar/>
                    <ProfileMenu/>
                </div>
            </AuthProvider>
        </div>
    );
};

export default Profile;
