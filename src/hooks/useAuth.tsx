import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import {
  SupabaseUser,
  UserProps,
  editUser,
  restoreSession,
  signinUser,
  signoutUser,
  signupUser,
} from '../redux/store/auth';

const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.auth);

  const { error, isLoading, user, users, isFetched } = data;

  const signupFunc = async ({ email, password, fullname }: UserProps) => {
    await dispatch(signupUser({ email, password, fullname })).unwrap();
  };
  const updateFunc = async (newUser: SupabaseUser) => {
    await dispatch(editUser(newUser)).unwrap();
  };

  const signinFunc = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await dispatch(signinUser({ email, password })).unwrap();
  };

  const signoutFunc = async () => {
    await dispatch(signoutUser()).unwrap();
  };

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  return {
    error,
    isLoading,
    user,
    users,
    isFetched,
    signoutFunc,
    signinFunc,
    signupFunc,
    updateFunc,
  };
};

export { useAuth };
