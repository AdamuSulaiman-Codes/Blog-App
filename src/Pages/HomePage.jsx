import { useState } from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import blogs from "../utility/data";
const HomePage = ({blogs}) => {
    // const [blogsData, setBlogsData] = useState(blogs);
    return ( 
        <>
            <NavBar/>
            <Main blogs={blogs}/>
        </>
     );
}
 
export default HomePage;