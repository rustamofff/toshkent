import React from "react";

import "./App.css";
import Leyaut from "./Leyaut";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Arxeology from "./Pages/Arxeology";
import Ashyolar from "./Pages/Ashyolar";
import Olimlar from "./Pages/Olimlar";
import News from "./Pages/News";
import Elektronlar from "./Pages/Library";
import Museum from "./Pages/Museum";
import Library from "./Pages/Library";
import MuseumDetail from "./Pages/MuseumDetail";
import ArxeologyDetail from "./Pages/ArxeologyDetail";
import AshyolarDetail from "./Pages/AshyolarDetail";
import ScrollToTop from "./Components/ScrollToTop";
import NewsDetail from "./Pages/NewsDetail";

function App() {
  return (
    <div className="app_container">
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={Leyaut}>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/arxeology" Component={Arxeology} />
          <Route path="/ashyolar" Component={Ashyolar} />
          <Route path="/olimlar" Component={Olimlar} />
          <Route path="/news" Component={News} />
          <Route path="/library" Component={Library} />
          <Route path="/museum" Component={Museum} />
          <Route path="/museumDetail/:id" Component={MuseumDetail} />
          <Route path="/arxeologyDetail/:id" Component={ArxeologyDetail} />
          <Route path="/ashyolarDetail/:id" Component={AshyolarDetail} />
          <Route path="/newsDetail/:id" Component={NewsDetail} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
