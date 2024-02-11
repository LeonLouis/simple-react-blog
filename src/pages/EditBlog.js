import { Form, Link, redirect, useLoaderData } from 'react-router-dom';
import classes from '../modules/NewBlog.module.css';

function EditBlog() {
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
      <h1>Update {blogData.title}</h1>
      <Form method="PATCH" className={classes.newBlogForm}>
        <div className={classes.formControl}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" name="title" defaultValue={blogData.title}/>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="image">Image URL</label>
          <input type="text" name="image" id="image" required defaultValue={blogData.image}></input>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" required defaultValue={blogData.address}></input>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" rows="5" name="description" defaultValue={blogData.description}></textarea>
        </div>
        <input type="hidden" name="id" defaultValue={blogData.id}/>
        <div className={classes.actions}>
          <Link className={classes.cancelBtn} to="..">Cancel</Link>
          <button className={classes.submitBtn}>Update Blog</button>
        </div>
      </Form>
    </section>
  )
}

export default EditBlog;

export async function loader({params}) {
  const res = await fetch(`https://react-app-1ead7-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json?orderBy="$key"&equalTo="${params.id}"`);
  const resData = await res.json();
  return resData;
}

export async function action(data) {
  const formData = await data.request.formData();
  const blogData = Object.fromEntries(formData);
  
  let final_data = {};
  final_data[blogData.id] = blogData;
  delete final_data[blogData.id].id;

  await fetch('https://react-app-1ead7-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json', {
    method: 'PATCH',
    body: JSON.stringify(final_data),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}