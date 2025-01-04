import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Profile } from "../pages/profile/profile";
import { Layout } from "../components/layout/Layout";

export const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterConfig;
