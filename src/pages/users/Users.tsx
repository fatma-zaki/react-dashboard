import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../componants/dataTable/DataTable'
import { userRows } from '../../data';
import './users.scss'
const columns: GridColDef<(typeof userRows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
       field: 'avatar',
       headerName: 'Avatar',
       width: 100,
       renderCell: (params)=> {
            return <img src={params.row.img || './noavatar.png'} alt='avatar'/>
       },
  }
  ,
  {
       field: 'status',
       headerName: 'Status',
       width: 100,
       type: 'boolean'
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 120,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 120,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''|| `${value}`}`,
  },
];
const Users = () => {
  return (
    <div className='users'>
      <div className="info">
        <h2>users</h2>
        <button>add new user</button>
      </div>
      <DataTable slug='users' columns={columns} rows={userRows} />
    </div>
  )
}

export default Users