import { useContext } from "react"
import { AuthContext } from "../Authprovider/AuthProvider"

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth;