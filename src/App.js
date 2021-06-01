import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ColorsApp from './ColorsApp';

/** App
 * 
 * App -> Routes
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorsApp />
      </BrowserRouter>

    </div>
  );
}

export default App;
