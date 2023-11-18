"use client";

import HeaderMenu from "@/app/components/Utilities/HeaderMenu";
import Pagination from "@/app/components/Utilities/Pagination";
import AnimeList from "@/app/components/AnimeList";
import { useEffect, useState } from "react";

const Populer = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`,
      { cache: "no-store" }
    );
    const topAnime = await response.json();
    setData(topAnime);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList api={data} />
      <Pagination page={page} setPage={setPage} lastPage={data?.pagination?.last_visible_page} />
    </>
  );
};

export default Populer;
