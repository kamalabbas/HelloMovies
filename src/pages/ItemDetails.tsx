import useItemDetails from "../hooks/useItemDetails";
import { useParams } from "react-router-dom";
import { Imagehandler } from "../services/imageHandler";
import { useVideos } from "../hooks/useVideos";
import { SekeltonCard } from "../component/SekeltonCard";
import { SkeletonText } from "../component/SkeletonText";

export const ItemDetails = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useItemDetails(id!);
  const { data: videos } = useVideos(+id!);

  if (error) throw error;

  if(isLoading)
    return (
      <div className="flex gap-10 container">
        <div className="">
          <SekeltonCard count={1} width={18.75}/>
        </div>
        <div className="details w-full">
          <SkeletonText count={6} />
        </div>
      </div>
    );


  if (!isLoading) {
    return (
      <div>
        <div className="bg-cover bg-no-repeat bg-center relative" style={{backgroundImage: `url(${Imagehandler(data?.backdrop_path!, 'large')})`}}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black z-0"></div>

          <div className="container flex gap-10 py-8 z-10 relative">
            <div className="max-w-[18.75rem]">
              <img className="rounded-xl"
                src={Imagehandler(data?.poster_path!)}
                alt=""
              />
            </div>
            <div className="details">
              <div className="flex gap-2">
                <h1>{data?.title}</h1><span>({data?.release_date.substring(0, 4)})</span>
              </div>

              <h2>{data?.tagline}</h2>

              <div>
                <h2>Overview</h2>
                <p>{data?.overview}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-12">
          <iframe
            width="560"
            height="315"
            style={{maxWidth:'100%'}}
            src={`https://www.youtube.com/embed/${
              videos?.results.find((item) => item.type == "Trailer")?.key
            }`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    );
  }
};
