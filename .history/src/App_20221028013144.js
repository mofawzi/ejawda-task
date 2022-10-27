import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" component={HomeScreen} />
      </Routes>
    </Router>
  );
}

export default App;
