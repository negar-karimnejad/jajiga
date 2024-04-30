function RoomHeader() {
  return (
    <div>
      <div className="group flex min-h-[68px] cursor-pointer gap-2 grayscale-0 transition-all">
        <div className="flex-1">
          <img
            className="h-full w-full rounded-lg object-cover hover:grayscale-0 group-hover:grayscale"
            src="/images/room/1.png"
            alt=""
          />
        </div>
        <div className="flex flex-1 gap-2">
          <div className="flex flex-col gap-2">
            <img
              className="h-full w-full rounded-lg object-cover hover:grayscale-0 group-hover:grayscale"
              src="/images/room/1.png"
              alt=""
            />
            <img
              className="h-full w-full rounded-lg object-cover hover:grayscale-0 group-hover:grayscale"
              src="/images/room/1.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <img
              className="h-full w-full rounded-lg object-cover hover:grayscale-0 group-hover:grayscale"
              src="/images/room/1.png"
              alt=""
            />
            <img
              className="h-full w-full rounded-lg object-cover hover:grayscale-0 group-hover:grayscale"
              src="/images/room/1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomHeader;
