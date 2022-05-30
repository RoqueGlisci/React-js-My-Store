
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'un pacer saludarte'} name={'Vicky'} />
    </>
    
  );
}

export default App;
