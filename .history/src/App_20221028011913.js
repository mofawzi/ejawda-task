import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Route path="/" component={HomeScreen} />
    </Router>
  );
}

export default App;
