"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  };
  return (
    <div className=" relative">
      <form>
        <input
          placeholder="cari anime . . ."
          className=" p-2 rounded w-full"
          ref={searchRef}
          onkeypress={handleSearch}
        />
        <button className=" absolute top-2 end-1" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
