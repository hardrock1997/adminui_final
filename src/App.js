
import MainContainer from '../src/components/MainContainer'
import ErrorBoundary from './errorhandling/ErrorBoundary';
import './App.css';

const App = ()=> {
  return (
    <>
    <ErrorBoundary fallback={<>Oops,Something went wrong!!!</>}>
      <MainContainer/>
    </ErrorBoundary>
   
    </>
    
  );
}

export default App;
