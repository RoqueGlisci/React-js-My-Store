
// import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

import {BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./context/CartContext";

// import Productos from "./components/Productos";

function App() {

  //la funcion onAdd es donde se va a pasar la cantidad
  // const onAdd = (count) => {
  //   alert(`agregaste ${count} productos`)
  // }

  return (
    <>
      <MyContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/inicio" element={<ItemListContainer />} />
            {/* <Route path="/producto/:categories" element={<Productos />} /> */}
            <Route
              path="/producto/:categories"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>not found</h1>} />
          </Routes>
        </BrowserRouter>
      </MyContext>

      {/* <ItemDetailContainer /> */}
      {/* <ItemCount inicial={1} max={9} onAdd={onAdd}/> */}
      {/* <ItemListContainer greeting={'un pacer saludarte'} name={'Vicky'} /> */}
    </>
  );
}

export default App;
