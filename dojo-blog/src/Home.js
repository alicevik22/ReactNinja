import BlogList from "./BlogList";
import { useState, useEffect } from "react";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPeding] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsPeding(false);
            });
        }, 3000)
    }, []);
    
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All titles!!" />}
        </div>
     );
}
 
export default Home;