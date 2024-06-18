import { Link } from 'react-router-dom';
import { useAuthor } from '../../hooks/useAuthor';

interface ArticleAuthorProps {
  lightColor?: boolean;
  id: number;
}

function ArticleAuthor({ id, lightColor }: ArticleAuthorProps) {
  const { author } = useAuthor(id);

  if (!author) return;

  return (
    <Link
      to={`/article/author/${author?.fullname.replaceAll(' ', '-')}`}
      className="group flex items-center gap-2"
    >
      <img
        loading="lazy"
        src={author?.profile}
        alt={author.fullname}
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

export default ArticleAuthor;
