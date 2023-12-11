import "../src/App.css";
import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";


const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <ItemListContainer />
    </div>
  )
}

export default App