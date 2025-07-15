

import { BannerCarousel } from "../../components/common/banner-carrousell";
import { Layout } from "../../components/layout/Layout";
import { withAuth } from "../../hoc/withAuth";
import { movieServices } from "../../services/movies";
import { useEffect, useState } from "react";
//import type { Movie } from "../../types";

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  //const [popular, setPopular] = useState<Movie[]>([]);
  //const [top, setTop] = useState<Movie[]>([]);

  useEffect(() => {
    movieServices.getUpcoming().then(response => setMovies(response.splice(0, 5)))
    //movieServices.getPopular().then(response => setPopular(response))
    //movieServices.getTop().then(response => setTop(response))
 }, []);
   
  return (
    <Layout>
      <BannerCarousel movies={movies} />
    </Layout>
  );
};

export const Home = withAuth(HomePage);