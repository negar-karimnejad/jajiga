import { BiMessageRoundedAdd, BiUser } from 'react-icons/bi';
import { BsSuitcase } from 'react-icons/bs';
import { GoBell, GoHome } from 'react-icons/go';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineRoomService } from 'react-icons/md';
import { RiCustomerService2Line } from 'react-icons/ri';

const hostData = [
  {
    id: 1,
    heading: 'ابتدا ثبت نام کنید',
    text: 'ابتدا ثبت‌نام کنید تا برای جاجیگا قابل شناسایی شوید و بتوانید تنظیمات شخصی خودتان را اعمال کنید.',
    infos: [
      {
        icon: <BiUser size={40} className="text-gray-800 dark:text-gray-200" />,
        title: 'حساب کاربری حاوی چه مطالبی ست؟',
        subtitle:
          'برای ثبت‌نام کافیست نام، نام خانوادگی و شماره موبایل خود را وارد کنید. پس از ثبت‌نام می توانید اقامتگاه خود را به رایگان در سایت ثبت کنید. البته برای انتشار اقامتگاه و شروع میزبانی در سایت می باید با تکمیل حساب کاربری، آن را به تایید برسانید و به سطح "تایید شده" ارتقا دهید. حتما تصویر با کیفیت و شادی از خود را در پروفایل حساب کاربری اضافه کنید تا تاثیر خوشایندی بر مهمانان بگذارید.',
      },
      {
        icon: (
          <IoEyeOutline
            size={40}
            className="text-gray-800 dark:text-gray-200"
          />
        ),
        title: 'چه اطلاعاتی از من قابل مشاهده است؟',
        subtitle:
          'درشرایط معمول تنها اسم کوچک, تصویر کاربری و شرحی که درباره خود می نویسید برای سایرین قابل مشاهده خواهد بود. هنگامی که اقامتگاه شما توسط یک میهمان رزرو شود, نام، نام خانوادگی, شماره تماس و آدرس دقیق اقامتگاه شما در سند رزرو ثبت می شود و برای میهمان قابل مشاهده خواهد بود. سایر اطلاعات ثبت شده, بطور کاملا محرمانه ذخیره شده و قابل دسترسی نمی‌باشد.',
      },
      {
        icon: (
          <BsSuitcase size={40} className="text-gray-800 dark:text-gray-200" />
        ),
        title: 'چرا باید حساب کاربری خود را تکمیل کنم ؟',
        subtitle:
          'تکمیل اطلاعات هویتی همچون کد ملی و آپلود کارت ملی موجب افزایش ایمنی کاربران جاجیگا بوده و زمینه ساز تعامل ایمن و توام با آسودگی کاربران با یکدیگر می‌باشد. تکمیل اطلاعات ارتباطی همچون ایمیل نیز باعث سهولت بیشتر در عملکرد سامانه و تسهیل در ارسال به موقع اعلان های فصلی و نکات و آموزش های دوره ای برای میزبان ها می شود.',
      },
    ],
  },
  {
    id: 2,
    heading: 'اقامتگاه خود را ثبت کنید',
    text: 'حال می بایست برای معرفی اقامتگاه خود به گردشگران, یک نمایه (پروفایل) برای اقامتگاه خود ایجاد کنید.',
    infos: [
      {
        icon: <GoHome size={40} className="text-gray-800 dark:text-gray-200" />,
        title: 'نمایه اقامتگاه من حاوی چه مطالبی ست؟',
        subtitle:
          'در نمایه اقامتگاه, شما می بایست مشخصات دقیق منزل و امکانات قابل استفاده توسط میهمانان را مشخص کنید. عکسهایی واضح و جدید از اقامتگاه خود فراهم نموده و Upload کنید, همچنین نرخ اجاره بها و تقویم اجاره منزل خود در روزهای مختلف هفته و فصول مختلف سال را نیز تنظیم کنید. در آخر مقرراتی که می باید توسط میهمانان رعایت شود را نیز مشخص کنید. نمایه اقامتگاه شما درواقع بیانگر مشخصات و ویژگیهای واقعی منزل شما برای گردشگران علاقه مند خواهد بود.',
      },
      {
        icon: (
          <MdOutlineRoomService
            size={40}
            className="text-gray-800 dark:text-gray-200"
          />
        ),
        title: 'چه کسانی می‌توانند اقامتگاهم را اجاره کنند؟',
        subtitle:
          'شما در کنار ثبت مشخصات و امکانات اقامتگاه خود, مواردی همچون تقویم کاری اقامتگاه, اجاره بها و مقررات منزل را نیز تعیین می کنید. سپس نمایه اقامتگاه شما در وبسایت منتشر می شود و برای مسافرین و گردشگران به نمایش درمی آید. گردشگرانی که دارای حساب کاربری در جاجیگا باشند, با جستجو در وبسایت, در صورتی که مشخصات اقامتگاه شما را مناسب نیاز خود بیابند درصورت قبول مقررات منزل, برای اجاره اقامتگاه در بازه زمانی مد نظر "درخواست رزرو" ارسال می کنند. درصورت تایید شما و پرداخت صورتحساب توسط مهمان، رزرو قطعی می شود و سند رزرو صادر می گردد.',
      },
      {
        icon: (
          <RiCustomerService2Line
            size={40}
            className="text-gray-800 dark:text-gray-200"
          />
        ),
        title: 'آیا میزبانی و رزرو اینترنتی سخت است؟',
        subtitle:
          'امکانات تعبیه شده در سایت بگونه ای ست تا پس از صرف وقت کافی برای ثبت و انتشار اقامتگاه خود, بتوانید تمام مراحل میزبانی شامل معرفی اقامتگاه, بازاریابی, ارتباطات, رزرواسیون, دریافت وجوه و پشتیبانی, را طی فرایندی ساده و کاربردی و با صرف زمانی اندک, برای شما امکانپذیر نماید. با این وجود, ما از لحظه ثبت‌نام، ثبت اقامتگاه و آغاز میزبانی, در کنارتان هستیم و شما را در این مسیر هیجان انگیز همراهی میکنیم.',
      },
    ],
  },
  {
    id: 3,
    heading: 'برای ورود مهمانان آماده شوید!',
    text: 'هنگامی که یک مهمان اقامتگاه شما را انتخاب نماید, درخواست رزرو خود را ثبت کرده و ارسال می‌کند.',
    infos: [
      {
        icon: <GoBell size={40} className="text-gray-800 dark:text-gray-200" />,
        title: 'چگونه از دریافت درخواست رزرو مطلع شوم؟',
        subtitle:
          'برای سرعت بخشیدن به فرایند رزرو, ثبت درخواست رزرو توسط میهمان یا قطعی شدن رزرو با بهره گیری از سامانه اس ام اس متنی و تماس های خودکار صوتی و همچنین سرویس ایمیل به اطلاع میزبان می‌رسد تا در اسرع وقت از وضعیت رزرو آگاهی یافته و اقدامات لازم را به انجام برساند. در مواقع ضروری تیم پشتیبانی جاجیگا نیز با دو طرف رزرو تماس خواهند گرفت. هرگونه تغییری در وضعیت رزرو, به همین روشها به اطلاع دو طرف خواهد رسید.',
      },
      {
        icon: (
          <HiOutlineUserGroup
            size={40}
            className="text-gray-800 dark:text-gray-200"
          />
        ),
        title: 'فرایند تحویل اقامتگاه چگونه است؟',
        subtitle:
          'پس از قطعی شدن رزرو اقامتگاه, سند رزرو قطعی حاوی اطلاعات کامل رزرو , نام و نام خانوادگی, تعداد نفرات, تاریخ و ساعت ورود و خروج, جزییات صورتحساب پرداخت شده, آدرس دقیق اقامتگاه و شماره تماس میهمان و میزبان برای هر دو طرف ارسال می گردد. توصیه می شود میزبان پیش از شروع سفر با میهمان تماس گرفته و هماهنگی های لازم برای نحوه و زمان تحویل اقامتگاه به ایشان را به انجام برساند تا میهمان با خیالی آسوده سفر خود را آغاز نماید.',
      },
      {
        icon: (
          <BiMessageRoundedAdd
            size={40}
            className="text-gray-800 dark:text-gray-200"
          />
        ),
        title: 'آیا راهی برای ارتباط با میهمانان وجود دارد؟',
        subtitle:
          'ممکن است میهمان پیش از رزرو اقامتگاه, سوالاتی در مورد شرایط منزل و یا شرایط عمومی منطقه داشته باشد, یا ممکن است میزبان, پیش از قبول درخواست رزرو بخواهد سوالاتی از میهمان بپرسد. در این مواقع دو طرف رزرو می توانند با ارسال "پیام " در کادر مخصوص تعبیه شده در صفحه رزرو اقامتگاه، سوال و یا جواب خود را در مراحل مختلف رزرو برای طرف مقابل ارسال نمایند و سپس در صورت رفع ابهام رزرو را تایید یا قطعی نمایند.',
      },
    ],
  },
];

function Host() {
  return (
    <div className="relative">
      <div className="h-36 w-full bg-yellow-400 p-5">
        <div className="container h-full w-full bg-[url(/images/patterns/pattern.png)]">
          <h2 className="font-vazirBold text-xl text-gray-700">
            چگونه میزبان شویم؟
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            نکات زیر را مطالعه کنید تا با اطلاعات کافی در جاجیگا میزبان شوید و
            با خیال آسوده کسب درآمد کنید
          </p>
        </div>
      </div>
      {hostData.map((box) => (
        <div
          key={box.id}
          className={`-mt-5 rounded-t-2xl ${box.id % 2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-white dark:bg-gray-800'}`}
        >
          <div className="container flex flex-col items-center justify-center gap-5 py-16 text-center">
            <h3 className="border-b-4 border-b-yellow-400 pb-2 font-vazirBold text-lg text-gray-700 dark:text-white">
              <span className="font-BKoodak">{box.id}- </span>
              {box.heading}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {box.text}
            </p>
            <div className="mt-10 flex gap-x-5 gap-y-14 max-md:flex-col">
              {box.infos.map((info, index) => (
                <div
                  key={index}
                  className="relative rounded-3xl border-t-2 border-t-yellow-400 px-4 pb-5 pt-16 text-center shadow-lg dark:shadow-gray-950"
                >
                  <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-400 p-0.5 dark:bg-gray-900">
                    {info.icon}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="relative">
                      <p className="text-right font-vazirMedium text-lg dark:text-white">
                        {info.title}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-justify text-[12px] dark:text-gray-300">
                    {info.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Host;
