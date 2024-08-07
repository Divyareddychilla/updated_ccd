import { gql, useLazyQuery} from "@apollo/client";
import {GridColDef} from "@mui/x-data-grid";

interface UserProps {
  columns?: any;
  loading: boolean;
  error: any;
  refetch: (values: any) => any;
  data: any;
  getRowId: (row: any) => any;
}

const columns: GridColDef[] = [
  { field: "user_id", headerName: "User ID", width: 90 },
  { field: "full_name", headerName: "full_name", width: 90 },
  {
    field: "user_name",
    headerName: "user_name",
    width: 150,
  },
  {
    field: "email",
    headerName: "email",
    width: 150,
  },
  {
    field: "contact_no",
    headerName: "contact_no",
    width: 110,
  },
  {
    field: "employee_id",
    headerName: "employee_id",
    width: 110,
  },
  {
    field: "department",
    headerName: "department",
    width: 110,
  },
  {
    field: "designation",
    headerName: "designation",
    width: 110,
  },
  {
    field: "profile_picture",
    headerName: "profile_picture",
    width: 110,
  },
  {
    field: "account_status",
    headerName: "account_status",
    width: 110,
  },
  {
    field: "created_by",
    headerName: "created_by",
    width: 110,
  },
  {
    field: "created_at",
    headerName: "created_at",
    width: 110,
  },
  {
    field: "last_logged_in",
    headerName: "last_logged_in",
    width: 110,
  },
] ;
function useUserContext(): UserProps {
  const USER_PAGINATION = gql`
  query GetUserPagination($page: Float!, $limit: Float!, $sort_by: String, $order: String) {
    getUserPagination(
      page: $page,
      limit: $limit,
      sort_by: $sort_by,
      order: $order
    ) {
      totalPages
      currentPage
      totalRecords
      currentServingRecords
      actualServingRecords
      isNextPageExist
      sort_by
      order
      data {
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
  }
`;
/*  variables: {
    page: 1,
    limit: 1,
    sort_by: "user_id",
    order: "ASC",
  },
  */
const [ getUsers , {loading, error, data} ] = useLazyQuery(USER_PAGINATION);

  return {
    columns,
    loading,
    error,
    refetch:getUsers,
    data:data?.getUserPagination,
    getRowId: (row: any) => row.user_id,
  };
}

export default useUserContext;
