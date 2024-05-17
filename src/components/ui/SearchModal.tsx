function SearchModal({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`fixed right-0 top-0 z-50 h-screen w-full bg-black/60 transition-all duration-500 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 top-0 w-full rounded-lg bg-white py-10 shadow transition-all duration-500 dark:text-white  ${isOpen ? '' : ''}`}
      >
        <div>search</div>
      </div>
    </div>
  );
}

export default SearchModal;
