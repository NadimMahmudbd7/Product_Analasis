
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import OverView from './Components/OverView/OverView';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Reviews from "./Components/Reviews/Reviews"
import Dashboard from "./Components/DashBoard/Dashboard"
import Blog from "./Components/Blog/Blog"
import About from "./Components/About/About"
import NotFound from './Components/NotFound/NotFound';
import CustomerReviews from './Components/Hooks/Hooks';

export const ReviewsContext = createContext()

function App() {
  const [reviews, setReviews] = CustomerReviews()
  return (
    <div className="App">
      <ReviewsContext.Provider value={[reviews, setReviews]}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<OverView></OverView>}></Route>
        <Route path='/home' element={<OverView></OverView>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </ReviewsContext.Provider>
    </div>
  );
}

export default App;
