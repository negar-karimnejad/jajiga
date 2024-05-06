import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useArticles } from '../../hooks/useArticles';

function ArticlesHero() {
  const navigate = useNavigate();
  const { articles } = useArticles();

  // 2
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      modules={[Navigation]}
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      className="articles-hero"
    >
      {articles.map((article) => (
        <SwiperSlide key={article.id} className="relative">
          <div
            onClick={() => navigate(`${article.title.replaceAll(' ', '-')}`)}
          >
            <img
              loading="lazy"
              src={article.cover}
              className="h-[500px] w-screen object-cover max-xl:h-[400px]"
              alt="hero"
            />
            <div className="absolute right-0 top-0 h-full w-full cursor-pointer bg-black/40 transition-all duration-700 hover:bg-black/75 max-xl:p-5 xl:px-24 xl:pt-16">
              <div className="">
                <Link
                  to="category/wherewhy"
                  className="w-fit rounded-full bg-sky-600 px-2 py-1 text-[11px] text-white transition-all hover:bg-amber-50 hover:text-gray-700"
                >
                  سفر به کجا؟
                </Link>
                <h3 className="mt-4 text-3xl font-extrabold text-white sm:w-[500px] sm:leading-[50px]">
                  {article.title}
                </h3>
                <p className="mt-6 line-clamp-4 text-justify font-vazirMedium text-white sm:w-96 sm:leading-7">
                  {article.description}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev absolute bottom-5 left-16 z-40 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100/50 sm:bottom-16 sm:left-32">
        <FaChevronRight
          size={23}
          className="text-white transition-all duration-500 hover:text-red-600"
        />
      </div>
      <div className="swiper-button-next absolute bottom-5 left-5 z-40 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100/50 sm:bottom-16 sm:left-20">
        <FaChevronLeft
          size={23}
          className="text-white transition-all duration-500 hover:text-red-600"
        />
      </div>
    </Swiper>
  );
}

export default ArticlesHero;
