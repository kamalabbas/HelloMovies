import { Link } from "react-router-dom";
import { Movie } from "../entities/Movie";
import { Series } from "../entities/Series";
import { Imagehandler } from "../services/imageHandler";

interface Props {
  item: Movie | Series;
}

export const MovieCardComponent = ({ item }: Props) => {
  return (
    <Link to={`/movie/${item.id}`}>
      <div className="bg-dark text-white border-0 shadow overflow-hidden">
        <img className="object-cover h-auto aspect-[1/1.5]" src={ Imagehandler(item.poster_path!)} alt="Card image"/>
        <div className="h-100 d-flex xx">
          {/* <Card.Title className="text-center mt-auto w-100 m-0 z-1">
            <h2>{item.title || item.name}</h2>
          </Card.Title> */}
          {/* <div className="genere z-1">genere</div> */}
        </div>
        <div className="position-absolute bottom-0 h-100 w-100 overlay-color d-none"></div>
      </div>
    </Link>
  );
};
