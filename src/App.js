
import './App.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import BlogEdit from './BlogEdit';

function App() {
  return (
  <Router>
    <div className="App">
       <Navbar />
      <div className='content'>
       <Routes>
        <Route  exect path='/' element={<Home/>}/>
        <Route path ='/create' element={<Create />}/>
        <Route  path='/blogs/:id' element={<BlogDetails />}/>
        <Route path='/edit' element = {<BlogEdit/>} />
        <Route path='*' element = { <NotFound/> }/>
       </Routes>
       
         
     
       
       
      </div>
    </div>
  </Router>
  );
}

export default App;
