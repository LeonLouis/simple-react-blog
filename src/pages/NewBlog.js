import { Form, Link, redirect } from 'react-router-dom';
import classes from '../modules/NewBlog.module.css';

function NewBlog() {
  return (
    <section>
      <h1>New Blog</h1>
      <Form method="POST" className={classes.newBlogForm}>
        <div className={classes.formControl}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" name="title"/>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="image">Image URL</label>
          <input type="text" name="image" id="image" required></input>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" required></input>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" rows="5" name="description"></textarea>
        </div>
        <input type="hidden" name="favorite" defaultValue="0" />
        <div className={classes.actions}>
          <Link className={classes.cancelBtn} to="..">Cancel</Link>
          <button className={classes.submitBtn}>Add Blog</button>
        </div>
      </Form>
    </section>
  )
}

export default NewBlog;

export async function action(data) {
  const formData = await data.request.formData();
  const blogData = Object.fromEntries(formData);
  blogData.favorite = parseInt(blogData.favorite);
  await fetch(`${process.env.REACT_APP_FIREBASE_URL}/blogs.json`, {
    method: 'POST',
    body: JSON.stringify(blogData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}