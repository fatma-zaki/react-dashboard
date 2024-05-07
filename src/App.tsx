import './styles/global.scss'
import {
  RouterProvider,
  Outlet,
  createHashRouter
} from "react-router-dom";
import Navbar from "./componants/navbar/Navbar";
import Footer from "./componants/footer/Footer";
import Menu from "./componants/menu/Menu";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";

function App() {
  const Layout = ()=>{
    return (
      <div className="main">
        < Navbar />
        <div className="container">
          <div className="menuContainer">
            < Menu />
          </div>
          <div className="contentContainer">
            < Outlet />
          </div>
        </div>
        < Footer />
      </div>
    )
  }
  const router = createHashRouter([
   {
    path : '/',
    element : <Layout/>,
    children: [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/users',
        element : <Users/>
      },
      {
        path : '/products',
        element : <Products/>
      },
    ]
   }
     
  ]);
  return <RouterProvider router={router}/>
}

export default App
