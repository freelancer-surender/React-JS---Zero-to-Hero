import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
