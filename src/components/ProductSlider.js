import "./productSlider.scss";
import { Link } from "react-router-dom";
const productSlider = ({ angleLeft, angleRight }) => {
  //data
  let productCarsouel = [
    "https://m.media-amazon.com/images/I/61nezBJp73L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71GacmmvbPL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61AQy515L5L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/611wJhijGWL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61mWe7IAPwL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51EsAnKJgUL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61nezBJp73L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71GacmmvbPL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61AQy515L5L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/611wJhijGWL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61mWe7IAPwL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51EsAnKJgUL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61nezBJp73L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71GacmmvbPL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61AQy515L5L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/611wJhijGWL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61mWe7IAPwL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51EsAnKJgUL._AC_SY200_.jpg",
  ];
  //logic
  let scrollX = (e) => {
    const productScroll = e.target.parentElement.parentElement.childNodes[1];
    productScroll.scrollLeft += 1350;
  };
  let scrollY = (e) => {
    const productScroll = e.target.parentElement.parentElement.childNodes[1];
    productScroll.scrollLeft -= 1350;
  };
  return (
    <div className="productSlider__wrapper">
      <h3>Popular products in PC internationally</h3>
      <div className="productsCarsouel__wrapper">
        {productCarsouel.map((item, index) => {
          return (
            <Link to="/productlist">
              <img src={item} key={index} alt="" />
            </Link>
          );
        })}
      </div>
      <div className="arrow__container" id="productCarsouel__arrow">
        <div className="arrow__wrapper left" onClick={scrollY} id="ps">
          <img src={angleLeft} alt="" className="psarrow " />
        </div>
        <div className="arrow__wrapper right" onClick={scrollX} id="ps">
          <img src={angleRight} alt="" className="psarrow " />
        </div>
      </div>
    </div>
  );
};

export default productSlider;
