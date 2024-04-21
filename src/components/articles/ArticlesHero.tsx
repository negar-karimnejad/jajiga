import { useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../hooks';
import { AppDispatch } from '../../redux/store';
import { getArticlesFromServer } from '../../redux/store/articles';

function ArticlesHero() {
  const dispatch: AppDispatch = useDispatch();
  const { articles } = useAppSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticlesFromServer());
  }, [dispatch]);

  console.log(articles);

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      modules={[Navigation]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className="articles-hero"
    >
      {articles.map((article) => (
        <SwiperSlide key={article.id} className="relative">
          <Link to={`${article.title.replaceAll(' ', '-')}`}>
            <img
              src={article.cover}
              className="h-[500px] w-screen object-cover max-xl:h-[400px]"
              alt="hero"
            />
            <div className="absolute right-0 top-0 h-full w-full cursor-pointer bg-black/25 transition-all duration-700 hover:bg-black/75 max-xl:p-5 xl:px-24 xl:pt-16">
              <div className="">
                <Link
                  to="/category/wherewhy"
                  className="w-fit rounded-full bg-sky-600 px-2 py-1 text-[11px] text-white transition-all hover:bg-amber-50 hover:text-gray-700"
                >
                  سفر به کجا؟
                </Link>
                <h3 className="mt-4 text-3xl font-extrabold leading-[50px] text-white sm:w-[500px]">
                  {article.title}
                </h3>
                <p className="mt-6 line-clamp-4 text-justify font-vazirMedium leading-7 text-white sm:w-96">
                  {article.description}
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev">
        <FaChevronRight
          size={23}
          className="text-white transition-all duration-500 hover:text-red-600"
        />
      </div>
      <div className="swiper-button-next">
        <FaChevronLeft
          size={23}
          className="text-white transition-all duration-500 hover:text-red-600"
        />
      </div>
    </Swiper>
  );
}

export default ArticlesHero;
