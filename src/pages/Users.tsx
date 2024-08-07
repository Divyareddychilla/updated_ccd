import Users from '../components/users';
import useUserContext from '../context/Users';
const  UsersPage = () => {
    return <Users {...useUserContext()}/>;
}

export default UsersPage;
