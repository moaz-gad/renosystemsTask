export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.name}</div>
    },
  },
  {
    field: "username",
    headerName: "User Name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email Address",
    width: 230,
  },

  {
    field: "group",
    headerName: "Group",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    },
  },
]
