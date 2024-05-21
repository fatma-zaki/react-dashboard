import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../componants/dataTable/DataTable'
import { userRows } from '../../data';
import './users.scss'
import { useState } from 'react';
import Add from '../../componants/add/Add';
const columns: GridColDef<(typeof userRows)[number]>[] = [
  {
     field: 'id', headerName: 'ID', width: 70
   },
  {
       field: 'img',
       headerName: 'Avatar',
       width: 90,
       renderCell: (params)=> {
            return <img src={params.row.img || './noavatar.png'} alt='avatar'/>
       },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 100,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    type: 'string',
    width: 160,
    editable: true,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 75,
    type: "boolean",
  },
];
const Users = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='users'>
      <div className="info">
        <h2>users</h2>
        <button onClick={()=>setOpen(true)}>add new user</button>
      </div>
      <DataTable slug='users' columns={columns} rows={userRows} />
      {open && < Add slug='user' columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Users