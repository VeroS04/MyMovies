import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Classics, Details, Home, Login, NewMovies, SearchP, SignUp } from "./pages";
import { useMe } from "./hooks/useMe";


function App() {

  const { loginWithToken } = useMe();

  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="new-releases" element={<NewMovies />} />
          <Route path="search" element={<SearchP />} />
          <Route path="popular" element={<Classics />} />
          <Route path="movies/:id"  element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
