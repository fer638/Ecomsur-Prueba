import React from 'react'
import { Provider } from "react-redux";
import ProductList from './components/productos/ProductList';
import store from './redux/store';
import Header from "./components/header/Header";
import 'boxicons';
import Carrito from './components/Cart/carrito';
import Index, { ListadeProductos } from './components/productos/Index';




const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  // const [response, setResponse] = useState('')

  // // call server to see if its running
  // useEffect(() => {
  //   const getApiResponse = () => {
  //     fetch('http://localhost:5000/')
  //       .then((res) => res.text())
  //       .then((res) => setResponse(res))
  //   }
  //   getApiResponse()
  // }, [])
  // // -------------------------------------------------

  return (
    <Provider store={store}>
      <div className='App'>
      <Header/>
     
    {/* <ProductList/> */}
    <ListadeProductos/>
    <Carrito/>
    </div>
    </Provider>
  )
  
}

export default App;
