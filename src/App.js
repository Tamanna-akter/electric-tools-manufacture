import './App.css';
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from './Pages/Dashboard/Dashboard';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import AdminRestriction from './Pages/Authentication/AdminRestriction';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import Login from './Pages/Authentication/Login';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from "./Pages/Authentication/RequireAuth";
import { ToastContainer } from 'react-toastify';
import Purchase from './Pages/Home/Purchase';
import AddProduct from './Pages/Dashboard/AddProduct';
import Register from './Pages/Authentication/Register';
import AllUser from './Pages/Dashboard/AllUser';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';



function App() {
  return (
    <div className="App max-w-screen-xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/purchase/:purchaseId" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard/></RequireAuth>} >
          <Route index element={<MyProfile />}></Route>
          <Route path='updateProfile' element={<UpdateProfile />}></Route>
          <Route path='myorders' element={<AdminRestriction><MyOrders /></AdminRestriction>}></Route>
          <Route path='addreview' element={<AdminRestriction><AddReview/></AdminRestriction>}></Route>
          <Route path='allorders' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>}></Route>
          <Route path='allproducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>
          <Route path='alluser' element={<RequireAdmin><AllUser /></RequireAdmin>}></Route>
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}


export default App;
