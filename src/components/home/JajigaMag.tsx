import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useArticles } from '../../hooks/useArticles';
import MagAuthor from '../articles/MagAuthor';
import SwiperButtons from '../ui/SwiperButtons';
import SectionHeading from './SectionHeading';

function JajigaMag() {
  const { articles } = useArticles();

  return (
    <div className="group relative bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeading>
          <Link to="/mag" className="flex w-fit items-center gap-1">
            مجله جاجیگا
            <span className="flex h-6 w-12 items-center justify-center rounded-3xl bg-red-600 p-1 font-vazirBold text-[12px] text-white">
              MAG
            </span>
          </Link>
          <p className="mt-1 font-vazirBold text-sm text-gray-600 dark:text-gray-400">
            روایتی ویژه از سفر و ایرانگردی
          </p>
        </SectionHeading>
        <div className="relative">
          <Swiper
            navigation={{
              nextEl: '.jajigaMag-swiper-button-next',
              prevEl: '.jajigaMag-swiper-button-prev',
            }}
            modules={[Navigation]}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
              },
              680: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3.3,
              },
            }}
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <div className="relative overflow-hidden rounded-3xl">
                  <Link to={`/mag/${article.title.replaceAll(' ', '-')}`}>
                    <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-black/10"></div>
                    <Link to={`/mag/${article.title.replaceAll(' ', '-')}`}>
                      <img
                        // loading="lazy"
                        src={article.cover}
                        className="h-64 w-full rounded-3xl object-cover"
                        alt={article.title}
                      />
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto flex h-full flex-col items-start justify-between px-4 pb-4 text-sm text-white">
                      <div className="mt-2 flex flex-col gap-2">
                        <Link
                          to={`/mag/category/${article.category.en_title}`}
                          className="w-fit rounded-full bg-yellow-400 px-2 py-0.5 font-vazirBold text-[11px] text-gray-900"
                        >
                          {article.category.title}
                        </Link>
                        <Link to={`/mag/${article.title.replaceAll(' ', '-')}`}>
                          <p className="font-vazirBold text-base">
                            {article.title}
                          </p>
                        </Link>
                      </div>
                      <MagAuthor id={article.author_id} lightColor={true} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 top-20 bg-gradient-to-t from-black/75 to-transparent"></div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperButtons
            nextBtn="jajigaMag-swiper-button-next"
            prevBtn="jajigaMag-swiper-button-prev"
          />
        </div>
      </div>
    </div>
  );
}

export default JajigaMag;
