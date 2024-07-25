import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import AboutUsPage from "./Pages/AboutUsPage";
import NoPage from "./Pages/NoPage";
import ViewPage from "./Pages/ViewPage";
import { useState } from "react";
import blogs from "./utility/data"

const App = () => {
  const [blogsData, setBlogsData] = useState(blogs);
  return ( 
    <>
      <Routes>
        <Route path="/" element={<HomePage  blogs={blogsData}/>} index/>
        <Route path="/create" element={<CreatePage setBlogs={setBlogsData}/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="*" element={<NoPage />} />
        <Route path="/view/:id" element={<ViewPage blogs={blogsData}/>} />
      </Routes>
    </>
   );
}
 
export default App;