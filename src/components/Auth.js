import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Auth() {
  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <div className="col-md-6">
          <h2 className="text-center">Login</h2>
          <button className="btn btn-danger w-100 mt-3 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faGoogle} className="me-3" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
