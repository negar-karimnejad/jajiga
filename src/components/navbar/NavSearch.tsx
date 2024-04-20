import { IoIosSearch } from 'react-icons/io';

function NavSearch() {
  return (
    <form className="max-w-7xl flex-1 max-sm:w-48">
      <label className="relative flex w-full rounded-full border p-2 ">
        <input
          type="text"
          className="grow outline-none"
          placeholder="میخوای کجا بری؟"
        />
        <IoIosSearch size={25} className='absolute left-2' />
      </label>
    </form>
  );
}

export default NavSearch;
