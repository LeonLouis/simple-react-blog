import { useEffect, useState } from 'react';
import BlogList from '../components/blogs/BlogList';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_FIREBASE_URL}/blogs.json`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const blogs = [];

      for (const key in data){
        const blog = {
          id: key,
          ...data[key]
        };
        blogs.push(blog);
      }
      setBlogData(blogs);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <h1>Blogs</h1>
      {isLoading ? 
        <div className="loader"></div>
      : <BlogList data={blogData}/> }
    </section>
  )
}

export default Home;