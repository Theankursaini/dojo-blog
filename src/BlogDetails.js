import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {

    const {id} = useParams();
    const {data: blog , isLoading , error} = useFetch('http://localhost:8000/blogs/'+ id);
    const navigate = useNavigate();
    // edit-button 
    const [isPending, setisPending] = useState(false);
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');

    const handelDelete = () => {
        fetch('http://localhost:8000/blogs/' +blog.id,{
            method: 'DELETE'

        }).then(() => {
            navigate('/');

        })
    }
    // Edit-button 
    const handleEdit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setisPending(true);

        // console.log(blog);
        fetch('http://localhost:8000/blogs',{
            method: 'PUT',
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('bog Edited');
            setisPending(false);
            // history.go(-1);
            navigate(+blog.id);
        })

    }
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handelDelete}>Delete</button>
                    <button onClick={handleEdit}>Edit Blog</button>
                </article>
            )}
            {/* <h2>Blog details -{id}</h2> */}
        </div>
     );
}
 
export default BlogDetails;