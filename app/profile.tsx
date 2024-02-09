"use client";

import { IdTokenClaims, useLogto } from "@logto/react";
import { useEffect, useState } from "react";

const Profile = () => {
  const { signIn, isAuthenticated, getIdTokenClaims } = useLogto();
  const [user, setUser] = useState<IdTokenClaims>();

  useEffect(() => {
    getIdTokenClaims().then((claims) => {
      setUser(claims);
    });
  }, [isAuthenticated, getIdTokenClaims]);

  if (isAuthenticated) {
    return <div>Signed in as {user?.sub}</div>;
  }

  return (
    <button onClick={() => signIn("http://localhost:3000/callback")}>
      Sign In
    </button>
  );
};

export default Profile;
