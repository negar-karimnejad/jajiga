import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

function MoreInfos() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container relative my-16 text-center">
      <h3 className="mb-3 font-vazirBold text-lg">
        اجاره ویلا، آنلاین و مطمئن در جاجیگا
      </h3>
      <p className="text-justify text-sm leading-6 text-gray-500">
        سفر تو خون ما ایرانیهاست و معمولا بهترین خاطرات عمرمون در سفرهامون رقم
        می خوره، به خصوص اگر سفری خانوادگی یا در جمع دوستان بهتر از جان باشه.
        اجاره ویلا در شمال باشه یا اجاره سوئیت در کیش یا سوئیت در اصفهان و
        شیراز، اجاره ویلا استخردار یا کلبه جنگلی یا ویلا ساحلی، اجاره ویلا ارزان
        قیمت یا اجاره ویلا لوکس و لاکچری، هر نوع اقامتگاهی رو که اراده کنید
        <span>{!showMore && '...'}</span>
        {showMore &&
          ` در هر محدوده قیمتی، می تونید اون رو در سایت جاجیگا بیابید، نظرات
            مهمانهای قبلی رو مطالعه کنید و در نهایت اقامتگاه مطلوبتون رو بصورت
            آنلاین نزد یکی از صدها میزبان خوش ذوق و با انصاف جاجیگا رزرو کنید و
            مطمئن باشید که تمام تیم جاجیگا رو تا پایان سفر در کنارتون خواهید
            داشت :)`}
      </p>
      <button
        onClick={() => setShowMore(true)}
        className={`${showMore ? 'hidden' : 'flex'} mx-auto mt-5 items-center justify-center gap-1 text-center font-vazirBold text-[12px]`}
      >
        مشاهده بیشتر
        <IoIosArrowDown size={24} />
      </button>
    </div>
  );
}

export default MoreInfos;
