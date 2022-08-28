import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid"
import AddIcon from "@mui/icons-material/Add"
import { userColumns } from "../../datatablesource"
import { Link,useNavigate } from "react-router-dom"
import useFetch from "./useFetch"

const Datatable = () => {
  const { data: users} = useFetch("http://localhost:8000/users");
  
  
  const navigate = useNavigate()
  const handleDelete = (id) => {
    fetch("http://localhost:8000/users/" + id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload(false);
      navigate("/users")
    })
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}>
              Delete
            </button>
          </div>
        )
      },
    },
  ]

  return (
    <div className="datatable">
      <div className="datatableTitle">
        User Management
        <Link to="/users/new" className="link">
          <AddIcon /> Add New
        </Link>
      </div>
      {users && (
        <DataGrid
          className="datagrid"
          rows={users}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      )}
    </div>
  )
}

export default Datatable
