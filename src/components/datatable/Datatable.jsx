import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid"
import AddIcon from "@mui/icons-material/Add"
import SearchIcon from "@mui/icons-material/Search"
import { userColumns } from "../../datatablesource"
import { Link,useNavigate } from "react-router-dom"
import useFetch from "./useFetch"
import { useState } from "react"

const Datatable = () => {
  const { data: users} = useFetch("http://localhost:8000/users");
  const [searchTerm, setSearchTerm] = useState("")
  
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
  
  function search(rows) {
    return rows.filter((row) => row.name.toLowerCase().indexOf(searchTerm) > -1)
  }

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <div className="userMangement">
          User Management
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
          />
        </div>
        <Link to="/users/new" className="link">
          <AddIcon /> Add New
        </Link>
      </div>
      {users && (
        <DataGrid
          className="datagrid"
          rows={search(users)}
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
