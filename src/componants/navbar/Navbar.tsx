import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='logo'>
     <img src='logo.svg' />
     <span>FatmaAdmin</span>
     </div>
     <div className='icons'>
          <img src="search.svg" alt="" />
          <img src="app.svg" alt="" />
          <img src="expand.svg" alt="" />
          <img src="" alt="" />
          <div className="notifications">
               <img src="notifications.svg" alt="" />
               <span>1</span>
          </div>
          <div className="user">
               <img src="profile.webp" alt="" />
               <span>Fatma</span>
          </div>
          <img src="setting.svg" alt="" />

     </div>
    </div>
  )
}

export default Navbar