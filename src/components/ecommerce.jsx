import "../app.css";
import { Banner } from "./banner";

export const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="nomeProduto">
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Add to Card</button>
      </div>
    </div>
  );
};

export const Ecommerce = () => {
  return (
    <div className="container">
      <div className="main-card">
        <Banner />
        <h1>Headphones For You</h1>
        <div className="cards">
          <Card
            image="headphone.png"
            title={"Wireless Earbuds, IPX8 89.00"}
            description={"Organic Cotton, fairtrade certifield"}
          />
          <Card
            image="fone.jpg"
            title={"Wireless Earbuds, IPX8 89.00"}
            description={"Organic Cotton, fairtrade certifield"}
          />
        </div>
      </div>
    </div>
  );
};
