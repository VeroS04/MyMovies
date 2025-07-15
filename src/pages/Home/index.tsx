import { useEffect, useState } from "react";
import { BannerCarousel } from "../../components/common/baner-carrousell";
import { Layout } from "../../components/layout";
import { movieServices } from "../../services";

const [movies, setMovies] = useState([]);

useEffect(() => {
    movieServices.getUpcoming().then(response => setMovies(response.splice(0, 5)))
    //movieServices.getPopular().then(response => setPopular(response))
    //movieServices.getTop().then(response => setTop(response))
 }, []);

const Home = () => {
  return (
    <Layout>
      <BannerCarousel movies={movies} />
    </Layout>
  );
};

export default Home;