import { useState } from 'react'
import './products.scss'
import DataTable from '../../componants/dataTable/DataTable'
import Add from '../../componants/add/Add'
import { products } from '../../data';
import { GridColDef } from '@mui/x-data-grid';



const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Image",
    width: 75,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 200,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 100,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 100,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];
const Products = () => {
  const [open, setOpen] = useState(false)

  return (

      <div className='product'>
        <div className="info">
          <h2>Products</h2>
          <button onClick={()=>setOpen(true)}>add new product</button>
        </div>
        <DataTable slug='products' columns={columns} rows={products} />
        {open && < Add slug='product' columns={columns} setOpen={setOpen} />}
      </div>
    )
  
}

export default Products