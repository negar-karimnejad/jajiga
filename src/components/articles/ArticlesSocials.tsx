import { FaInstagram, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function ArticlesSocials() {
  return (
    <div className="flex items-center gap-2">
      <Link
        target="_blank"
        to="https://t.me/jajiga"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-gray-800 hover:opacity-50 transition-all"
      >
        <FaTelegramPlane size={19} />
      </Link>
      <Link
        target="_blank"
        to="https://www.instagram.com/jajiga.iran"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-gray-800 hover:opacity-50 transition-all"
      >
        <FaInstagram size={19} />
      </Link>
      <Link
        target="_blank"
        to="https://twitter.com/i/flow/login?redirect_after_login=%2FJajiga_Iran"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-gray-800 hover:opacity-50 transition-all"
      >
        <FaXTwitter size={19} />
      </Link>
      <Link
        target="_blank"
        to="https://www.linkedin.com/company/jajiga/"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-gray-800 hover:opacity-50 transition-all"
      >
        <FaLinkedinIn size={19} />
      </Link>
    </div>
  );
}

export default ArticlesSocials;
