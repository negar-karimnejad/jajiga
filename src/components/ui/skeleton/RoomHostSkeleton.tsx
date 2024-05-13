function RoomHostSkeleton() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-6  w-72"></div>
          <div className="skeleton h-6 w-96"></div>
          <div className="skeleton h-6 w-96"></div>
        </div>
        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
      </div>
    </div>
  );
}

export default RoomHostSkeleton;
