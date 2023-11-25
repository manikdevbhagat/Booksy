import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { GrBook } from "react-icons/gr";
// import { RxAvatar } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "../../hooks/reduxhooks";

const navLinks = [
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

const Header = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { totalItems } = useAppSelector((state) => state.cart);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        headerRef.current?.classList.add("sticky_header");
      } else {
        headerRef.current?.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => {
    menuRef.current?.classList.toggle("show_menu");
    setShowMenu(!showMenu);
  };

  return (
    <header ref={headerRef} className="header flex items-center bg-green-100">
      <div className="flex flex-1 items-center justify-between px-8 py-4">
        {/*Logo*/}
        <div>
          <Link to="/home">
            <div className="flex items-center gap-2 font-bold text-3xl text-primaryColor">
              <GrBook />
              <span>Booksy</span>
            </div>
          </Link>
        </div>
        {/*Menu Items*/}
        <div ref={menuRef} onClick={toggleMenu} className="navigation">
          <ul className="menu flex items-center gap-12">
            {navLinks.map((link) => {
              return (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-brownColor underline underline-offset-4 text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-greenColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        {/*Login/User Icon*/}
        <div className="relative flex items-center gap-6 w-12 h-12 mr-4">
          <Link to="/cart">
            <IoCartOutline className="w-8 h-8" />
          </Link>
          {totalItems > 0 && (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-0 right-0">
              {totalItems}
            </div>
          )}
          <div className="md:hidden">
            <span onClick={toggleMenu}>
              {showMenu ? (
                <AiOutlineClose className="w-6 h-6 cursor-pointer relative z-50" />
              ) : (
                <BiMenu className="w-6 h-6 cursor-pointer" />
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;