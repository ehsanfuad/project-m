import React from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import LogFrom from "./LogFrom";

function Login() {
  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <AuthHeader
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <LogFrom />
      </div>
    </div>
  );
}

export default Login;
