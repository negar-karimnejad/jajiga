import { Link } from 'react-router-dom';
import { Author } from '../../redux/store/authors';

interface MagAuthorProps {
  lightColor?: boolean;
  author: Author | undefined;
}

function MagAuthor({ author, lightColor }: MagAuthorProps) {
  if (!author) return;

  return (
    <Link
      to={`/author/${author?.fullname}`}
      className="group flex items-center gap-2"
    >
      <img
        loading="lazy"
        src={author?.profile}
        alt=""
        className="h-7 w-7 cursor-pointer rounded-full object-cover"
      />
      <p
        className={`font-persianNums whitespace-nowrap transition-all ${lightColor ? 'text-gray-50' : 'text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100'}`}
      >
        {author?.fullname}
      </p>
    </Link>
  );
}

export default MagAuthor;
