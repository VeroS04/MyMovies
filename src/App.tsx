import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, SignUp } from "./pages";
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
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//          <Route path="login" element={<Login />} />
///          <Route path="signup" element={<SignUp />} />
///          <Route path="new-releases" element={<NewReleases />} />
//          <Route path="search" element={<SearchP />} />
 //         <Route path="popular" element={<Popular />} />
 //         <Route path="movies/:id"  element={<Details/>}/>


export default App;
