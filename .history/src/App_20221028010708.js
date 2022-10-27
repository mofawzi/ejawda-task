import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
