import Form from '../../CCD/Form/Form';
import React,{useEffect, useState} from 'react';
import * as Yup from 'yup';
import { gql, useMutation} from '@apollo/client';
import { Box, Button, Modal } from '@mui/material';
import './usermanage.scss';
/*
 gql mutation

 mutation CreateUser {
    createUser(
        input: {
            full_name: "asdfasdf"
            user_name: "asdfasdf"
            password: "asdfasdf"
            email: "asdfasdf"
            contact_no: "asdfasdf"
            employee_id: "asdfasdf"
            department: "asdfasdf"
            designation: "asdfasdf"
            profile_picture: "asdfasdf"
            role: "asdfsdf"
        }
    ) {
        user_id
        full_name
        user_name
        email
        contact_no
        employee_id
        department
        designation
        profile_picture
        role
        account_status
        created_by
        created_at
        last_logged_in
    }
}
*/
const UserManage: React.FC = () => { 

    const [open, setOpen] = useState(false);
    const USER_MANAGE_CREATE = gql`
     mutation CreateUser($input:  CreateUserInputDto!) {
            createUser(
                input: $input
            ) {
                user_id
                full_name
                user_name
                email
                contact_no
                employee_id
                department
                designation
                profile_picture
                role
                account_status
                created_by
                created_at
                last_logged_in
            }
        }
    `;

    const [createUser, { data, loading, error }] = useMutation(USER_MANAGE_CREATE,{errorPolicy:'all'});

    const schema: any = [
        {
          name: 'full_name',
          label: 'Full Name',
          type: 'text',
          validation: Yup.string().min(3).max(100).required('Required'),
          initialValue: '',
          grid: { xs: 12, sm:12},
          props: { className: 'input-firstname' },
        },
      
        {
          name: 'user_name',
          label: 'User Name',
          type: 'text',
          validation: Yup.string().min(4).max(100).required('Required'),
          initialValue: '',
          grid: { xs: 12, sm:12 },
          props: { className: 'input-password' },
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            validation: Yup.string().min(4).max(100).required('Required'),
            initialValue: '',
            grid: { xs: 12, sm:12 },
            props: { className: 'input-password' },
          },
          {
            name: 'email',
            label: 'Email',
            type: 'email',
            validation: Yup.string().email().required('Required'),
            initialValue: '',
            grid: { xs: 12, sm:12 },
            props: { className: 'input-email' },
          },
          {
            name: 'contact_no',
            label: 'Contact No',
            type: 'text',
            validation: Yup.string().min(10).max(20).required('Required'),
            initialValue: '',
            grid: { xs: 12, sm:12 },
            props: { className: 'input-contact_no' },
          },
          {
            name: 'employee_id',
            label: 'Employee Id',
            type: 'text',
            validation: Yup.string().required('Required'),
            initialValue: '',
            grid: { xs: 12, sm:12 },
            props: { className: 'input-employee_id' },
          },
          {
            name: 'department',
            label: 'Department',
            type: 'text',
            validation: Yup.string().required('Required'),
            initialValue: '',
            grid: { xs: 12, sm:12 },
            props: { className: 'input-department' },
          },
          {
            name: 'designation',
            label: 'designation',
            type: 'text',
            validation: Yup.string().required('Required'),
            initialValue: '',
            grid: { xs: 12, sm:12 },
            props: { className: 'input-designation' },
          },
          {
            name: 'profile_picture',
            label: 'profile_picture',
            type: 'text',
            validation: Yup.string().required('Required'),
            initialValue: '',
            grid: { xs: 12, sm:12 },
            props: { className: 'input-profile_picture' },
          },
          {
            name: 'role',
            label: 'role',
            type: 'text',
            validation: Yup.string().required('Required'),
            initialValue: '',
            grid: { xs: 12, sm:12 },
            props: { className: 'input-role' },
          },
        {
          name: 'Create User',
          label: (loading)?'Creating user...':'Create User',
          type: 'submit',
          grid: { xs: 12, sm:12},
          props: {
            color: 'primary',
            variant: 'contained',
            alignitems: 'center',
            className: 'input-submit',
            disabled: loading,
          },
        },
      ];
    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }
    ,[data]);
    useEffect(() => {
        if (error) {
            console.log(error.errors);
        }
    }
    ,[error]);
    const handleSubmit = async (values: any) => {
      try {  
             const response =await createUser({ variables: { input: values } });
             console.log(response,'@response');
      }
      catch(err) {
          console.log(err);
      }
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
     <>
     <Button
      variant="contained"
      color="primary"
      sx={{ marginTop: 2 }}
      onClick={handleOpen}
    >
      Add user
    </Button>
     <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box className="create-form">
          <Form schema={schema} onSubmit={handleSubmit} autoSubmitOnChange={false}/>
        </Box>
      </Modal>
     </>
    );
};
export default UserManage;