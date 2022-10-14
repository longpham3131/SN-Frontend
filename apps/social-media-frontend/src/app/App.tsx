import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import './styles/styles.scss';
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage slot={<Login />} />} />
      <Route path="/register" element={<AuthPage slot={<Register />} />} />
      {/*<Route*/}
      {/*  path="/forget-password"*/}
      {/*  element={<AuthPage slot={<ForgetPassword />} />}*/}
      {/*/>*/}

      {/*/!* <AuthPage /> *!/*/}
      {/*<Route  path="*" element={<AuthRoute />}>*/}
      {/*  <Route  path="*" element={<Social />} />*/}
      {/*</Route>*/}
    </Routes>
  );
};

export default App;
