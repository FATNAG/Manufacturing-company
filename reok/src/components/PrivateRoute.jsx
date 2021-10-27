import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BlockingMessage from "./BlockingMessage";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <div>
      <BlockingMessage />
    </div>
  );
};

export default PrivateRoute;
