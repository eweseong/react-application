import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Netflix from './components/Netflix/Netflix';

function App() {
  return (
    <Router>
      <Netflix />
    </Router>
  );
}

export default App;
