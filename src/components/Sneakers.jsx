const Sneakers = ({ title, image, price }) => (
  <div className="card">
    <img src={image} />
    <div>
      <h2>{title}</h2>
      <p style={{ color: "#BDBDBD" }}>Цена:</p>
      <h3>{price}</h3>
    </div>
  </div>
);

export default Sneakers;
