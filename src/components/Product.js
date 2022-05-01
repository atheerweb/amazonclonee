import "./product.scss";
const Product = ({ title, img }) => {
  return (
    <div className=" product">
      <h3 class="product__title">{title}</h3>
      <div className="img__wrapper">
        <img className="cat__img" src={img} alt={title}></img>
      </div>
      <a className="shop__more" href="/">
        Shop now
      </a>
    </div>
  );
};

export default Product;
