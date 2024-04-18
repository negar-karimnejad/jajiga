import { IoIosSearch } from 'react-icons/io';

function NavSearch() {
  return (
    <form className="flex max-w-7xl flex-1 flex-col items-center justify-center gap-4">
      <label className="flex w-full rounded-full border p-2 ">
        <input
          type="text"
          className="grow outline-none"
          placeholder="میخوای کجا بری؟"
        />
        <IoIosSearch size={25} />
      </label>
    </form>
  );
}

export default NavSearch;
