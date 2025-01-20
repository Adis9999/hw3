import "./App.css";
import Sneakers from "./components/Sneakers";

const App = () => {
  const products = [
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      image:
        "https://www.nubikk.com/media/55/d8/54/1728553667/21079900_22DN_1.jpg",
      price: "12 999 som",
    },
    {
      title: "Женские Кроссовки Adidas Superstar",
      image:
        "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77183256_02.jpg?imwidth=2048&imdensity=1&ts=1717670243777",
      price: "9 999 som",
    },
    {
      title: "Мужские Кроссовки Puma RS-X3",
      image:
        "https://colehaan.ae/cdn/shop/files/BaseTransform1_5fc0ba6b-dc61-48c5-be0b-bdcfb3b977fd_1200x1200.jpg?v=1717503802",
      price: "10 499 som",
    },
    {
      title: "Женские Кроссовки Reebok Classic Leather",
      image:
        "https://www.skolyx.se/5831-large_default/skolyx-premium-sneaker-in-white-leather.jpg",
      price: "8 499 som",
    },
    {
      title: "Мужские Кроссовки New Balance 574",
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1000,h_1000/global/389383/06/sv01/fnd/THA/fmt/png/Bari-Casual-Canvas-Sneakers",
      price: "11 999 som",
    },
    {
      title: "Женские Кроссовки Reebok Classic Leather",
      image:
        "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-133980.jpg",
      price: "8 499 som",
    },
    {
      title: "Женские Кроссовки Reebok Classic Leather",
      image:
        "https://img.freepik.com/premium-photo/sneakers-isolated-white-background_236836-23394.jpg",
      price: "8 499 som",
    },
    {
      title: "Женские Кроссовки Reebok Classic Leather",
      image:
        "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-134695.jpg",
      price: "8 499 som",
    },
  ];

  return (
    <div className="cards">
      {products.map((item) => (
        <Sneakers
          key={item.price}
          title={item.title}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default App;
