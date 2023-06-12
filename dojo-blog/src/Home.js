import BlogList from "./BlogList";
import { useState, useEffect } from "react";


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id:1},
        { title: 'Hello World', body: 'lorem ipsum...', author: 'pit', id:2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'luigi', id:3}
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }



    useEffect(() => {
        console.log('use effect ran');
    }, [name]);
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All titles!!" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;