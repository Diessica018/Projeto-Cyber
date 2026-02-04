import "./app.css";
import { Ecommerce } from "./components/ecommerce";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header logoImg="logo.png" />
      <Ecommerce />
    </>
  );
}

export default App;
