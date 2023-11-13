import AnimeList from "@/app/components/AnimeList";

const page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`,
    { cache: "no-store" }
  );
  const anime = await response.json();
  console.log(anime);
  return (
    <div>
      <h1>Paling Populer</h1>
      <div className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {anime.data.map((datas, idx) => {
          return (
            <div key={idx} className=" shadow-xl">
              <AnimeList
                title={datas.title}
                images={datas.images.webp.image_url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
