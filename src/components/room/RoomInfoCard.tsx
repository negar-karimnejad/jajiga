function RoomInfoCard({
  premium,
  fastbooking,
}: {
  premium: boolean;
  fastbooking: boolean;
}) {
  return (
    <div className="mt-2 flex flex-col items-center gap-2">
      {premium && (
        <div className="premium relative w-20 rounded-full bg-white px-1 py-0.5 font-vazirBold text-[11px] text-black">
          ✨ ممتــــــــاز
          <div className="premium-dis invisible absolute right-0 z-20 top-8 w-40 rounded-md bg-white/95 p-1 text-[12px] shadow-md transition-all after:absolute after:-top-1.5 after:right-2 after:h-3 after:w-3 after:rotate-45 after:bg-white/85">
            اقامتگاهی با کیفیت با میزبانی مهمان نواز که اقامتی شایسته را برایتان
            تضمین می کند.
          </div>
        </div>
      )}
      {fastbooking && (
        <div className="premium relative w-20 rounded-full bg-yellow-400 px-1 py-0.5 font-vazirBold text-[11px] text-black">
          ⚡ رزرو فوری
          <div className="premium-dis invisible absolute right-0  z-20 top-8 w-40 rounded-md bg-white/95 p-1 text-[12px] shadow-md transition-all after:absolute after:-top-1.5 after:right-2 after:h-3 after:w-3 after:rotate-45 after:bg-white/85">
            این اقامتگاه در تاریخ های مشخص شده در تقویم، بدون تایید میزبان قابل رزرو است.
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomInfoCard;
