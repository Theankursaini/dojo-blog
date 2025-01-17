import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Ankur');
    const [isPending, setisPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setisPending(true);

        // console.log(blog);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('new bog added');
            setisPending(false);
            // history.go(-1);
            navigate('/');
        })

    }


    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                 />
                <label>Blog body</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                   value={author}
                   onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="ankur">ankur</option>
                    <option value="saini">saini</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Add Blog</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default Create;