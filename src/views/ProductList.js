import "./productList.scss";
import emptyStar from "../imgs/emptyStar.svg";
import star from "../imgs/star.svg";
const ProductList = () => {
  let reviews = [
    {
      stars: [star, emptyStar, emptyStar, emptyStar, emptyStar],
    },
    {
      stars: [star, star, emptyStar, emptyStar, emptyStar],
    },
    {
      stars: [star, star, star, emptyStar, emptyStar],
    },
    {
      stars: [star, star, star, star, emptyStar],
    },
    {
      stars: [star, star, star, star, star],
    },
  ];
  let computersCat = [
    "Computer Accessories & Peripherals",
    "Computer Components",
    "Computers & Tablets",
    "Data Storage",
    "Laptop Accessories",
    "Monitors",
    "Networking Products",
    "Power Strips & Surge",
    "Protectors",
    "Printers",
    "Scanners",
    "Servers",
    "Tablet Accessories",
    "Tablet Replacement Parts",
    "Warranties & Services",
  ];
  return (
    <div className="productList__wrapper">
      <aside id="filters">
        <ul className="computers__filters">
          <h4 className="p_title">Computers</h4>
          {computersCat.map((item, index) => {
            return (
              <li className="computers__cats__item" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <h4 className="p_title">Customer Reviews</h4>
        <ul className="ratings">
          {reviews.map((review, index) => {
            return (
              <li className="reviews" key={index}>
                {review.stars.map((star) => {
                  return <img src={star} alt="stars" />;
                })}
              </li>
            );
          })}
        </ul>
        <h4 className="p_title">Condition</h4>
        <ul>
          <li className="computers__cats__item">New</li>
          <li className="computers__cats__item">Used</li>
          <li className="computers__cats__item">Renewed</li>
        </ul>
      </aside>
      <div className="productList">
        <div className="border"></div>
      </div>
    </div>
  );
};

export default ProductList;
