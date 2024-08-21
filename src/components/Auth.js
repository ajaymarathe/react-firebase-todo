import React from "react";
import { useLocation } from "react-router-dom";

function Auth() {
  const location = useLocation();
  const isLogin = location.path === "/login";

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="text-center">{isLogin ? "Login" : "Sign Up"}</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
