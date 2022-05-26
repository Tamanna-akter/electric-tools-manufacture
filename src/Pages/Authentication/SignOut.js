import { signOut } from "firebase/auth";
import React from "react";

import auth from "../../firebase.init";

const SignOut = () => {
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={logout} className="btn btn-ghost border-black">
        {" "}
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;