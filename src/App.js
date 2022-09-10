import logo from './logo.svg';
import './App.css';
import Topo from  './components/Topo/header'
import Centro from './components/Content/content'
import Fim from './components/Footer/footer'

function App() {
  return (
    <div className="App">
      <Topo/>
      <Centro/>
      <Fim/>
      
    </div>
    
  );
}

export default App;
