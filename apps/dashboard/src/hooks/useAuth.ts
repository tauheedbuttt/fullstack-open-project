import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../store";
import { login, logout } from "../store/authSlice";

const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const onLogin = (token: string) => {
    dispatch(login({ token }));
  };
  const onLogout = () => {
    dispatch(logout());
  };

  return { onLogin, onLogout, auth };
};

export default useAuth;
