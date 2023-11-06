import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarItem,
  Button,
  cn,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import Logo from "./../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
function MyNavBar() {
  const [section, setSection] = useState([
    { name: "Home", isActive: true },
    { name: "Landing page", isActive: false },
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        className={cn(`${nav.isActive ? "text-primary" : "text-white"}`)}
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
      )
    );
  };

  return (
    <>
      <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex gap-3">
          <Image src={Logo} alt="logo"></Image>
          <span className="text-large">QUINTERIOR</span>
        </NavbarBrand>
        <NavbarContent justify="center" className="hidden sm:flex">
          {createNavLink()}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className=" lg:flex">
            <Button color="primary" href="#">
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>{createNavLink(true)}</NavbarMenu>
      </Navbar>
    </>
  );
}

export default MyNavBar;
