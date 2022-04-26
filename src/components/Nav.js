import "./header.scss";
import mark from "../imgs/marker.svg";
import search from "../imgs/search.svg";
import cart from "../imgs/cart.svg";

const Nav = () => {
  return (
    <nav>
      <h1>B-watch</h1>
      <div className="deleviery__location__wrapper">
        <img src={mark} alt="" id="mark__icon" />
        <p className="deleviery__location">
          Deliver to <b>Egypt</b>
        </p>
      </div>
      <div className="search__bar">
        <select name="" id="select">
          <option value="all">All</option>
        </select>
        <div className="search__icon">
          <img src={search} alt="" />
        </div>
      </div>
      <div className="locations">
        <select name="location" id="locations"></select>
      </div>
      <p className="deleviery__location">
        hello,sign in <b>Accounts &#38; lists</b>
      </p>
      <p className="deleviery__location">
        Returns <b>&#38; Orders</b>
      </p>
      <div className="shopping__cart__wrapper">
        <h3 id="items__counter">0</h3>
      <img src={cart} alt="" id="shopping__cart" />
      </div>
    </nav>
  );
};

export default Nav;
