import AnimeList from "@/app/components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/api-libs";

const page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = reproduce(recomendedAnime,8)
  return (
    <>
      {/* anime populer */}
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
};

export default page;
