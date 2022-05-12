import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddItem from "./pages/AddItem/AddItem";
import Blog from "./pages/Blog/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import ManageInventories from "./pages/ManageInventories/ManageInventories";
import MyItems from "./pages/MyItems/MyItems";
import NotFound from "./pages/NotFound/NotFound";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add-item"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageInventories"
          element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
