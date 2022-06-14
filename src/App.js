
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {

  //la funcion onAdd es donde se va a pasar la cantidad
  // const onAdd = (count) => {
  //   alert(`agregaste ${count} productos`)
  // }

  return (
    <>
      
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemCount inicial={1} max={9} onAdd={onAdd}/> */}
      {/* <ItemListContainer greeting={'un pacer saludarte'} name={'Vicky'} /> */}
      
    </>
    
  );
}

export default App;
