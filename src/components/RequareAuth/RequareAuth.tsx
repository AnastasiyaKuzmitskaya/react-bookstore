import { Navigate, Outlet } from "react-router";
import { ROUTE } from "routes";
import { getUser, useAppSelector } from "store";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUser);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.REGISTRATION}/>;
};
