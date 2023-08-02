import Layout from "./Components/Layout";
import Main from "./Components/Main";
import Home from "./Pages/Home";
import Fovorites from "./Pages/Fovorites";
import MovieInfo from "./Pages/MovieInfo";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fovorites" element={<Fovorites />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
