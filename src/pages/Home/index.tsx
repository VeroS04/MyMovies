
import { BannerCarousel } from "../../components/common/baner-carrousell";
import { Layout } from "../../components/layout";
import { withAuth } from "../../hoc/withAuth";
import { movieServices } from "../../services/movies";
import { useEffect, useState } from "react";

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  ///const [popular, setPopular] = useState([]);
  //const [top, setTop] = useState([]);

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