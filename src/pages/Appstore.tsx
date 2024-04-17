function Appstore() {
  return (
    <div className="bg-[#f0c807]">
      <div className="container flex flex-col items-center justify-center gap-3">
        <img src="/images/app-store/phone.png" className="w-80" alt="phone" />
        <h3>نصب اپلیکیشن جاجیگا</h3>
        <p>بیش از 21000 اقامتگاه در دستان شماست</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          <img
            src="/images/app-store/Bazzar.png"
            className="h-12 w-56 rounded-md bg-black object-contain"
            alt="phone"
          />
          <img
            src="/images/app-store/PlayStore.png"
            className="h-12 w-56 rounded-md bg-black object-contain"
            alt="phone"
          />
          <img
            src="/images/app-store/Myket.png"
            className="h-12 w-56 rounded-md bg-black object-contain"
            alt="phone"
          />
          <img
            src="/images/app-store/WebApp.png"
            className="h-12 w-56 rounded-md bg-black object-contain"
            alt="phone"
          />
        </div>
      </div>
    </div>
  );
}

export default Appstore;
