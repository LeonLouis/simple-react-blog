import BlogItem from './BlogItem';
import classes from '../../modules/BlogList.module.css';

function BlogList({data}) {
  return (
    <ul className={classes.bloglist}>
      {data.map((blog) => {
        return <BlogItem key={blog.id} blog={blog} />
      })}
    </ul>
  )
}

export default BlogList;