import AnimeList from "@/app/components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const page = async () => {
  const topAnime = await getAnimeResponse('top/anime','limit=8')
  return (
    <>
      {/* anime populer */}
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default page;
