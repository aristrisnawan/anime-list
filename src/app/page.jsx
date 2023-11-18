import AnimeList from "@/app/components/AnimeList";
import Header from "./components/AnimeList/Header";

const page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`,
    { cache: "no-store" }
  );
  const topAnime = await response.json();
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
