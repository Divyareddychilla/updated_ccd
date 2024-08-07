import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef,useGridApiRef} from "@mui/x-data-grid";



export default function DataGridDemo({
  columns,
  loading,
  error,
  refetch,
  data,
  getRowId,
}: any) {
  const apiRef = useGridApiRef();
  const [rows, setRows] = React.useState<GridRowsProp>([]);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(20);
  const [totalRows, setTotalRows] = React.useState(0);
  React.useEffect(() => {
    refetch({variables:{ page: 1, limit: 20 }});
  }, []);

  React.useEffect(() => {
    if (!data) {
      setRows([]);
      return;
    }
    console.log(data);
    setRows(data.data as GridRowsProp);
    setPage(data.currentPage);
    setPageSize(data.actualServingRecords);
    setTotalRows(data.totalRecords);
  }, [data]);
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid 
        apiRef={apiRef}
        rows={rows} 
        columns={columns} 
        getRowId={getRowId} 
        initialState={{
          pagination: {
            paginationModel: {
                pageSize: data?.actualServingRecords || 20,
                page: data?.currentPage || page,
            },
          },
        }}
         density="standard"
         disableColumnMenu={false}
         disableColumnFilter={true}
         pageSizeOptions={[5,10,20,40,50,100]}
         checkboxSelection={false}
         disableRowSelectionOnClick={true}
         loading={loading}
         paginationMode="server"
         rowCount={totalRows}
         onPaginationModelChange={(e) => {
          refetch({variables:{page:e.page+1, limit: e.pageSize}});
          console.log('onPaginationModelChange', e);
        }}
        filterMode="server"
        onSortModelChange={(e) => {
          if(e.length){
          console.log('onFilterModelChange', e);
          console.log(e.length,'@e.length');
          console.log(e[0],'@e[0]');
          const fetchQuotes = {variables:{page:1, limit:pageSize, sort_by:e[0].field, order:e[0].sort?.toUpperCase()}};
          console.log(fetchQuotes,'@fetchQuotes');
          refetch(fetchQuotes);
          }
          else{
            refetch({variables:{page:1, limit:pageSize, sort_by:undefined, order:undefined}});
          }
          apiRef.current.setPage(0);
        }}
      />
    </div>
  );
}
