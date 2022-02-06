import logo from "./logo.svg";
import "./App.css";
import Product from "./Components/Product";
import styled from "styled-components";
import products from "./Products.json";

function App() {
  return (
    <AppFrame className="App">
      {products.map((p, index) => {
        return <Product prod={p} key={index}></Product>;
      })}
    </AppFrame>
  );
}

export default App;

const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;
