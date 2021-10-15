import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const BlockingMessage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-blue-200">
      <section className="font-bold text-gray-800 items-center text-2xl">
        <div>You are not authorized to access this page</div>
        <div>
          But if you want you can{" "}
          <button
            className="text-3xl font-extrabold text-green-400"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
        <div>
          Or go to{" "}
          <Link to="/" className="text-green-400 hover:underline hover:text-green-400">
            home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlockingMessage;
