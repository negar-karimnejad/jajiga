import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks';
import { AppDispatch } from '../redux/store';
import { closeModal, openModal } from '../redux/store/authModal';

const useAuthModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useAppSelector((state) => state.modal);
  const { isOpen } = data;

  const closeModalHandler = () => {
    dispatch(closeModal());
  };
  const openModalHandler = () => {
    dispatch(openModal());
  };

  return { isOpen, closeModalHandler, openModalHandler };
};

export { useAuthModal };
