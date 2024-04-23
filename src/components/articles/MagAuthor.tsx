import { Link } from 'react-router-dom';
import { Author } from '../../redux/store/authors';

function MagAuthor({ author }: { author: Author | undefined }) {
    if (!author) return;

  return (
    <Link
      to={`/author/${author?.fullname}`}
      className="group flex items-center gap-2"
    >
      <img
        src={author?.profile}
        alt=""
        className="h-7 w-7 cursor-pointer rounded-full object-cover"
      />
      <p className="whitespace-nowrap font-BKoodak text-gray-400 transition-all group-hover:text-gray-900 dark:group-hover:text-gray-100">
        {author?.fullname}
      </p>
    </Link>
  );
}

export default MagAuthor;
