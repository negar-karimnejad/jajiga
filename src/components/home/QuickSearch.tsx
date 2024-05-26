import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { QuickSearchArray } from '../../data/data';
import SwiperButtons from '../ui/SwiperButtons';
import QuickSearchCard from './QuickSearchCard';
import SectionHeading from './SectionHeading';
import ShareModal from '../room/ShareModal';
import { useState } from 'react';

function QuickSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModalHandler = () => {
    setIsOpen(false);
  };
  const openModalHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="group relative bg-white dark:bg-gray-900">
        <div className="container">
          <SectionHeading>جستجوی سریع</SectionHeading>
          <div className="relative">
            <Swiper
              navigation={{
                nextEl: '.quicksearch-swiper-button-next',
                prevEl: '.quicksearch-swiper-button-prev',
              }}
              modules={[Navigation]}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 2.3,
                },
                680: {
                  slidesPerView: 3.5,
                },
                1024: {
                  slidesPerView: 5.2,
                },
              }}
            >
              {QuickSearchArray.map((item) => (
                <SwiperSlide key={item.id}>
                  <QuickSearchCard
                    item={item}
                    openModalHandler={openModalHandler}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperButtons
              nextBtn="quicksearch-swiper-button-next"
              prevBtn="quicksearch-swiper-button-prev"
            />
          </div>
        </div>
      </div>
      <ShareModal isOpen={isOpen} closeModalHandler={closeModalHandler} />
    </>
  );
}

export default QuickSearch;
