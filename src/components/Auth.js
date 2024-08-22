import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signInWithPopup } from "firebase/auth";
import { auth, db, doc, getDoc, provider, setDoc } from "../firebase";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log("res", res);
      const user = res?.user;
      let stringifyUser = JSON.stringify(user);

      // Reference to the users collection
      const userDocRef = doc(db, "users", user.uid);

      // Check if the user already exists in Firestore
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        // If the user does not exist, add the user to the collection
        await setDoc(userDocRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        navigate("/", { state: { stringifyUser } });
      }

      navigate("/", { state: { user: stringifyUser } });
    } catch (error) {
      console.log("Google login Error:", error);
    }
  };

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <div className="col-md-6">
          <h2 className="text-center">Login</h2>
          <button
            className="btn btn-danger w-100 mt-3 d-flex align-items-center justify-content-center"
            onClick={loginWithGoogle}
          >
            <FontAwesomeIcon icon={faGoogle} className="me-3" />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
