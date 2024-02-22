import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeA from "./pages/homeA/HomeA";
// import HomeB from "./pages/homeB/HomeB";
// import HomeC from "./pages/homeC/HomeC";
// import HomeD from "./pages/homeD/HomeD";
import Author from "./pages/author/Author";
import New from "./pages/new/New";
import Popular from "./pages/popular/Popular";
import Post from "./pages/post/Post";
import ReadingList from "./pages/readinglist/ReadngList";
import Topics from "./pages/topics/Topics";
import NotFound from "./pages/notfound/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<HomeA />} />
        {/* <Route index element={<HomeB />} /> */}
        {/* <Route index element={<HomeC />} /> */}
        {/* {<Route index element={<HomeD />} />} */}
        <Route path="popular" element={<Popular />} />
        <Route path="new" element={<New />} />
        <Route path="readinglist" element={<ReadingList />} />
        <Route path="topic" element={<Topics />} />
        <Route path="post" element={<Post />} />
        <Route path="author" element={<Author />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
