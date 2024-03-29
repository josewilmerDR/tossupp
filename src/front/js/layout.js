import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "./store/appContext";
import { useLocation } from "react-router-dom";

//Componetes
import ScrollToTop from "./component/scrollToTop";
import Home from "./pages/home.jsx";
import MyAccount from "./pages/myAccount.jsx";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Navbar from "./component/navbar.jsx";
import { Footer } from "./component/footer";
import Receta from "./component/singleCardRecetas.jsx";
import PublicNavbar from "./component/publicNavbar.jsx";
import PublicNavbarForPublicHome from "./component/publicNavbarForPublicHome.jsx";
import LandingPage from "./pages/landing.jsx";
import PublicHome from "./pages/publicHome.jsx";
import Chatbot from "./component/chatbot.jsx";
import AddManualRecipe from "./component/AddManualRecipe.jsx";
import AllMyRecipes from "./pages/AllMyRecipes.jsx";
import ChangePasswordPage from "./pages/changepassword.jsx";
import RecoverPassword from "./pages/passwordemail.jsx";

import WithAuth from "./component/Auth/withAuth.jsx";

//Crear un nuevo componente para la selección del Navbar
const NavbarSelector = () => {
  const { store, actions } = useContext(Context);
  const location = useLocation();

  if (!actions.userLogin && (location.pathname) === '/public') {
    return <PublicNavbarForPublicHome />;
  }
  if (actions.userLogin) {
    return <Navbar />;
  }
  if (!actions.userLogin) {
    return <PublicNavbar />;
  }
};


//create your first component
const Layout = () => {
  const { store, actions } = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = "/" || "";

  return (
    <div className="h-100">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {/* <NavbarSelector /> */}

          {/* {store.userLogin ? <Navbar /> : <PublicNavbarForPublicHome />} */}

          {/* <Navbar /> */}
          <Routes>
            {/* <Route element={<Chatbot />} path="/chatbot" /> */}
            <Route element={<MyAccount />} path="/myaccount" />
            <Route element={<ChangePasswordPage />} path="/changePwd" />
            <Route element={<RecoverPassword />} path="/email_password" />

            {/* <Route element={<Demo />} path="/demo" /> */}
            <Route element={<AddManualRecipe />} path="/addRecipe" />
            <Route element={<AllMyRecipes />} path="/allMyRecipes" />
            <Route element={<Login />} path="/login" />
            <Route element={<LandingPage />} path="/landingPage" />
            <Route element={<Register />} path="/register" />
            <Route element={<PublicHome />} path="/public" />
            <Route element={<Home />} path="/home" />
            <Route element={<Chatbot />} path="/chatbot" />

            <Route element={<LandingPage />} path="/" />
            {/* <Route element={<AddManualRecipe />} path="/addRecipe" /> */}
            {/* <Route path="/" element={ <LandingPage  />} */}
            {/* <Route path="/chatbot" element={<>{store.userLogin ? <Chatbot /> : <Chatbot />}</>} /> */}
            {/* <Route path="/demo" element={<>{store.userLogin ? <Demo /> : <Demo />}</>} />
            {/* <Route path="/addRecipe" element={<>{store.userLogin ? <AddManualRecipe /> : <Login />}</>} /> */}



            {/* <Route element={<CardCarousel />} path="/cardCarousel" /> */}
            {/* <Route path="/chatbot" element={WithAuth(Chatbot)} />
            {/* <Route path="/chatbot" element={WithAuth(Chatbot)} />
            <Route path="/demo" element={WithAuth(Demo)} />
            <Route path="/addRecipe" element={WithAuth(AddManualRecipe)} />
            <Route path="/receta" element={WithAuth(Receta)} /> */}
            {/* <Route element={<Single />} path="/single/:theid" /> */}
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);


