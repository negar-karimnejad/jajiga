import { CiCalendarDate } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthor } from '../../hooks/useAuthor';
import { Article } from '../../redux/store/articles';
import convertToPersianDate from '../../utilities/convertToPersianDate';

function MagPost({ article }: { article: Article }) {
  const navigate = useNavigate();

  const { author } = useAuthor(article.author_id);

  return (
    <div className="card w-96 overflow-hidden bg-base-100 shadow-xl">
      <figure className="relative h-40">
        <div
          className="cursor-pointer"
          onClick={() => navigate(`/${article.title}`)}
        >
          <img src={article.cover} alt={article.title} />
          <div className="absolute left-0 top-0 h-full w-full bg-black/10 transition-all duration-500 hover:bg-black/50"></div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <Link
            to={`/${article.title}`}
            className="transition-all hover:text-sky-600"
          >
            {article.title}
          </Link>
        </h2>
        <div className="mt-8 flex items-center gap-3 text-[14px]">
          <img
            src={author?.profile}
            alt=""
            className="h-7 w-7 rounded-full object-cover"
          />
          <Link
            to={`/author/${author?.fullname}`}
            className="font-BKoodak text-gray-500 transition-all hover:text-gray-900"
          >
            {author?.fullname}
          </Link>
          <div className="flex items-center gap-1">
            <CiCalendarDate size={17} className="text-gray-600" />
            <p className="font-BKoodak text-gray-500">
              {convertToPersianDate(article.created_at)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagPost;
