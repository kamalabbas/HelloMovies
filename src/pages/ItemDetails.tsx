import useItemDetails from "../hooks/useItemDetails";
import { useParams } from "react-router-dom";
import { Imagehandler } from "../services/imageHandler";
import { useVideos } from "../hooks/useVideos";
import { SekeltonCard } from "../component/SekeltonCard";
import { SkeletonText } from "../component/SkeletonText";
import { getColorFromImage } from "../services/getCommonImageColor";

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
        <div className="bg-cover bg-no-repeat relative" style={{backgroundImage: `url(${Imagehandler(data?.backdrop_path!, 'large')})`, backgroundPosition: `left calc((35vw - 170px) - 340px) top`}}>
          <div className="absolute inset-0 bg-gradient-to-r from-opacity-100 via-opacity-84 to-opacity-84 z-0" style={{backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) calc((35vw - 170px) - 340px), rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0.45) 100%)'
      }}></div>

          <div className="container flex gap-10 py-8 z-10 relative text-white">
            <div className="shrink-0 max-w-[18.75rem]">
              <img className="rounded-xl" src={Imagehandler(data?.poster_path!)} alt="alt"/>
            </div>
            <div className="details">
                <div className="flex gap-2 items-center">
                  <h1 className="font-bold">{data?.title}</h1><span className="text-3xl opacity-60">({data?.release_date.substring(0, 4)})</span>
                </div>
                <div className="mt-2">
                  {data?.release_date} - <span className="">{data?.genres.map((genre, i) => <span key={genre.id}>{genre.name}{(i != data?.genres.length - 1 ) && ','} </span>)}</span> - {data?.runtime ? `${Math.floor(data?.runtime/60)}h ${Math.ceil((data?.runtime - 60 * Math.floor(data?.runtime/60)))}m` : ''}
                </div>


              <h2 className="mt-6 italic opacity-60">{data?.tagline}</h2>

              <div className="mt-2">
                <h2 className="font-bold">Overview</h2>
                <p className="mt-2">{data?.overview}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-12">
          <iframe className="w-full aspect-video" style={{maxWidth:'100%'}} src={`https://www.youtube.com/embed/${videos?.results.find((item) => item.type == "Trailer")?.key}`} title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    );
  }
};
