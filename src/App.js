import './App.css';
import TestComponent from './Components/TestComponent/testComponent';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponent from './Components/FallbackComponent/fallbackComponent';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <TestComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
