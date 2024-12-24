
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {


    const {isLoading,data: blogs ,error} = useFetch('http://localhost:8000/blogs/');

    // const[name,setName]= useState('Ankur');
    // const[age,setAge]= useState(25);

    //  const handleClick = (e) => {
    //     console.log('Ram Ram Ji',e);
    //     setName('Saini');
    //     setAge(30);
    // }
    
    // const handelDelete =(id) => {
    //     const newBlog = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlog);
    // }
   

   
   
    return ( 
        <div className="home">
            { error && <div> { error }</div>}
            {isLoading && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <button onClick={handleClick}>Click me</button> */}
            
            {/* <BlogList blogs={blogs.filter((blog) => blog.author == 'ankur')} title="Ankur's blog's"/> */}
            {/* <p>{name} is {age} years old</p> */}
           
            
        </div>
    );
}
 
export default Home;


// [
//     {title: 'My new Website',body:'loren ipsum...',author: 'ankur',id:1},
//     {title: 'welcome party',body:'loren ipsum...',author: 'Saini',id:2},
//     {title: 'web dev top tips',body:'loren ipsum...',author: 'ankur',id:3},

// ]