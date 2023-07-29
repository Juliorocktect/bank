import './App.css';
import Graph from './Components/Graph/Graph';
import History from './Components/History/History';
import { BrowserRouter as Router, Route,Routes,Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navigator from './Components/Navigator/Navigator';


function App() {
  return (
    <Routes>
    <Route path="/graph" element={<Graph />}></Route>
    <Route path="/dashboard" element={<Graph />}></Route>
    <Route path='/' element={<Home/>}></Route>
  </Routes>
  );
}

export default App;
