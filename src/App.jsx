
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/AboutUs/AboutUs";
// import Mohamed from "./Components/Mohamed";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login";
import ServicesInfo from "./Pages/ServicesInfo/ServicesInfo";
import Rigerstration from "./Pages/Registration/Registration";
import Registration from "./Pages/Registration/Registration";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Header />
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Header />
                <Registration/>
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/serviceInfo/:id"
            element={
              <>
                <Header />
                <ServicesInfo />
                <Footer />
              </>
            }
          />
          <Route
            path="/serviceInfo"
            element={
              <>
                <Header />
                <ServicesInfo />
                <Footer />
              </>
            }
          />
          
          {/* <Route path="/services/:id" Component={Mohamed}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;