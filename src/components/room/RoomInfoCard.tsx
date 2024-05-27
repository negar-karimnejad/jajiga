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
        <div className="relative w-20 rounded-full bg-white px-1 py-0.5 font-vazirBold text-[11px] text-black">
          ✨ ممتــــــــاز
          <div className="group">
            <div className="absolute right-0 top-8 w-40 invisible rounded-md bg-white/95 p-1 text-[12px] shadow-md after:absolute after:-top-1.5 after:right-2 after:h-3 after:w-3 after:rotate-45 after:bg-white/85 group-hover:visible">
              اقامتگاهی با کیفیت با میزبانی مهمان نواز که اقامتی شایسته را
              برایتان تضمین می کند.
            </div>
          </div>
        </div>
      )}
      {fastbooking && (
        <p className="w-20 rounded-full bg-yellow-400 px-1 py-0.5 font-vazirBold text-[11px] text-black">
          <span>⚡</span> رزرو فوری
        </p>
      )}
    </div>
  );
}

export default RoomInfoCard;
