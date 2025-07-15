import { type FC } from "react";
import { IMG_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { type Movie } from "../../../types";
import "./style.scss";

type Props = {
  movies: Movie[]
  text?: string;
  type: "grid" | "slides";
  container: "container-grid" | "container-slides";
  card: "card-grid-img" | "card-slides-img"
}


const GridMovies: FC<Props> = ({ movies, text, type, container, card }) => {
  const navigate = useNavigate();

  return (
    <div className={type}>
      <h2 className="title">{text}</h2>
      <div className={container}>
        {movies?.map((movie: any) => (
          <img
            className={card}
            key={movie.id}
            onClick={() => navigate(`/movies/${movie.id}`)}
            src={`${IMG_URL + movie.poster_path}`} 
            id={movie.id}           
          />
        ))}
      </div>
    </div>
  );
};
export { GridMovies };