import { Link } from 'react-router-dom';

const QuickSearchLinks = [
  { to: '/s/shomal', title: 'اجاره ویلا شمال' },
  { to: '/s/wooden-cottage', title: 'اجاره کلبه چوبی' },
  { to: '/s/ramsar', title: 'اجاره ویلا رامسر' },
  { to: '/s/pool', title: 'اجاره ویلا استخردار' },
  { to: '/s/mashhad', title: 'سوئیت مشهد' },
  { to: '/s/kordan', title: 'اجاره ویلا کردان' },
  { to: '/s/masal', title: 'اجاره ویلا ماسال' },
  { to: '/s/kish', title: 'اجاره سوئیت در کیش' },
  { to: '/s/tehransuburb', title: 'اجاره ویلا اطراف تهران' },
  { to: '/s/istanbul', title: 'اجاره سوئیت استانبول' },
  { to: '/s/savadkuh', title: 'اجاره ویلا سواد کوه' },
  { to: '/s/qeshm', title: 'سوئیت قشم' },
  { to: '/s/anzali', title: 'اجاره ویلا انزلی' },
  { to: '/s/chalus', title: 'اجاره ویلا چالوس' },
  { to: '/s/tehran', title: 'اجاره سوئیت در تهران' },
  { to: '/s/shiraz', title: 'اجاره سوئیت در شیراز' },
  { to: '/s/rasht', title: 'اجاره ویلا رشت' },
  { to: '/s/filband', title: 'اجاره ویلا در فیلبند' },
  { to: '/s/esfahan', title: 'اجاره سوئیت در اصفهان' },
  { to: '/s/mahmudabad', title: 'اجاره ویلا محمودآباد' },
  { to: '/s/shomal/pool', title: 'ویلا استخردار شمال' },
  { to: '/s/ecolog', title: 'رزرو اقامتگاه بوم گردی' },
  { to: '/s/villa', title: 'اجاره ویلا' },
  { to: '/s/gilan', title: 'اجاره ویلا گیلان' },
  { to: '/s/shomal/beach', title: 'اجاره ویلا ساحلی شمال' },
];

function QuickSearch() {
  return (
    <div>
      <p className="text-center font-vazirBold text-sm text-gray-700 md:hidden">
        جستجوی سریع
      </p>
      <div className="overflow-auto py-4">
        <div className="flex w-[760px] flex-wrap gap-2">
          {QuickSearchLinks.map((link, index) => (
            <Link
              key={index}
              className="w-36 rounded-full bg-white px-2 py-1 font-vazirMedium text-[12px] text-gray-500 shadow"
              to={link.to}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickSearch;
