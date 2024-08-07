import useLoginContext from '../context/Login';
import Login from '../components/Login/Login';

function LoginPage() {
    const loginContext = useLoginContext();

    return <Login {...loginContext} />;
}

export default LoginPage;
