
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import { GlobalStyles } from "../components/globalStyles/Global.styles";
import Navbar from "../components/nav/Navbar";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import PrivatRouter from "./PrivatRouter";

//   slash koymadan path yazmak relativ path koyarsak absolute.

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<PrivatRouter />}>
          <Route path="" element={<About />} />
          {/* buraya path koysaydik about/link olarak calisir  */}
        </Route>

        <Route path="detail" element={<PrivatRouter />}>
          <Route path="" element={<Detail />} />
          {/* buraya path koysaydik about/link olarak calisir  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;