import { Link } from "react-router-dom";
import { GrBook } from "react-icons/gr";

const quickLinks = [
  {
    id: 1,
    path: "/home",
    display: "Home",
  },
  {
    id: 2,
    path: "/books",
    display: "Books",
  },
  {
    id: 3,
    path: "/authors",
    display: "Authors",
  },
  {
    id: 4,
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  return (
    <footer className="footer pt-8 pb-4">
      <div className="container">
        <div className="flex justify-around flex-col md:flex-row flex-wrap gap-[30px]">
          <div className="flex items-center gap-2 font-bold text-3xl text-primaryColor">
            <GrBook />
            <span>Booksy</span>
          </div>

          <div className="flex flex-row justify-between">
            <div className="w-[150px] lg:w-[200px]">
              <ul>
                {quickLinks.map((link) => (
                  <li className="mb-4" key={link.id}>
                    <Link
                      className="text-[16px] leading-7 font-[400] text-textColor "
                      to={link.path}
                    >
                      {link.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;