import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { signupUser } from '../redux/store/auth';

const useAuth = ({ email, password }: { email: string; password: string }) => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.auth);
  const { error, isLoading, isOpenSigningModal, user } = data;

  useEffect(() => {
    dispatch(signupUser({ email, password }));
  }, [dispatch, email, password]);

  return { error, isLoading, isOpenSigningModal, user };
};

export { useAuth };
