
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { gql, useMutation} from '@apollo/client';
import { useDispatch } from "react-redux";  
import {actions as userAuthActions} from '../store/activeUserData/reducer'


function useLoginContext() {
const dispatch = useDispatch();
const navigate = useNavigate();

     const LOGIN_USER = gql`
            mutation Login($input: LoginUserInput!) {
                login(input: $input)
            }`;

    const [login, { loading, error:loginError }] = useMutation(LOGIN_USER);
/* useEffect(()=>{
      console.log(loginError?.cause,'@loginError')
    },[loginError]) */

   const handleSubmit= async (values:any)=>{
    const { data } = await login({ variables: { input: { user_name: values.user_name, password: values.password } } });
         if (data.login) {
             dispatch(userAuthActions.setToken(data.login));
             navigate('/pages/dashboard');
         }
   }

    const schemamodal: any = [
        {
          name: 'user_name',
          label: 'User Name',
          type: 'text',
          validation: Yup.string().min(3).max(10).required('Required'),
          initialValue: '',
          grid: { xs: 12},
          props: { className: 'input-firstname textfiledfor_name' },
        },
      
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          validation: Yup.string().min(4).max(10).required('Required'),
          initialValue: '',
          grid: { xs: 12 },
          props: { className: 'input-password textfiledfor_name' },
        },
        
        {
          name: 'Sign In',
          label: (loading)?'Signing In...':'Sign In',
          type: 'submit',
          grid: { xs: 12, sm: 12, md: 12, lg: 12 },
          props: {
            className: 'input-submit loginbutton_signin'
          },
        },
      ];


    return {
        loginError,
        schemamodal,
        handleSubmit
    };
}

export default useLoginContext;
