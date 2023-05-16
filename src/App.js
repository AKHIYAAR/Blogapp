import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlog from './component/AddBlog';
import HomePage from './component/HomePage';
import Nav_bar from './component/Nav_bar';

function App() {
  return (
    <div className="App">
      {/*<HomePage/>*/}
      {/*<AddBlog/>*/}
      <Nav_bar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add' element={<AddBlog/>}/>

      </Routes>
    </div>
  );
}

export default App;
