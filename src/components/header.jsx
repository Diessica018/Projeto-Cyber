import "./header.css";

const options = ["Categories", "Deals", "What'New", "Delivery"];

export const Header = ({ logoImg }) => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logoImg} alt="" />
          <p>Shopcart</p>
        </div>
        <ul>
          {options.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
