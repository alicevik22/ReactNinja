import BlogList from "./BlogList";
import { useState, useEffect } from "react";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPeding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPeding(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPeding(false);
                    setError(err.message);
                })
        }, 1000)
    }, []);
    
    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All titles!!" />}
        </div>
     );
}
 
export default Home;