function Skeleton() {
  return (
    <div className="col-span-12 flex h-80 w-full flex-col gap-4 sm:col-span-6 lg:col-span-4">
      <div className="skeleton h-40 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}

export default Skeleton;
