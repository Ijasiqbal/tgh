import './App.css'
import { BrowserRouter as Router, Route,Routes ,Link, useLocation } from 'react-router-dom';
import Home from './components/Home'
import Bookmarks from './components/Bookmarks'
import Navigation from './components/Navigation';

function App() {


  return (
      <div className="base">
        <Navigation />
      </div>
  )
}

export default App
