import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ArticleSocials() {
  return (
    <>
      <div>
        <Link
          target="_blank"
          to="https://t.me/jajiga"
          className="flex h-full w-full items-center justify-center rounded-sm bg-sky-500 text-white transition-all hover:bg-neutral-700 "
        >
          <FaTelegramPlane />
        </Link>
      </div>
      <div>
        <Link
          target="_blank"
          className="flex h-full w-full items-center justify-center rounded-sm bg-green-500 text-white transition-all hover:bg-neutral-700 "
          to="https://api.whatsapp.com/send?text=https%3A%2F%2Fwww.jajiga.com%2Fr%2F1d3e%2Fwr"
        >
          <BsWhatsapp />
        </Link>
      </div>
      <div>
        <Link
          target="_blank"
          to="https://twitter.com/i/flow/login?redirect_after_login=%2FJajiga_Iran"
          className="flex h-full w-full items-center justify-center rounded-sm bg-blue-500 text-white transition-all hover:bg-neutral-700 "
        >
          <FaTwitter />
        </Link>
      </div>
      <div>
        <Link
          target="_blank"
          to="https://www.linkedin.com/company/jajiga/"
          className="flex h-full w-full items-center justify-center rounded-sm bg-blue-700 text-white transition-all hover:bg-neutral-700 "
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </>
  );
}

export default ArticleSocials;
