import { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { BsStar, BsStarFill } from 'react-icons/bs';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import Button from '../../components/ui/Button';
import useRoom from '../../hooks/useRoom';

function AdminPRoomsDetails() {
  const { id } = useParams();
  const { room } = useRoom(Number(id));

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  if (!room) return null;

  return (
    <div>
      <h2 className="py-8 font-vazirBold text-2xl text-gray-600">
        جزئیات اقامتگاه
      </h2>
      <div className="grid grid-cols-12 gap-5 rounded-md bg-white p-5">
        <div className="col-span-4 rounded-md ">
          <Swiper
            spaceBetween={250}
            noSwipingClass="swiper-slide"
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            centeredSlides={true}
          >
            {room.images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center !overflow-visible"
              >
                <img
                  loading="lazy"
                  src={image}
                  className="h-[27rem] w-[700px] rounded-xl object-cover"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="adminRoomDetails mt-3 overflow-x-auto rounded-md p-2"
          >
            {room.images.map((image, index) => (
              <SwiperSlide key={index} className="">
                <img
                  loading="lazy"
                  src={image}
                  className="h-20 w-28 rounded-md object-cover object-top"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-8">
          <div className="mt-1 flex items-center justify-between gap-2">
            <Link to={`/room/${room.code}`} className="text-xl text-sky-600 hover:underline">
              {room.title}
            </Link>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500">نرخ هر شب: </p>
              <p className="font-persianNums text-xl">
                {room.price.toLocaleString()}{' '}
                <span className="text-sm text-gray-500">تومان</span>
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <Button style="font-persianNums text-[13px] bg-yellow-500 rounded-full py-1 hover:shadow-none ">
              کد: {room.code}
            </Button>
            <Button style="cursor-default font-persianNums text-[13px] bg-gray-200 rounded-full py-1 hover:shadow-none ">
              {room.reserved}+ رزرو موفق
            </Button>
            <div className="flex gap-0.5">
              <Rating
                initialRating={room.rating?.total}
                fullSymbol={<BsStarFill />}
                emptySymbol={<BsStar />}
                readonly={true}
                className="text-yellow-400"
              />
            </div>
            <span className="font-persianNums text-[12px] text-gray-500 dark:text-gray-300">
              {room.rating?.total}
            </span>
            <span className="font-persianNums text-[12px] text-gray-500 dark:text-gray-300">
              ({room.reviews} نظر)
            </span>
          </div>

          <div className="my-8 h-[1px] w-full bg-gray-100"></div>
          <div>
            <h4 className="mb-5 font-vazirBold text-lg">درباره اقامتگاه</h4>
            <strong className="text-gray-900 dark:text-gray-100">
              {room.title}
            </strong>
            <div
              className="mt-1 text-sm leading-7 text-gray-600 dark:text-gray-400 max-md:text-justify"
              dangerouslySetInnerHTML={{ __html: room.description }}
            ></div>
            <div className="my-8 h-[1px] w-full bg-gray-100"></div>
            <div>
              <p className="mb-3 text-lg">ویژگی های بارز</p>
              <ul className="mr-2">
                <li className="mb-1 flex items-center gap-2">
                  <BiCheck className="text-green-500" size={20} />
                  {room.share_house ? 'نیمه دربست' : 'دربست'}
                </li>
                <li className="mb-1 flex items-center gap-2">
                  <BiCheck className="text-green-500" size={20} />
                  {room.zone}{' '}
                  <span className="font-persianNums">
                    {room.foundation_meterage}
                  </span>{' '}
                  متری
                </li>
                <li className="mb-1 flex items-center gap-2">
                  <BiCheck className="text-green-500" size={20} />
                  ظرفیت تا{' '}
                  <span className="font-persianNums">
                    {room.max_capacity}
                  </span>{' '}
                  مهمان
                </li>
                <li className="mb-1 flex items-center gap-2">
                  <BiCheck className="text-green-500" size={20} />
                  دارای<span className="font-persianNums">{room.bedroom}</span>
                  اتاق خواب
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-12 mt-10">
          <h4 className="box-title mb-5 text-lg">اطلاعات کلی</h4>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="text-gray-500 ml-10">برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                  <td>
                    <span className="text-gray-500 ml-10">نام برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="text-gray-500 ml-10">برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                  <td>
                    <span className="text-gray-500 ml-10">نام برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="text-gray-500 ml-10">برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                  <td>
                    <span className="text-gray-500 ml-10">نام برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="text-gray-500 ml-10">برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                  <td>
                    <span className="text-gray-500 ml-10">نام برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="text-gray-500 ml-10">برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                  <td>
                    <span className="text-gray-500 ml-10">نام برند</span>{' '}
                    <span className="text-black">sdcfsd</span>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPRoomsDetails;
