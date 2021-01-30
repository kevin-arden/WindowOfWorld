import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = true;
  const isAdmin  = true;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
