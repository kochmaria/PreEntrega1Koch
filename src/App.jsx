
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
     <Navbar/>
     <ItemListContainer/>
     <ItemListContainer greeting="¡Hola! Te damos la bienvenida a nuestra tienda de auriculares." />


    </>
  );
}

export default App;
