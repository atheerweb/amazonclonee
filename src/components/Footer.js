import "./footer.scss";
import logo from "../imgs/logo.png";
const Footer = () => {
  let footerData = [
    {
      title: "Get To Know Us",
      links: ["Careers", "Blog", "About Amazon", "Investor relations"],
    },
    {
      title: "Make Money With Us",
      links: [
        "Sell products on Witty",
        "Sell on Witty business",
        "sell apps on Witty",
        "become an affiliate",
        "advertise products",
        "Self-pulish with us",
      ],
    },
    {
      title: "Amazon Payment Products",
      links: ["Amazon business card", "Shop with points", "Reload balance"],
    },
  ];

  return (
    <footer>
      <img src={logo} alt="" id="footer__logo" />
      <div className="footer__wrapper">
        {footerData.map((item, index) => {
          return (
            <ul key={index}>
              <h4>{item.title}</h4>
              {footerData[index].links.map((link) => {
                return <li>{link}</li>;
              })}
            </ul>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
