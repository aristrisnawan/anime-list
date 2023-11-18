import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/Header";

const page = async ({params}) => {
  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`,
    { cache: "no-store" }
  );
  const searchAnime = await response.json();
  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword} ...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default page;