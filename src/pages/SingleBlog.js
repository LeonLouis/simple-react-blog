import { useLoaderData } from 'react-router-dom';
import classes from '../modules/SingleBlog.module.css';

function SingleBlog() {
  let blogData = {};
  const blogs = useLoaderData();
  for (const key in blogs){
    blogData = {
      id: key,
      ...blogs[key]
    };
  }

  return (
    <section>
      <div className={classes.sbpImage} style={{'backgroundImage': `url(${blogData.image})`}}></div>
      <h1 className={classes.sbpTitle}>{blogData.title}</h1>
      <address className={classes.sbpAddress}>{blogData.address}</address>
      <p className={classes.sbpText}>{blogData.description}</p>
    </section>
  )
}

export default SingleBlog;

export async function loader({params}) {
  const res = await fetch(`https://react-app-1ead7-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json?orderBy="$key"&equalTo="${params.id}"`);
  const resData = await res.json();
  return resData;
}