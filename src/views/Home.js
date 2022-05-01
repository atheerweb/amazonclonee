import "./home.scss";
import angleLeft from "../imgs/angle-left.svg";
import angleRight from "../imgs/angle-right.svg";
import { useState } from "react";
import Product from "../components/Product";
import ProductSlider from "../components/ProductSlider";
import { Link } from "react-router-dom";
const Home = () => {
  //data
  let ad = useState(
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
  );
  let [currentSlide, setCurrentSlide] = useState(0);
  let slides = [];
  let shopByCat = [
    {
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
      text: "Headsets",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
      text: "Keyboards",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
      text: "Desktop Mice",
    },
    {
      img: "https://m.media-amazon.com/images/I/71HAM56AEGL._AC_SY200_.jpg",
      text: "Laptops",
    },
  ];
  let [leftSlider, setLeftSlider] = useState(false);
  let [rightSlider, setRightSlider] = useState(false);
  //logic
  for (let i = 0; i < 5; i++) {
    slides.push({
      key: `${i}`,
      img: `${process.env.PUBLIC_URL}/imgs/slide${i}.jpg`,
    });
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    setRightSlider(true);
    setLeftSlider(false);
  };
  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    setLeftSlider(true);
    setRightSlider(false);
  };
  return (
    //slider
    <div className="home__container">
      <header className="slider__wrapper">
        {slides.map((slide, index) => {
          return (
            <div className="img">
              {index === currentSlide && (
                <img
                  src={slide.img}
                  key={slide.key}
                  className="slider"
                  alt=""
                />
              )}
            </div>
          );
        })}
        <div className="arrow__container" id="slider__arrow">
          <div
            className="arrow__wrapper"
            onClick={previousSlide}
            id={leftSlider ? "active" : ""}
          >
            <img src={angleLeft} alt="" className="arrow " />
          </div>
          <div
            className="arrow__wrapper"
            onClick={nextSlide}
            id={rightSlider ? "active" : ""}
          >
            <img src={angleRight} alt="" className="arrow " />
          </div>
        </div>
      </header>
      {/*productsrow*/}
      <div className="products__container">
        <div className="products">
          <Link to="/productslist" className="shop__catagories product">
            <h3 class="product__title">Shop by categories</h3>
            <div className="items">
              {shopByCat.map((type, index) => {
                return (
                  <div className="item">
                    <img
                      key={index}
                      src={type.img}
                      alt=""
                      className="item__img"
                    />
                    <p>{type.text}</p>
                  </div>
                );
              })}
            </div>
            <a className="shop__more" href="/" id="see__more">
              See more
            </a>
          </Link>
          <Link to="/productslist">
            <Product
              title="Monitors"
              img="https://m.media-amazon.com/images/I/91qoAzLGPcL._AC_UY327_FMwebp_QL65_.jpg"
            />
          </Link>

          <Link to="/productslist">
            <Product
              title="Graphic cards"
              img="https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SY200_.jpg"
            />
          </Link>
          <aside>
            <div className="signin__popup">
              <h3>Sign in for the best experience</h3>
              <button className="signin__button">sign in securely</button>
            </div>
            <div className="ad">
              <img src={ad} alt="" id="ad__img" />
            </div>
          </aside>
        </div>
        <div className="products">
          <Link to="/productslist">
            <Product
              title="Graphic tablets"
              img="https://m.media-amazon.com/images/I/41pSgmNanZL._AC_SY200_.jpg"
            />
          </Link>
          <Link to="/productslist">
            <Product
              title="PC ram"
              img="https://m.media-amazon.com/images/I/61e0Q5nA6PL._AC_SY200_.jpg"
            />
          </Link>
          <Link to="/productslist">
            <Product
              title="RGB lights"
              img="https://m.media-amazon.com/images/I/81DwO7ZZs2L._AC_SY200_.jpg"
            />
          </Link>
          <Link to="/productslist">
            <Product
              title="CPUs"
              img="https://m.media-amazon.com/images/I/51f2hkWjTlL._AC_SY200_.jpg"
            />
          </Link>
        </div>
        <div className="productSlider">
          <ProductSlider angleLeft={angleLeft} angleRight={angleRight} />
        </div>
        <div className="productSlider">
          <ProductSlider angleLeft={angleLeft} angleRight={angleRight} />
        </div>
        <div className="products">
          <Link to="/productslist">
            <Product
              title="Graphic tablets"
              img="https://m.media-amazon.com/images/I/41pSgmNanZL._AC_SY200_.jpg"
            />
          </Link>
          <Link to="/productslist">
            <Product
              title="PC ram"
              img="https://m.media-amazon.com/images/I/61e0Q5nA6PL._AC_SY200_.jpg"
            />
          </Link>
          <Link to="/productslist">
            <Product
              title="RGB lights"
              img="https://m.media-amazon.com/images/I/81DwO7ZZs2L._AC_SY200_.jpg"
            />
          </Link>
          <Link to="/productslist">
            <Product
              title="CPUs"
              img="https://m.media-amazon.com/images/I/51f2hkWjTlL._AC_SY200_.jpg"
            />
          </Link>
        </div>
        <div className="products">
          <Link to="/productslist">
            <Product
              title="Monitors"
              img="https://m.media-amazon.com/images/I/91qoAzLGPcL._AC_UY327_FMwebp_QL65_.jpg"
            />
          </Link>
          <Link to="/productslist">
            <Product
              title="Graphic tablets"
              img="https://m.media-amazon.com/images/I/41pSgmNanZL._AC_SY200_.jpg"
            />
          </Link>
          <Link to="/productslist">
            <Product
              title="Graphic cards"
              img="https://m.media-amazon.com/images/I/81t7Ga7nyxS._AC_SY200_.jpg"
            />
          </Link>
          <Link to="/productslist">
            <Product
              title="Graphic tablets"
              img="https://m.media-amazon.com/images/I/41pSgmNanZL._AC_SY200_.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
