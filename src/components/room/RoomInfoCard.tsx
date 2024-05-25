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
        <p className="w-20 rounded-full bg-white px-1 py-0.5 font-vazirBold text-[11px] text-black">
          ✨ ممتــــــــاز
        </p>
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
