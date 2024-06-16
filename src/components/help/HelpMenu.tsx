import { helpComments } from '../../data/data';
import HelpComment from './HelpComment';
import HelpMenuHeader from './HelpMenuHeader';

interface HelpMenuProps {
  isActive: number;
  resetActive: () => void;
  modal?: boolean;
}

function HelpMenu({ isActive, resetActive, modal }: HelpMenuProps) {
  return (
    <div className="col-span-7 text-justify leading-8 max-sm:col-span-12">
      {isActive === 0 && (
        <>
          <h2
            className={`text-xl ${modal ? 'absolute right-0 top-0 w-full bg-yellow-400 p-2 pb-2 text-gray-700' : 'pb-10 text-gray-400  dark:text-gray-200'}`}
          >
            راهنمای جاجیگا
          </h2>
          <article className="flex flex-col gap-5 pt-5 dark:text-gray-400">
            <p>
              <strong className="dark:text-white">
                کسب و کاری بر اساس به اشتراک گذاشتن اقامتگاه‌های شخصی و مردمی
              </strong>
            </p>
            <p>
              جاجیگا، پلتفرمی ست که در آن صاحبان اقامتگاه‌ها، فضای اقامتی بیش از
              نیاز روزمره خود را با خاطری آسوده، در روزهایی از سال، با بهایی
              مناسب و با شرایط مد نظر خود، در اختیار گردشگران و میهمانان
              علاقه‌مند می گذارند. برای این کار، میزبانان می‌بایست، اقامتگاه‌های
              خود را، طی مراحلی مشخص و آسان‌سازی شده، با جزییات کامل ثبت کنند.
              جزییاتی همچون مشخصات، مکان جغرافیایی، امکانات فراهم شده، خدمات
              قابل ارائه، عکس‌های گویا از داخل و خارج اقامتگاه، مقررات خاص
              اقامتگاه، تقویم کاری، ساعات تحویل و تخلیه اقامتگاه، اجاره بها به
              تفکیک هر روز/شب و غیره …
            </p>
            <p>
              با فراهم بودن اطلاعات کامل اقامتگاه‌ها در وبسایت، تمام عملیات مورد
              نیاز کاربران از قبیل: جستجو، مقایسه و رزرو اقامتگاه و همچنین
              پرداخت وجوه، در داخل وبسایت و به‌صورت آنلاین انجام می‌شود و لذا
              دیگر نیازی به تماسهای مکرر و مذاکرات احتمالی بر روی نرخ اجاره و
              شرایط رزرو نخواهد بود و گردشگران می توانند با اطمینان کامل و در
              منزل خود، اقامتگاه محبوب خود را یافته و میهمان شوند.
            </p>
            <p>
              تقریبا هر نوع اقامتگاه خصوصی و مردمی در جاجیگا قابل ثبت و ارائه به
              گردشگران می‌باشد، اقامتگاه‌هایی همچون: ویلا، سوئیت، کلبه، خانه
              روستایی، آپارتمان، چادر/خیمه، اقامتگاه بوم گردی، کاروانسرا،
              پانسیون، Boutique Hotel، قایق و هر اقامتگاه قابل سکونت و مهیا برای
              اقامت گردشگران.
            </p>
            <p>
              <strong className="dark:text-white">
                محیطی امن، لذت بخش و حرفه ای، برای اجاره روزانه اقامتگاه‌ها
                به‌صورت آنلاین
              </strong>
            </p>
            <p>
              جاجیگا، به اشتراک گذاشتن اماکن اقامتی را برای کاربران، آسان، لذت
              بخش و امن می‌کند.
            </p>
            <ul>
              <li>
                <p>
                  رویه‌ای کاری و چهارچوب‌های تعاملی تعریف شده از منافع کاربران
                  حفاظت می‌کند.
                </p>
              </li>
              <li>
                <p>سیستم داخلی پیام‌رسان، ارتباط داخلی اعضا را تسهیل می‌کند.</p>
              </li>
              <li>
                <p>
                  سیستم پرداخت داخلی و درگاه‌های امن بانکی، امنیت نقل و انتقال
                  وجوه را تضمین می‌کند.
                </p>
              </li>
              <li>
                <p>
                  با تأیید حساب کاربری افراد پیش از شروع مبادله، اعتماد و تعامل
                  مابین کاربران افزایش می یابد.
                </p>
              </li>
            </ul>
            <p>
              <strong className="dark:text-white">
                خدمات شبانه روزی به کاربران
              </strong>
            </p>
            <p>
              قصد سفر دارید و یا می‌خواهید میزبانی کنید، در هر صورت ما، قبل، بعد
              و در حین سفر و دوره اقامت، در کنارتان خواهیم بود و شما را در
              تجربیات تان همراهی خواهیم کرد.
            </p>
            <p>
              پاسخ بیشتر سوالات شما درباره جاجیگا در بخش «راهنما»ی سایت فراهم
              شده است، برای هرآنچه که نیافتید.
            </p>
            <p>
              <a href="/support">با ما تماس بگیرید</a>
            </p>
          </article>
        </>
      )}
      {isActive === 1 && (
        <>
          <HelpMenuHeader
            heading="چطور شروع کنم؟"
            resetActive={resetActive}
            modal={modal}
          />
          <article className="flex flex-col gap-5 pt-5 text-gray-600 dark:text-gray-400">
            <p>
              <strong className="text-gray-800 dark:text-white">
                چه بخواهید میهمان شوید و اقامتگاهی را رزرو کنید و چه بخواهید
                میزبانی را آغاز کنید و یا هردو این‌ها با هم، باید ابتدا یک "حساب
                کاربری"، برای خود درست کنید.
              </strong>
            </p>
            <p>
              با داشتن یک حساب کاربری، در واقع برای سیستم قابل شناسایی می‌شوید و
              پنلی برای مدیریت امور خود همچون ثبت اقامتگاه‌های مورد علاقه / رزرو
              اقامتگاه / ثبت اقامتگاه / امتیازدهی و ثبت نظرات راجع به
              اقامتگاه‌ها / پرداخت آنلاین / دریافت پیامک‌های اطلاع رسان / دریافت
              اعلانات ضروری مرتبط با رزرو / دریافت سند کامل رزرواسیون / مکالمه
              داخلی با میزبانان و میهمانان / دریافت اعتبار هدیه/ ثبت وآرشیو
              تمامی تراکنش‌های مالی و یا معاملات داخلی و غیره …
            </p>
            <p>
              بعد از اینکه حساب کاربری خود را ایجاد کردید سطح کاربری شما مبتدی
              خواهد بود و با در اختیار گرفتن پنل مدیریت حساب خود می‌توانید امور
              ابتدایی را به انجام برسانید و همچنین در صورت تمایل، می‌توانید
              اقامنگاه خود را برای اجاره ثبت کنید و به&nbsp;
              <strong className="text-gray-800 dark:text-white">
                اجتماع میزبانان جاجیگا
              </strong>
              &nbsp;بپیوندید.
            </p>
            <p>
              در صورتی که بخواهید اقامتگاهی که ثبت کرده‌اید را در وبسایت
              <strong className="text-gray-800 dark:text-white">منتشر</strong>
              &nbsp;کنید، ابتدا می‌بایست با درج اطلاعات هویتی حساب کاربری خود را
              به سطح&nbsp;
              <strong className="text-gray-800 dark:text-white">
                تأیید شده
              </strong>
              &nbsp;ارتقا دهید.
            </p>
            <p>
              برای این کار می‌بایست اطلاعات حساب کاربری خود را تکمیل کنید. پس از
              تأیید اطلاعات ثبت شده شما توسط کارشناس جاجیگا، می‌توانید بطور کامل
              از امکانات وبسایت استفاده کنید.
            </p>
            <p>ایجاد و ارتقاء سطح حساب کاربری، کاملا رایگان می‌باشد.</p>
            <p>
              برای رزرو یک اقامتگاه، پس از یافتن اقامتگاه مورد علاقه خود،
              یک&nbsp;
              <strong className="text-gray-800 dark:text-white">
                درخواست رزرو
              </strong>
              &nbsp;ثبت کنید، برای این کار می‌بایست در صفحه اقامتگاه تاریخ ورود
              و خروج، تعداد میهمانان را وارد نموده و درخواست خود را ثبت کنید. در
              صورت قبول درخواست شما توسط میزبان، می‌بایست مبلغ صورتحساب را
              پرداخت کرده تا رزرو قطعی شود.
            </p>
            <p>
              پس از قطعی شدن رزرو، به‌صورت خودکار&nbsp;
              <strong className="text-gray-800 dark:text-white">
                سند رزروی
              </strong>
              &nbsp;حاوی تمامی اطلاعات مورد نیاز از قبیل، مشخصات و شماره تماس
              میهمان و میزبان، مشخصات و آدرس دقیق اقامتگاه، صورتحساب و مبالغ
              پرداخت شده ، مقررات منزل و غیره … برای طرفین رزرو ارسال می‌شود که
              مبنی تعامل دو طرف در روزهای رزرو خواهد بود.
            </p>
            <p>
              <strong className="text-gray-800 dark:text-white">
                صبح روز بعد از ورود میهمان و تحویل اقامتگاه
              </strong>
              ، مبلغ اجاره بها، به‌صورت خودکار، پس از کسر کارمزد به حساب بانکی
              میزبان واریز می‌شود.
            </p>
            <p>
              پاسخ بیشتر سوالات شما درباره جاجیگا در بخش&nbsp;
              <strong className="text-gray-800 dark:text-white">راهنمای</strong>
              &nbsp;سایت فراهم شده است، برای هرآنچه که نیافتید&nbsp;
              <a href="/support">با ما تماس بگیرید</a>
            </p>
          </article>
        </>
      )}
      {isActive === 2 && (
        <>
          <HelpMenuHeader
            heading="نظرات"
            resetActive={resetActive}
            modal={modal}
          />
          <ul className="dark:text-gray-400">
            {helpComments.map((comment) => (
              <HelpComment key={comment.id} {...comment} />
            ))}
          </ul>
        </>
      )}
      {isActive === 3 && (
        <>
          <HelpMenuHeader
            heading="ارتباط با ما"
            resetActive={resetActive}
            modal={modal}
          />
          <article className="flex flex-col gap-5 pt-5 text-gray-700 dark:text-gray-400">
            <p>
              ما مشتاقانه منتظر دریافت هرگونه نظر، پیشنهاد و یا انتقاد شما از
              خدماتی که از جاجیگا دریافت کرده‌اید هستیم.
            </p>
            <ul>
              <li>
                به ما بگویید از چه چیزی خوشتان آمده، وجود کدام بخش، شما را
                خوشحال کرده؟
              </li>
              <li>
                یا اینکه، فکر می‌کنید در کدام قسمت می توانیم خدمت بهتری را، به
                شیوه‌ای متفاوت به شما ارائه دهیم؟
              </li>
            </ul>
            <p>
              ما ممکن است نتوانیم به همه پیام‌های شما پاسخ دهیم، ولیکن مطئن
              باشید که خط به خط پیام‌های ارزشمند شما را به دقت مطالعه می کنیم و
              برای ارتقا خدمات جاجیگا و با هدف کسب رضایت روزافزون شما، بکار می
              گیریم.
            </p>
            <p>
              برای ارسال بازخورد، ابتدا به حساب کاربری خود وارد شوید و سپس{' '}
              <a
                className="text-blue-600"
                href="https://https://jajiga-nu.vercel.app/support"
              >
                پشتیبانی
              </a>{' '}
              را کلیک کنید.
            </p>
          </article>
        </>
      )}
    </div>
  );
}

export default HelpMenu;
