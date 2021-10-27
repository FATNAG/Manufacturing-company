import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import BlockingMessage from "./BlockingMessage";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: `authentication-manufacturing-company-reok-fatnag`,
      });
      localStorage.setItem("token", accessToken);
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated]);

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
