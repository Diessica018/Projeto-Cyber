import "../app.css";
import { Banner } from "./banner";
import { useMensagem } from "../hooks/useMensagem";
import {Children, useState} from "react"
import Modal from "./Modal";




export const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="nomeProduto">
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick= {useMensagem}>Add to Card</button>
      </div>
    </div>
  );
};




export const Ecommerce = () => {
  const [abrirModal, setAbrirModal] = useState(false);

  function handleModal(){
  setAbrirModal(true)
}
  return (
    <div className="container">
      <div className="main-card">
    <div> 
      <button  className="cadastro" onClick={handleModal}>Login</button>
  <Modal isOpen={abrirModal} setFecharModal={() => setAbrirModal(!abrirModal)}
>
<form>
<div>
  <label For="email">  Email</label>
<input type="email" id="email" placeholder="Seu email"/>
</div>
<div>
  <label For="senha">  Senha</label>
  <input type="password" id="senha" placeholder="Sua senha" />
  
</div>
<>
<button className="enviar">Enviar</button></>

</form>
  </Modal>

     </div>
        <Banner />
        <h1>Headphones For You</h1>
        <div className="cards">
          <Card
            image="headphone.png"
            title={"Wireless Earbuds,89.00"}
            description={"Organic Cotton, fairtrade certifield"}
          />
          <Card
            image="fone.jpg"
            title={"Boat, 149.99"}
            description={"Organic Cotton, fairtrade certifield"}
          />
           <Card
            image="foneBranco.png"
            title={"JBL Pro, 199.99"}
            description={"Organic Cotton, fairtrade certifield"}
          />
          <Card
            image="foneDeFio.png"
            title={"Apple Fio, 189.99"}
            description={"Organic Cotton, fairtrade certifield"}
          />
           <Card
            image="foneJbl.png"
            title={"JBL, 229.99"}
            description={"Organic Cotton, fairtrade certifield"}
          />
        </div>
      </div>
      
    </div>
  );
};
