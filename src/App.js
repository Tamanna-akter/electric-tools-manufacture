import './App.css';
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Tools from './Pages/Home/Tools';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import RequireAuth from "./Pages/Authentication/RequireAuth";
import { ToastContainer } from 'react-toastify';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview';
import AdminRestriction from './Pages/Authentication/AdminRestriction';
import NotFound from './Pages/NotFound/NotFound';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyProfile from './Pages/Dashboard/MyProfile';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import ManageAllorder from './Pages/Dashboard/ManageAllorder';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/tools" element={<Tools></Tools>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        <Route path="/purchase/:toolsId" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>
        </Route>

        <Route path="/dashboard"  element={<RequireAuth><Dashboard></Dashboard>
        </RequireAuth>}>
        </Route>

        <Route index element={<MyProfile></MyProfile>}></Route>
        <Route
              path="add-review"
              element={
                <AdminRestriction>
                  <AddReview />
                </AdminRestriction>
              }
            />

           <Route
              path="my-order"
              element={
                <AdminRestriction>
                  <MyOrder />
                </AdminRestriction>
              }
            />

           <Route
              path="manage-all-order"
              element={
                <RequireAdmin>
                  <ManageAllorder/>
                </RequireAdmin>
              }/>
              <Route
              path="make-admin"
              element={
                <RequireAdmin>
                  <MakeAdmin/>
                </RequireAdmin>
              }/>
              <Route
               path="manage-product"
               element={
                 <RequireAdmin>
                   <ManageProduct/>
                 </RequireAdmin>
               }/>
    </Routes>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
