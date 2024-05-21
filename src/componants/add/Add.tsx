import { GridColDef } from '@mui/x-data-grid';
import './add.scss'


type props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Add = (props : props ) => {
const handelSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
}
  return (
    <div className='add'>
      <div className="modal">
        <span className='close' onClick={()=>props.setOpen(false)}>x</span>
        <h2>Add New {props.slug}</h2>
        <form onSubmit={handelSubmit}>
          {
          props.columns.filter((item)=> item.field !== 'id' && item.field !== 'img')
          .map((col)=> (
            <div className="item">
              <label > {col.headerName} </label>
              <input type={col.type} placeholder={col.field}/>
            </div>
          ))
          }
              <button>send</button>

        </form>
      </div>
    </div>
  )
}

export default Add