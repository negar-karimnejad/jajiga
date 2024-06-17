import Breadcrumb from '../components/ui/Breadcrumb';

function About() {
  return (
    <div className="relative overflow-x-hidden dark:bg-gray-800">
      <div className="w-full bg-yellow-400 pb-4">
        <div className="container h-full w-full bg-[url(/images/patterns/pattern.png)]">
          <Breadcrumb pageLink="درباره ما" />
        </div>
      </div>

      <div className="-mt-5 rounded-t-2xl bg-white dark:bg-gray-900">
        <section className="container flex flex-col gap-10 py-16 lg:w-2/3">
          <div className="flex w-full items-center gap-16 max-md:flex-col-reverse">
            <div className="flex-1">
              <h3 className="mb-5 text-2xl dark:text-white">
                رویکرد جدید گردشگران
              </h3>
              <p className="text-justify pb-5 text-lg leading-7 text-gray-700 dark:text-gray-400">
                امروزه بسیاری از گردشگران داخلی و خارجی ترجیح میدهند تا با اقامت
                در منازل شخصی مردم و در کنار ایشان فضای صمیمی تری را تجربه کنند
              </p>
              <p className="text-justify text-lg leading-7 text-gray-700 dark:text-gray-400">
                این رویکرد در کشوری همچون ایران به واسطه سنت دیرین میهمان پذیری
                و میهمان نوازی بسیار پررنگتر و چشمگیرتر می‌باشد
              </p>
            </div>
            <div className="flex-1">
              <img
                loading="lazy"
                className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950"
                src="/images/about/about_img1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-16 max-md:flex-col">
            <div className="flex-1">
              <img
                loading="lazy"
                className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950"
                src="/images/about/about_img2.jpg"
                alt=""
              />
            </div>
            <div className="flex-1">
              <p className="text-justify pb-5 text-lg leading-7 text-gray-700 dark:text-gray-400">
                به اعتراف اکثر گردشگرانی که از ایران دیدن کرده اند, در کنار آثار
                باستانی اعجاب انگیز و طبیعت زیبای ایران, این مردم کوچه و بازار
                هستند که با مهمان نوازی ایرانی خاطره ای خوش از خود و سرزمین
                ایران را در ذهن و روح ایشان حک کرده اند, همان مردمی که با آغوشی
                باز و لبخندی گشاده به استقبالشان میروند و بی تکلف ایشان را برای
                صرف چای به خانه خود دعوت میکنند.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-16 max-md:flex-col-reverse">
            <div
              className="flex-1"
              data-aos="fade-right"
              data-aos-duration="4000"
            >
              <p className="text-justify pb-5 text-lg leading-7 text-gray-700 dark:text-gray-400">
                این رویکرد جدید با افزایش آگاهی گردشگران و پایبندی ایشان به
                هنجار های جامعه میزبان به رویکرد قالب در میان گردشگران بین
                المللی بدل گشته است.
              </p>
            </div>
            <div
              className="flex-1"
              data-aos="fade-left"
              data-aos-duration="4000"
            >
              <img
                loading="lazy"
                className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950"
                src="/images/about/about_img3.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <div className="container">
          <div data-aos="fade-up">
            <img
              loading="lazy"
              src="/images/about/about_img4.jpg"
              alt=""
              className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950"
            />
          </div>
        </div>
        <section className="container flex flex-col gap-24 py-16 lg:w-2/3">
          <div className="flex w-full items-start gap-16 max-md:flex-col-reverse">
            <div data-aos="fade-right" data-aos-duration="4000">
              <h3 className="mb-5 text-2xl dark:text-white">
                لمس زندگی روزمره مردم محلی
              </h3>
              <p className="text-justify pb-5 text-lg leading-7 text-gray-700 dark:text-gray-400">
                اقامت در خانه های محلی فرصتی است مغتنم تا گردشگران از نزدیک با
                زندگی روزمره جامعه میزبان آشنا شوند, فرصتی که هیچگاه با اقامت در
                هتل ها و اقامتگاههای استاندارد فراهم نمیگردد.
              </p>
              <img
                loading="lazy"
                className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950"
                src="/images/about/about_img6.jpg"
                alt=""
              />
              <p className="text-justify pt-5 text-lg leading-7 text-gray-700 dark:text-gray-400">
                این کسب و کار به گونه ای طراحی گردیده تا گردشگران با اقامت در
                خانه هایی راحت, جذاب و دوست داشتنی که معمولا با حضور صاحب
                اقامتگاه نیز همراه می‌شود , موقعیت های دوستانه و زمان خوبی را
                تجربه کنند
              </p>
            </div>
            <div
              className="max-md:mx-auto"
              data-aos="fade-left"
              data-aos-duration="4000"
            >
              <img
                loading="lazy"
                className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 md:w-[800px]"
                src="/images/about/about_img5.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex w-full items-center justify-between gap-16 max-md:flex-col-reverse">
            <div
              className="flex flex-col items-center max-md:flex-col-reverse"
              data-aos="fade-right"
              data-aos-duration="4000"
            >
              <p className="text-justify pb-5 text-lg leading-7 text-gray-700 dark:text-gray-400 max-md:pt-5">
                و در این فضای صمیمی با مشارکت در زندگی روزمره مردم محلی , از
                آداب و رسوم , لباس ها , غذاها و جشنهای محلی بهره ببرند{' '}
              </p>
              <img
                loading="lazy"
                className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 md:w-64"
                src="/images/about/about_img7.jpg"
                alt=""
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="4000">
              <img
                loading="lazy"
                className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950"
                src="/images/about/about_img8.jpg"
                alt=""
              />
              <p className="text-justify pt-5 text-lg leading-7 text-gray-700 dark:text-gray-400">
                خلق چنین موقعیتی به دلیل ایجاد حسی مشابه با بودن در خانه دوستان
                و اقوام, به طور معنی داری سبب افزایش رضایت گردشگران و همچنین
                افزایش میزان اقامت ایشان در مقاصد گردشگری می‌شود{' '}
              </p>
            </div>
          </div>
          <div className="flex w-full items-center gap-16 max-md:flex-col-reverse">
            <div
              className="flex-1"
              data-aos="fade-right"
              data-aos-duration="4000"
            >
              <p className="text-justify pb-5 text-lg leading-7 text-gray-700 dark:text-gray-400">
                بهره گیری از طعم خوش غذا های محلی که با مواد اولیه سالم و
                ارگانیک تهیه شده اند از دیگر مزایای اقامت در کنار مردم محلی است.
              </p>
            </div>
            <div
              className="flex-1"
              data-aos="fade-left"
              data-aos-duration="4000"
            >
              <img
                loading="lazy"
                className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950"
                src="/images/about/about_img9.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <div className="container">
          <div data-aos="fade-up">
            <img
              loading="lazy"
              src="/images/about/about_img10.jpg"
              alt=""
              className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950"
            />
          </div>
        </div>
        <section className="container flex flex-col gap-24 py-16 lg:w-2/3">
          <div className="flex w-full items-center max-md:flex-col-reverse">
            <div
              className="flex-1"
              data-aos="fade-left"
              data-aos-duration="4000"
            >
              <img
                loading="lazy"
                className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 md:w-72"
                src="/images/about/about_img11.jpg"
                alt=""
              />
            </div>
            <div
              className="flex-1"
              data-aos="fade-right"
              data-aos-duration="4000"
            >
              <h3 className="mb-5 text-2xl dark:text-white">
                تنوع در انتخاب محل اقامت
              </h3>

              <p className="text-justify pb-5 text-lg leading-7 text-gray-700 dark:text-gray-400">
                این کسب و کار , هر گونه اقامتگاه قابل سکونتی که برای گردشگران
                جذاب باشد را به مخاطبان خود ارائه می کند , می خواهد یک کلبه چوبی
                دنج در کنار دریاچه ای کوهستانی باشد یا اتاقی کوچک در خانه ی
                مادری سختکوش در روستایی دور و یا ویلایی مجلل با باغهایی وسیع در
                شمال کشور.{' '}
              </p>
            </div>
          </div>

          <div className="flex w-full items-center gap-16 max-md:flex-col">
            <div
              className="flex-1"
              data-aos="fade-right"
              data-aos-duration="4000"
            >
              <p className="text-justify pb-5 text-lg leading-7 text-gray-700 dark:text-gray-400">
                مهم آن است که گردشگر بتواند مکان مناسب با سلیقه , بودجه و علاقه
                خود را به سهولت یافته و به صورت اینترنتی رزرو کند و در زمان مورد
                نظر با خیالی آسوده به مکان اجاره شده رفته و اقامت خوبی را چنانکه
                انتظار داشته تجربه کند
              </p>
            </div>
            <div
              className="max-xl:flex-1"
              data-aos="fade-left"
              data-aos-duration="4000"
            >
              <img
                loading="lazy"
                className="w-[500px] rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950"
                src="/images/about/about_img12.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="container flex flex-col py-5 lg:w-2/3">
          <div className="flex w-full items-center gap-16 max-md:flex-col-reverse">
            <div>
              <img
                loading="lazy"
                data-aos="fade-down"
                data-aos-duration="4000"
                className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950"
                src="/images/about/about_img13.jpg"
                alt=""
              />
            </div>
            <div>
              <p
                data-aos="fade-down"
                data-aos-duration="4000"
                className="text-justify pb-5 text-lg leading-7 text-gray-700 dark:text-gray-400"
              >
                تنوع مکانهای اقامتی این کسب و کار به وسعت تنوع سکونتگاه های
                سرزمین ایران است. سکونتگاه هایی واقع در شهر و روستا و ساحل دریا
                تا جنگل و کویر و مزارع زیبا
              </p>
            </div>
          </div>
          <div>
            <img
              loading="lazy"
              data-aos="fade-down"
              data-aos-duration="4000"
              className="mx-auto rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 max-md:my-5 md:-mt-14 md:w-60"
              src="/images/about/about_img14.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              data-aos="fade-down"
              data-aos-duration="4000"
              className="rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-950 max-md:mx-auto md:float-end md:-mt-10 md:w-60"
              src="/images/about/about_img15.jpg"
              alt=""
            />
          </div>
        </section>
        <section className="container max-md:mt-10 lg:w-2/3">
          <div className="max-md:text-justify md:w-[450px]">
            <h3 className="mb-5 text-2xl dark:text-white">کسب و کار جاجیگا</h3>
            <p className="my-8 text-lg leading-7 text-gray-700 dark:text-gray-400">
              کسب و کار جاجیگا مبتنی است برفناوری اطلاعات و ارتباطات , لذا با
              ساز و کاری مبتنی بر وب به بازاریابی , بازارسازی و فروش اینترنتی
              خدمات خود می پردازد
            </p>
          </div>
          <p className="mx-auto my-8 text-lg leading-7 text-gray-700 dark:text-gray-400 max-md:text-justify md:w-[450px]">
            ما قصد داریم از طریق وبسایت “جاجیگا” بستری جذاب و امن را فراهم آوریم
            تا صاحبان خانه ها /ویلاها/آپارتمان ها/کلبه ها و سایر اماکن مسکونی
            بتوانند ملک مبله خود را در تاریخی که خود تعیین می کنند و با شرایط و
            نرخی که خود معین می کنند, جهت اجاره موقت و روزانه در اختیار گردشگران
            داخلی و خارجی قرار دهند. گردشگرانی که اقامت در خانه های شخصی را به
            اقامت در هتل ها ترجیح می دهند.
          </p>
          <div className="my-8 flex justify-end">
            <p className="text-lg leading-7 text-gray-700 dark:text-gray-400 max-md:text-justify md:w-[450px]">
              کسب و کار “جاجیگا” سازو کاری پیشرفته و پیشرو می‌باشد که قصد دارد
              با بهره گیری از آخرین فناوریهای حال حاضر دنیای وب, فضایی کاربردی و
              جذاب را برای کاربران خود مهیا سازد و بدین وسیله فرصت مغتنمی را
              برای کسب روزی حلال , در امنیت کامل و به صورت قانونی , برای هزاران
              نفر از مردمان میهمان نواز این سرزمین کهن فراهم آورد.
            </p>
          </div>
        </section>

        <div className="container flex flex-col items-center justify-center gap-5 border-t border-t-gray-800 py-10 pt-5 text-center dark:border-t-gray-200 dark:text-gray-400">
          <p>
            صاحب امتیاز: شرکت تجارت الکترونیک لوتوس آرمانی (سهامی خاص). شماره
            ثبت: ۱۳۷۸
          </p>
          <p>کد پستی: 4481836181 ‌‌‌‌‌‌‌شماره تماس: 01391001391</p>
          <p>
            آدرس: پارک علم و فناوری گیلان- مرکز رشد رودسر- محله 72 تن - خيابان
            بسيج مستضعفين - خيابان شهداي گمنام - پلاك 0- طبقه اول
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
