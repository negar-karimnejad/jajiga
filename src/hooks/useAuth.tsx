import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { signinUser, signoutUser, signupUser } from '../redux/store/auth';

const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.auth);
  const { error, isLoading, user } = data;

  const signupFunc = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch(signupUser({ email, password }));
  };
  const signinFunc = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch(signinUser({ email, password }));
  };

  const signoutFunc = () => {
    dispatch(signoutUser());
  };

  return { error, isLoading, user, signoutFunc, signinFunc, signupFunc };
};

export { useAuth };
