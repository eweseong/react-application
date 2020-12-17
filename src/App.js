import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Netflix from './components/Netflix/Netflix';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <Router basename="/react-application">
      <ErrorBoundary>
        <Netflix />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
