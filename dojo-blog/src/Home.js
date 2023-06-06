import BlogList from "./BlogList";
import { useState } from "react";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id:1},
        { title: 'Hello World', body: 'lorem ipsum...', author: 'pit', id:2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'luigi', id:3}
    ]);
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All titles!!"/>
        </div>
     );
}
 
export default Home;