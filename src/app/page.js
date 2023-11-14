import AnimeList from "@/app/components/AnimeList";
import Link from "next/link";

const page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`,
    { cache: "no-store" }
  );
  const anime = await response.json();
  console.log(anime);
  return (
    <div>
      <div className="p-4 flex justify-between items-center">
      <h1 className=" text-2xl font-bold">Paling Populer</h1>
      <Link href="/" className="md:text-xl text-md underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
      <div className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map((datas, idx) => {
          return (
            <div key={idx} className=" shadow-xl">
              <AnimeList
                title={datas.title}
                images={datas.images.webp.image_url}
                id={datas.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
