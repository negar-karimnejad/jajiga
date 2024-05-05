import { ReactNode } from 'react';
import { BiCopy, BiEnvelope } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { PiTelegramLogo, PiTwitterLogo } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Modal from '../ui/Modal';

const CostumizeDiv = ({
  children,
  title,
  color,
  to,
  onClick,
}: {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void | undefined;
  title: string;
  color: string;
  to: string | object;
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      target="_blank"
      className={`relative cursor-pointer overflow-hidden rounded-md bg-${color}-400 p-2 text-center text-white transition-all hover:bg-${color}-500`}
    >
      <div className="absolute bottom-0 right-0 top-0">{children}</div>
      {title}
    </Link>
  );
};

function ShareModal({
  isOpen,
  closeModalHandler,
}: {
  isOpen: boolean;
  closeModalHandler: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(window.location.href)
      .then(() =>
        Swal.fire({
          text: 'با موفقیت کپی شد',
          toast: true,
          timerProgressBar: true,
          showConfirmButton: false,
          position: 'top-right',
          timer: 2000,
          icon: 'success',
        }),
      )
      .catch((error) => console.error('Error copying URL:', error));
  };

  return (
    <Modal isOpen={isOpen} closeModalHandler={closeModalHandler}>
      <h4>برای ارسال این صفحه به دوستانت، کلیک کن</h4>
      <div className="my-5 flex flex-col space-y-3">
        <CostumizeDiv
          to="https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.jajiga.com%2Fr%2F1d3e%2Fwr"
          title="واتساپ"
          color="teal"
        >
          <BsWhatsapp className="h-full w-full bg-teal-500 p-2.5" />
        </CostumizeDiv>
        <CostumizeDiv onClick={handleClick} to="" title="کپی لینک" color="gray">
          <BiCopy className="h-full w-full bg-gray-600 p-2.5" />
        </CostumizeDiv>
        <CostumizeDiv to="https://t.me/jajiga" title="تلگرام" color="sky">
          <PiTelegramLogo className="h-full w-full bg-sky-500 p-2.5" />
        </CostumizeDiv>
        <CostumizeDiv
          to="sms:?&body=https://www.jajiga.com/r/1d3e/sr"
          title="پیامک"
          color="yellow"
        >
          <BiEnvelope className="h-full w-full bg-yellow-500 p-2.5" />
        </CostumizeDiv>
        <CostumizeDiv
          to="https://twitter.com/i/flow/login?redirect_after_login=%2FJajiga_Iran"
          title="توییتر"
          color="sky"
        >
          <PiTwitterLogo className="h-full w-full bg-sky-500 p-2.5" />
        </CostumizeDiv>
      </div>
    </Modal>
  );
}

export default ShareModal;
