function RoomAccessibility() {
  const scrollToRef = (ref: HTMLElement | null) => {
    ref?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="sticky top-20 z-30 flex h-14 items-center justify-between rounded-b-lg bg-black/80 px-8 py-3 shadow-lg max-md:hidden">
      <ul className="flex items-center gap-8 text-sm text-white">
        <li className="cursor-pointer" onClick={() => scrollToTop()}>
          تصاویر
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToRef(document.getElementById('featuresRef'))}
        >
          مشخصات
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToRef(document.getElementById('calenderRef'))}
        >
          نرخ
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToRef(document.getElementById('mapRef'))}
        >
          نقشه
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToRef(document.getElementById('commentsRef'))}
        >
          نظرات
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToRef(document.getElementById('hostRef'))}
        >
          میزبان
        </li>
      </ul>
    </div>
  );
}

export default RoomAccessibility;
