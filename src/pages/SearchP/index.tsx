import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { movieServices } from "../../services/movies";
import { type Movie, type Search } from "../../types";
import { IMG_URL } from "../../constants";
import { useParam } from "../../hooks/useParam";
import { withAuth } from "../../hoc/withAuth";
import { Layout } from "../../components/layout/Layout";
import { SearchForm } from "../../components/forms";
import { CardsMovie, Pager } from "../../components/common";


const SearchPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { params, setParams } = useParam()

  useEffect(() => {
    setSearchParams(params);
    const title = searchParams.get("title");
    const currentPage = searchParams.get('page') 
    movieServices.searchMovie(title, currentPage).then((data) => {
      setMovies(data.results);
    });
  }, [searchParams, params]);

  const searchQuery = (params: Search) => {
    setParams((prevState) => ({ ...prevState, title: params.title }));
  };

  const handlePageChange = (pageNumber: number) => {
    setParams((prevState) => ({ ...prevState, page: pageNumber.toString() }));
  };

  return (
    <Layout>
      <SearchForm onSearch={searchQuery} />
      <div className="container mb-5">
        <div className="row justify-content-around">
          {movies.map((movies) => (
            <div key={movies.id} className="col-3">
              <CardsMovie
                title={movies.title}
                img={`${IMG_URL + movies.poster_path}`}
                id={movies.id}
              />
            </div>
          ))}
        </div>
        <Pager currentPage={Number(params.page)} totalPages={500} onPageChange={handlePageChange}/>
      </div>
    </Layout>
  );
};

export const SearchP = withAuth(SearchPage);