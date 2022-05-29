import './App.css';
import Navbar from "./Pages/Shared/Navbar";
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

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="tools" element={<Tools></Tools>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>

        <Route path="/tools/:toolsId" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>

        }></Route>
<Route path="dashboard" element={<Dashboard></Dashboard>}>
          {/* <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addreviews" element={<AddReviews></AddReviews>}></Route> */}
        </Route>
        <Route
              path="add-review"
              element={
                <AdminRestriction>
                  <AddReview />
                </AdminRestriction>
              }
            />
    </Routes>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
