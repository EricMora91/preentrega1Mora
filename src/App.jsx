import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting = "¡Bienvenidos a Accesorios Li-On! Estamos a tus manos."/>
    </div>
  );
}

export default App;
