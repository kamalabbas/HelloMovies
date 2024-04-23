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
      <div className="flex gap-10">
        <div className="">
          <SekeltonCard count={1} width={23.125}/>
        </div>
        <div className="details w-full">
          <SkeletonText count={4} />
        </div>
      </div>
    );
  

  if (!isLoading) {
    return (
      <>
        {/* style={{backgroundImage: `url(${Imagehandler(data?.backdrop_path!)})`}} */}
        <div className="flex gap-10 bg-cover bg-no-repeat bg-center">
          <div className="">
            <img
              className="max-h-[28.125rem]"
              src={Imagehandler(data?.poster_path!)}
              alt=""
            />
          </div>
          <div className="details">
            <div className="flex gap-4">
              <h1>{data?.title}</h1> ({data?.release_date.substring(0, 4)})
            </div>

            <h2>{data?.tagline}</h2>

            <div>
              <h2>Overview</h2>
              <p>{data?.overview}</p>
            </div>
          </div>
        </div>

        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${
              videos?.results.find((item) => item.type == "Trailer")?.key
            }`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </>
    );
  }
};
