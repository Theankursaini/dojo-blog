import { Link } from "react-router-dom";


const BlogList = ({blogs,title}) =>{
    // const blogs = props.blogs;
    // const title = props.title;

    // try to add delete button on home page

    // const {data: blog , isLoading , error} = useFetch('http://localhost:8000/blogs'+ id);
    // const {id} = useParams();
    // const navigate = useNavigate();

    // const handelDelete = () => {
    //     fetch('http://locolhost:8000/blogs/' +blog.id,{
    //         method: 'DELETE',

    //     }).then(() => {
    //         navigate('/');

    //     })
    // }

   

    return (
     <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2>{ blog.title  }</h2>
                <p>Written by {blog.author}</p>
                </Link>
                {/* <button onClick={handelDelete}>Delete</button> */}
                
                
            </div>
        ))}
     </div>
    );
}

export default BlogList;