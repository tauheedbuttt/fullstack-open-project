import { useDispatch, useSelector } from "react-redux";
import { IUserRole } from "shared";
import { login } from "../features/authSlice";
import { type RootState } from "../store";

const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const onLogin = (role: IUserRole) => {
    dispatch(login({ role }));
  };

  return { onLogin, auth };
};

export default useAuth;
