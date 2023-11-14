import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Logo from "./../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import MyPopupUser from "./MyPopupUser";

function MyNavBar() {
  const [section, setSection] = useState([
    { name: "Home", isActive: true },
    { name: "Landing page", isActive: false },
  ]);
  const isLogin = useSelector((state) => state.auth.isLogin);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLoginSignup = location.pathname === "/Login" ? true : false;
  const setNewActive = (i) => {
    setSection((prev) => {
      const newSection = [...prev];
      for (let index = 0; index < newSection.length; index++) {
        if (index == i) {
          newSection[index] = { name: newSection[index].name, isActive: true };
          continue;
        }
        newSection[index] = { name: newSection[index].name, isActive: false };
      }
      return newSection;
    });
  };
  const createNavLink = (menu) => {
    const createLink = (nav, i) => (
      <Link
        to={`/${nav.name.replaceAll(/\s/g, "")}`}
        className={`${nav.isActive ? "text-primary" : "text-white"}`}
        onClick={() => {
          setNewActive(i);
          setIsMenuOpen(false);
        }}
      >
        {nav.name}
      </Link>
    );

    return section.map((nav, i) =>
      menu ? (
        <NavbarMenuItem key={`${i}${nav.name}`}>
          {createLink(nav, i)}
        </NavbarMenuItem>
      ) : (
        <NavbarItem key={`${i}${nav.name}`}>{createLink(nav, i)}</NavbarItem>
      ),
    );
  };

  return (
    !isLoginSignup && (
      <>
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="flex gap-3">
            <Image src={Logo} alt="logo"></Image>
            <span className="text-large font-extrabold">QUINTERIOR</span>
          </NavbarBrand>
          <NavbarContent justify="center" className="hidden sm:flex">
            {createNavLink()}
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className=" lg:flex">
              {!isLogin && (
                <Button as={Link} color="primary" to="/Login">
                  Login
                </Button>
              )}
              {isLogin && (
                <>
                  <MyPopupUser></MyPopupUser>
                  {/* <Button color="default">Logout</Button> */}
                </>
              )}
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>{createNavLink(true)}</NavbarMenu>
        </Navbar>
      </>
    )
  );
}

export default MyNavBar;
