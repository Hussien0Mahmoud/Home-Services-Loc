
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/AboutUs/AboutUs";
// import Mohamed from "./Components/Mohamed";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login";
import ServicesInfo from "./Pages/ServicesInfo/ServicesInfo";
import Registration from "./Pages/Registration/Registration";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import DashboardLayout from "./dashboard/layout/DashboardLayout";
import Users from "./dashboard/pages/Users";
import Workers from "./dashboard/pages/Workers";
import DashboardServices from "./dashboard/pages/Services";
import Orders from "./dashboard/pages/Orders";

function App() {
  return (
    <Routes>
      {/* Dashboard Routes - No Header/Footer */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="users" element={<Users />} />
        <Route path="workers" element={<Workers />} />
        <Route path="services" element={<DashboardServices />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      
      {/* Main Site Routes - With Header/Footer */}
      <Route
        path="/*"
        element={
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/serviceInfo/:id" element={<ServicesInfo />} />
              <Route path="/serviceInfo" element={<ServicesInfo />} />
              <Route path="/galleryPage" element={<GalleryPage />} />
              {/* <Route path="/services/:id" Component={Mohamed}/> */}
            </Routes>
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;