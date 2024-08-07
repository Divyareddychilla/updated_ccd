import DataGridDemo from "../../CCD/Table/Table";
import React from 'react';
import UserManage from './UserManage';
interface UserProps {
  columns?: any;
  loading: boolean;
  error: any;
  refetch: (values: any) => any;
  data:any
  getRowId: (row: any) => any;
}

const Users: React.FC<UserProps> = (
  {columns, loading, error, refetch, data, getRowId}: UserProps
) => {
  return (
   <>
    <UserManage />
   <DataGridDemo columns={columns} loading={loading} error={error} refetch={refetch} data={data} getRowId={getRowId}/>
   </>
  );
};

export default Users;
