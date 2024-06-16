import { BiCopy, BiEnvelope } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { PiTelegramLogo, PiTwitterLogo } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Modal from '../ui/Modal';

function ShareModal({
  isOpen,
  id,
  closeModalHandler,
}: {
  isOpen: boolean;
  id?: number;
  closeModalHandler: () => void;
}) {
  const handleClick = () => {
    // TODOLIST: CHANGE WEB ADDRESS AFTER ONLINE
    navigator.clipboard
      .writeText(id ? `https://jajiga-taupe.vercel.app/room/${id}` : window.location.href)
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
      <h4 className="mb-5 mt-10">برای ارسال این صفحه به دوستانت، کلیک کن</h4>
      <div className="mb-10 flex flex-col space-y-3">
        <Link
          to="https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.jajiga.com%2Fr%2F1d3e%2Fwr"
          target="_blank"
          className={`relative cursor-pointer overflow-hidden rounded-md bg-teal-400 p-2 text-center text-white transition-all hover:bg-teal-500`}
        >
          <div className="absolute bottom-0 right-0 top-0">
            <BsWhatsapp className="h-full w-full bg-teal-500 p-2.5" />
          </div>
          واتساپ
        </Link>
        <button
          onClick={handleClick}
          className={`relative cursor-pointer overflow-hidden rounded-md bg-gray-400 p-2 text-center text-white transition-all hover:bg-gray-500`}
        >
          <div className="absolute bottom-0 right-0 top-0">
            <BiCopy className="h-full w-full bg-gray-500 p-2.5" />
          </div>
          کپی لینک
        </button>
        <Link
          to="https://t.me/jajiga"
          target="_blank"
          className={`relative cursor-pointer overflow-hidden rounded-md bg-sky-400 p-2 text-center text-white transition-all hover:bg-sky-500`}
        >
          <div className="absolute bottom-0 right-0 top-0">
            <PiTelegramLogo className="h-full w-full bg-sky-500 p-2.5" />
          </div>
          تلگرام
        </Link>
        <Link
          to="sms:?&body=https://www.jajiga.com/r/1d3e/sr"
          target="_blank"
          className={`relative cursor-pointer overflow-hidden rounded-md bg-yellow-400 p-2 text-center text-white transition-all hover:bg-yellow-500`}
        >
          <div className="absolute bottom-0 right-0 top-0">
            <BiEnvelope className="h-full w-full bg-yellow-500 p-2.5" />
          </div>
          پیامک
        </Link>
        <Link
          to="https://twitter.com/i/flow/login?redirect_after_login=%2FJajiga_Iran"
          target="_blank"
          className={`relative cursor-pointer overflow-hidden rounded-md bg-sky-400 p-2 text-center text-white transition-all hover:bg-sky-500`}
        >
          <div className="absolute bottom-0 right-0 top-0">
            <PiTwitterLogo className="h-full w-full bg-sky-500 p-2.5" />
          </div>
          توییتر
        </Link>
      </div>
    </Modal>
  );
}

export default ShareModal;
