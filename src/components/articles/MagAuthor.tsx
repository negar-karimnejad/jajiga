import { Link } from 'react-router-dom';
import { useAuthors } from '../../hooks/useAuthors';

interface MagAuthorProps {
  lightColor?: boolean;
  id: number | undefined;
}

function MagAuthor({ id, lightColor }: MagAuthorProps) {
  const { author } = useAuthors(id);

  if (!author) return;

  return (
    <Link
      to={`/mag/author/${author?.fullname}`}
      className="group flex items-center gap-2"
    >
      <img
        loading="lazy"
        src={author?.profile}
        alt=""
        className="h-7 w-7 cursor-pointer rounded-full object-cover"
      />
      <p
        className={` whitespace-nowrap transition-all ${lightColor ? 'text-gray-50' : 'text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100'}`}
      >
        {author?.fullname}
      </p>
    </Link>
  );
}

export default MagAuthor;
