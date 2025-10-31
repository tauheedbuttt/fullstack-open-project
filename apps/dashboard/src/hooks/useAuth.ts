import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../store";
import { login, logout } from "../store/authSlice";
import { TanstackError } from "shared";

const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onLogin = (token: string) => {
    dispatch(login({ token }));
  };
  const onLogout = () => {
    dispatch(logout());
  };
  const onError = <T>(error: TanstackError<T>) => {
    const status = error?.response?.status;
    if (typeof status === "number" && status >= 400 && status < 500) {
      onLogout();
    }
  };

  return { onLogin, onLogout, auth, onError };
};

export default useAuth;
